import requests
import xml.etree.ElementTree as ET
import re
import os
from filelock import FileLock
import pickle
import shutil
from functools import wraps

class Cache(object):
    def __init__(self, path="/tmp/cache.json"):
        self.filelock = FileLock("{}.lock".format(path), 1)
        self.cachefile = path
        dirname = os.path.dirname(path)
        if not os.path.exists(dirname):
            os.path.makedirs(dirname)
        if os.path.exists(path):
            print("Cache file found")
            try:
                with self.filelock:
                    print()
                    with open(self.cachefile, "rb") as fp:
                        self.cache = pickle.load(fp)
            except Exception as e:
                print(e)
                self.cache = {}
        else:
            print("Cache file not found")
            self.cache = {}


    def __call__(self, func):
        if(hasattr(func, '__name__')):
            func_hash = ".".join([func.__module__,
                         func.__class__.__name__,
                         func.__name__])
        else:
            func_hash = repr(func_hash)
        self.cache.setdefault(func_hash, {})
        @wraps(func)
        def _wrapper(*args, **kwargs):
            call_hash = repr((args, kwargs))
            if call_hash not in self.cache[func_hash]:
                self.cache[func_hash][call_hash] = func(*args, **kwargs)
                try:
                    with self.filelock:
                        with open(self.cachefile, "wb") as fp:
                            pickle.dump(self.cache, fp)
                except Exception as e:
                    print(e)
            return self.cache[func_hash][call_hash]
        return _wrapper

cache = Cache("/tmp/cache.json")

class DvdFR:
    @staticmethod
    def _xml_to_dict_dvd(xmlstring):
        xmlroot = ET.fromstring(xmlstring)
        if xmlroot.tag != "dvd":
            raise Exception("Excpected dvds element, got {}".format(xmlroot.tag))
        dvd = {
            "title": xmlroot.findall('titres/fr')[0].text,
            "vo_title": xmlroot.findall('titres/vo')[0].text,
            "year": xmlroot.findall('annee')[0].text,
            "description": xmlroot.findall('synopsis')[0].text,
            "genres": list(map(lambda x:x.text, xmlroot.findall('categories/category'))),
            "countries": list(map(lambda x:x.text, xmlroot.findall('listePays/pays'))),
            "directors": list(map(lambda x:x.text, xmlroot.findall('stars/star[@type="Réalisateur"]'))),
            "actors": list(map(lambda x:x.text, xmlroot.findall('stars/star[@type="Acteur"]'))),
            "cover": xmlroot.find('cover').text,
            "barcode": xmlroot.find('ean').text,
            "id": xmlroot.find('id').text,
        }
        return dvd

    @staticmethod
    @cache
    def get(id):
        response = requests.get("http://www.dvdfr.com/api/dvd.php", params={"id": id})
        return DvdFR._xml_to_dict_dvd(response.text)

    @staticmethod
    def _xml_to_dict_dvds(xmlstring):
        xmlroot = ET.fromstring(xmlstring)
        if xmlroot.tag != "dvds":
            raise Exception("Excpected dvds element, got {}".format(xmlroot.tag))
        dvds = []
        for xmldvd in xmlroot:
            if xmldvd.tag != "dvd":
                raise Exception("Excpected dvd element, got {}".format(xmldvd.tag))
            dvd = {"titles":dict(map(lambda x: (x.tag, x.text), xmldvd.find("titres"))), 
                   "directors":list(map(lambda x: x.text, xmldvd.find("stars").findall("star"))),
                   "year": xmldvd.find("annee").text,
                   "cover": xmldvd.find("cover").text,
                   "id": xmldvd.find("id").text,}
            dvds.append(dvd)
        return dvds

    @staticmethod
    @cache
    def search(search):
        search_data = {}
        if re.match("^\d{13}$", search):
            search_data['gencode'] = search
        else:
            search_data['title'] = search
        response = requests.get("http://www.dvdfr.com/api/search.php", params=search_data)
        return DvdFR._xml_to_dict_dvds(response.text)
    
    @staticmethod
    def download_cover(src, dst):
        response = requests.get(src, stream=True)
        response.raw.decode_content = True
        with open(dst, 'wb') as fp:
            shutil.copyfileobj(response.raw, fp)
        
