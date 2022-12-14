! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("ZXing", [], e) : "object" == typeof exports ? exports.ZXing = e() : t.ZXing = e()
}(window, function() {
    return function(t) {
        var e = {};

        function r(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = t, r.c = e, r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, r.t = function(t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) r.d(n, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return n
        }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return r.d(e, "a", e), e
        }, r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "", r(r.s = 71)
    }([function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(r(6).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(r(6).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        var n, o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (o = n || (n = {}))[o.AZTEC = 0] = "AZTEC", o[o.CODABAR = 1] = "CODABAR", o[o.CODE_39 = 2] = "CODE_39", o[o.CODE_93 = 3] = "CODE_93", o[o.CODE_128 = 4] = "CODE_128", o[o.DATA_MATRIX = 5] = "DATA_MATRIX", o[o.EAN_8 = 6] = "EAN_8", o[o.EAN_13 = 7] = "EAN_13", o[o.ITF = 8] = "ITF", o[o.MAXICODE = 9] = "MAXICODE", o[o.PDF_417 = 10] = "PDF_417", o[o.QR_CODE = 11] = "QR_CODE", o[o.RSS_14 = 12] = "RSS_14", o[o.RSS_EXPANDED = 13] = "RSS_EXPANDED", o[o.UPC_A = 14] = "UPC_A", o[o.UPC_E = 15] = "UPC_E", o[o.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION", e.default = n
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(13),
            o = r(74),
            a = function() {
                function t(t, e) {
                    this.x = t, this.y = e
                }
                return t.prototype.getX = function() {
                    return this.x
                }, t.prototype.getY = function() {
                    return this.y
                }, t.prototype.equals = function(e) {
                    if (e instanceof t) {
                        var r = e;
                        return this.x === r.x && this.y === r.y
                    }
                    return !1
                }, t.prototype.hashCode = function() {
                    return 31 * o.default.floatToIntBits(this.x) + o.default.floatToIntBits(this.y)
                }, t.prototype.toString = function() {
                    return "(" + this.x + "," + this.y + ")"
                }, t.orderBestPatterns = function(t) {
                    var e, r, n, o = this.distance(t[0], t[1]),
                        a = this.distance(t[1], t[2]),
                        i = this.distance(t[0], t[2]);
                    if (n = o <= a && i <= a ? (r = t[0], e = t[1], t[2]) : a <= i && o <= i ? (r = t[1], e = t[0], t[2]) : (r = t[2], e = t[0], t[1]), this.crossProductZ(e, r, n) < 0) {
                        var u = e;
                        e = n, n = u
                    }
                    t[0] = e, t[1] = r, t[2] = n
                }, t.distance = function(t, e) {
                    return n.default.distance(t.x, t.y, e.x, e.y)
                }, t.crossProductZ = function(t, e, r) {
                    var n = e.x,
                        o = e.y;
                    return (r.x - n) * (t.y - o) - (r.y - o) * (t.x - n)
                }, t
            }();
        e.default = a
    }, function(t, e, r) {
        "use strict";
        var n, o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (o = n || (n = {}))[o.OTHER = 0] = "OTHER", o[o.PURE_BARCODE = 1] = "PURE_BARCODE", o[o.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", o[o.TRY_HARDER = 3] = "TRY_HARDER", o[o.CHARACTER_SET = 4] = "CHARACTER_SET", o[o.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", o[o.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", o[o.ASSUME_GS1 = 7] = "ASSUME_GS1", o[o.RETURN_CODABAR_START_END = 8] = "RETURN_CODABAR_START_END", o[o.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK", o[o.ALLOWED_EAN_EXTENSIONS = 10] = "ALLOWED_EAN_EXTENSIONS", e.default = n
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(r(6).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e(e) {
                void 0 === e && (e = void 0);
                var r = t.call(this, e) || this;
                return r.message = e, r
            }
            return o(e, t), e
        }(r(73).CustomError);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.arraycopy = function(t, e, r, n, o) {
                for (; o--;) r[n++] = t[e++]
            }, t.currentTimeMillis = function() {
                return Date.now()
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(15),
            o = r(7),
            a = r(28),
            i = r(11),
            u = r(1),
            f = function() {
                function t(t, e, r, n) {
                    if (this.width = t, this.height = e, this.rowSize = r, this.bits = n, null == e && (e = t), this.height = e, t < 1 || e < 1) throw new u.default("Both dimensions must be greater than 0");
                    null == r && (r = Math.floor((t + 31) / 32)), this.rowSize = r, null == n && (this.bits = new Int32Array(this.rowSize * this.height))
                }
                return t.parseFromBooleanArray = function(e) {
                    for (var r = e.length, n = e[0].length, o = new t(n, r), a = 0; a < r; a++)
                        for (var i = e[a], u = 0; u < n; u++) i[u] && o.set(u, a);
                    return o
                }, t.parseFromString = function(e, r, n) {
                    if (null === e) throw new u.default("stringRepresentation cannot be null");
                    for (var o = new Array(e.length), a = 0, i = 0, f = -1, s = 0, d = 0; d < e.length;)
                        if ("\n" === e.charAt(d) || "\r" === e.charAt(d)) {
                            if (i < a) {
                                if (-1 === f) f = a - i;
                                else if (a - i !== f) throw new u.default("row lengths do not match");
                                i = a, s++
                            }
                            d++
                        } else if (e.substring(d, d + r.length) === r) d += r.length, o[a] = !0, a++;
                    else {
                        if (e.substring(d, d + n.length) !== n) throw new u.default("illegal character encountered: " + e.substring(d));
                        d += n.length, o[a] = !1, a++
                    }
                    if (i < a) {
                        if (-1 === f) f = a - i;
                        else if (a - i !== f) throw new u.default("row lengths do not match");
                        s++
                    }
                    for (var l = new t(f, s), c = 0; c < a; c++) o[c] && l.set(Math.floor(c % f), Math.floor(c / f));
                    return l
                }, t.prototype.get = function(t, e) {
                    var r = e * this.rowSize + Math.floor(t / 32);
                    return 0 != (this.bits[r] >>> (31 & t) & 1)
                }, t.prototype.set = function(t, e) {
                    var r = e * this.rowSize + Math.floor(t / 32);
                    this.bits[r] |= 1 << (31 & t) & 4294967295
                }, t.prototype.unset = function(t, e) {
                    var r = e * this.rowSize + Math.floor(t / 32);
                    this.bits[r] &= ~(1 << (31 & t) & 4294967295)
                }, t.prototype.flip = function(t, e) {
                    var r = e * this.rowSize + Math.floor(t / 32);
                    this.bits[r] ^= 1 << (31 & t) & 4294967295
                }, t.prototype.xor = function(t) {
                    if (this.width !== t.getWidth() || this.height !== t.getHeight() || this.rowSize !== t.getRowSize()) throw new u.default("input matrix dimensions do not match");
                    for (var e = new n.default(Math.floor(this.width / 32) + 1), r = this.rowSize, o = this.bits, a = 0, i = this.height; a < i; a++)
                        for (var f = a * r, s = t.getRow(a, e).getBitArray(), d = 0; d < r; d++) o[f + d] ^= s[d]
                }, t.prototype.clear = function() {
                    for (var t = this.bits, e = t.length, r = 0; r < e; r++) t[r] = 0
                }, t.prototype.setRegion = function(t, e, r, n) {
                    if (e < 0 || t < 0) throw new u.default("Left and top must be nonnegative");
                    if (n < 1 || r < 1) throw new u.default("Height and width must be at least 1");
                    var o = t + r,
                        a = e + n;
                    if (a > this.height || o > this.width) throw new u.default("The region must fit inside the matrix");
                    for (var i = this.rowSize, f = this.bits, s = e; s < a; s++)
                        for (var d = s * i, l = t; l < o; l++) f[d + Math.floor(l / 32)] |= 1 << (31 & l) & 4294967295
                }, t.prototype.getRow = function(t, e) {
                    null == e || e.getSize() < this.width ? e = new n.default(this.width) : e.clear();
                    for (var r = this.rowSize, o = this.bits, a = t * r, i = 0; i < r; i++) e.setBulk(32 * i, o[a + i]);
                    return e
                }, t.prototype.setRow = function(t, e) {
                    o.default.arraycopy(e.getBitArray(), 0, this.bits, t * this.rowSize, this.rowSize)
                }, t.prototype.rotate180 = function() {
                    for (var t = this.getWidth(), e = this.getHeight(), r = new n.default(t), o = new n.default(t), a = 0, i = Math.floor((e + 1) / 2); a < i; a++) r = this.getRow(a, r), o = this.getRow(e - 1 - a, o), r.reverse(), o.reverse(), this.setRow(a, o), this.setRow(e - 1 - a, r)
                }, t.prototype.getEnclosingRectangle = function() {
                    for (var t = this.width, e = this.height, r = this.rowSize, n = this.bits, o = t, a = e, i = -1, u = -1, f = 0; f < e; f++)
                        for (var s = 0; s < r; s++) {
                            var d = n[f * r + s];
                            if (0 !== d) {
                                if (f < a && (a = f), u < f && (u = f), 32 * s < o) {
                                    for (var l = 0; 0 == (d << 31 - l & 4294967295);) l++;
                                    32 * s + l < o && (o = 32 * s + l)
                                }
                                if (i < 32 * s + 31) {
                                    for (l = 31; d >>> l == 0;) l--;
                                    i < 32 * s + l && (i = 32 * s + l)
                                }
                            }
                        }
                    return i < o || u < a ? null : Int32Array.from([o, a, i - o + 1, u - a + 1])
                }, t.prototype.getTopLeftOnBit = function() {
                    for (var t = this.rowSize, e = this.bits, r = 0; r < e.length && 0 === e[r];) r++;
                    if (r === e.length) return null;
                    for (var n = r / t, o = r % t * 32, a = e[r], i = 0; 0 == (a << 31 - i & 4294967295);) i++;
                    return o += i, Int32Array.from([o, n])
                }, t.prototype.getBottomRightOnBit = function() {
                    for (var t = this.rowSize, e = this.bits, r = e.length - 1; 0 <= r && 0 === e[r];) r--;
                    if (r < 0) return null;
                    for (var n = Math.floor(r / t), o = 32 * Math.floor(r % t), a = e[r], i = 31; a >>> i == 0;) i--;
                    return o += i, Int32Array.from([o, n])
                }, t.prototype.getWidth = function() {
                    return this.width
                }, t.prototype.getHeight = function() {
                    return this.height
                }, t.prototype.getRowSize = function() {
                    return this.rowSize
                }, t.prototype.equals = function(e) {
                    if (!(e instanceof t)) return !1;
                    var r = e;
                    return this.width === r.width && this.height === r.height && this.rowSize === r.rowSize && a.default.equals(this.bits, r.bits)
                }, t.prototype.hashCode = function() {
                    var t = this.width;
                    return 31 * (t = 31 * (t = 31 * (t = 31 * t + this.width) + this.height) + this.rowSize) + a.default.hashCode(this.bits)
                }, t.prototype.toString = function(t, e, r) {
                    return void 0 === t && (t = "x"), void 0 === e && (e = " "), void 0 === r && (r = "\n"), this.buildToString(t, e, r)
                }, t.prototype.buildToString = function(t, e, r) {
                    var n = new i.default;
                    n.append(r);
                    for (var o = 0, a = this.height; o < a; o++) {
                        for (var u = 0, f = this.width; u < f; u++) n.append(this.get(u, o) ? t : e);
                        n.append(r)
                    }
                    return n.toString()
                }, t.prototype.clone = function() {
                    return new t(this.width, this.height, this.rowSize, this.bits.slice())
                }, t
            }();
        e.default = f
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(3),
            o = r(7),
            a = function() {
                function t(t, e, r, n, a, i) {
                    this.text = t, this.rawBytes = e, this.numBits = r, this.resultPoints = n, this.format = a, this.timestamp = i, this.text = t, this.rawBytes = e, this.numBits = null == r ? null == e ? 0 : 8 * e.length : r, this.resultPoints = n, this.format = a, this.resultMetadata = null, this.timestamp = null == i ? o.default.currentTimeMillis() : i
                }
                return t.prototype.getText = function() {
                    return this.text
                }, t.prototype.getRawBytes = function() {
                    return this.rawBytes
                }, t.prototype.getNumBits = function() {
                    return this.numBits
                }, t.prototype.getResultPoints = function() {
                    return this.resultPoints
                }, t.prototype.getBarcodeFormat = function() {
                    return this.format
                }, t.prototype.getResultMetadata = function() {
                    return this.resultMetadata
                }, t.prototype.putMetadata = function(t, e) {
                    null === this.resultMetadata && (this.resultMetadata = new Map), this.resultMetadata.set(t, e)
                }, t.prototype.putAllMetadata = function(t) {
                    null !== t && (null === this.resultMetadata ? this.resultMetadata = t : this.resultMetadata = new Map(t))
                }, t.prototype.addResultPoints = function(t) {
                    var e = this.resultPoints;
                    if (null === e) this.resultPoints = t;
                    else if (null !== t && 0 < t.length) {
                        var r = new n.default[e.length + t.length];
                        o.default.arraycopy(e, 0, r, 0, e.length), o.default.arraycopy(t, 0, r, e.length, t.length), this.resultPoints = r
                    }
                }, t.prototype.getTimestamp = function() {
                    return this.timestamp
                }, t.prototype.toString = function() {
                    return this.text
                }, t
            }();
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(15),
            o = r(4),
            a = r(14),
            i = r(3),
            u = r(0),
            f = function() {
                function t() {}
                return t.prototype.decode = function(t, e) {
                    try {
                        return this.doDecode(t, e)
                    } catch (h) {
                        if (e && !0 === e.get(o.default.TRY_HARDER) && t.isRotateSupported()) {
                            var r = t.rotateCounterClockwise(),
                                n = this.doDecode(r, e),
                                f = n.getResultMetadata(),
                                s = 270;
                            null !== f && !0 === f.get(a.default.ORIENTATION) && (s += f.get(a.default.ORIENTATION) % 360), n.putMetadata(a.default.ORIENTATION, s);
                            var d = n.getResultPoints();
                            if (null !== d)
                                for (var l = r.getHeight(), c = 0; c < d.length; c++) d[c] = new i.default(l - d[c].getY() - 1, d[c].getX());
                            return n
                        }
                        throw new u.default
                    }
                }, t.prototype.reset = function() {}, t.prototype.doDecode = function(t, e) {
                    var r, f = t.getWidth(),
                        s = t.getHeight(),
                        d = new n.default(f),
                        l = e && !0 === e.get(o.default.TRY_HARDER),
                        c = Math.max(1, s >> (l ? 8 : 5));
                    r = l ? s : 15;
                    for (var h = Math.trunc(s / 2), p = 0; p < r; p++) {
                        var w = Math.trunc((p + 1) / 2),
                            g = h + c * (0 == (1 & p) ? w : -w);
                        if (g < 0 || s <= g) break;
                        try {
                            d = t.getBlackRow(g, d)
                        } catch (t) {
                            continue
                        }
                        for (var _ = function(t) {
                                if (1 === t && (d.reverse(), e && !0 === e.get(o.default.NEED_RESULT_POINT_CALLBACK))) {
                                    var r = new Map;
                                    e.forEach(function(t, e) {
                                        return r.set(e, t)
                                    }), r.delete(o.default.NEED_RESULT_POINT_CALLBACK), e = r
                                }
                                try {
                                    var n = v.decodeRow(g, d, e);
                                    if (1 === t) {
                                        n.putMetadata(a.default.ORIENTATION, 180);
                                        var u = n.getResultPoints();
                                        null !== u && (u[0] = new i.default(f - u[0].getX() - 1, u[0].getY()), u[1] = new i.default(f - u[1].getX() - 1, u[1].getY()))
                                    }
                                    return {
                                        value: n
                                    }
                                } catch (t) {}
                            }, v = this, y = 0; y < 2; y++) {
                            var E = _(y);
                            if ("object" == typeof E) return E.value
                        }
                    }
                    throw new u.default
                }, t.recordPattern = function(t, e, r) {
                    for (var n = r.length, o = 0; o < n; o++) r[o] = 0;
                    var a = t.getSize();
                    if (a <= e) throw new u.default;
                    for (var i = !t.get(e), f = 0, s = e; s < a;) {
                        if (t.get(s) !== i) r[f]++;
                        else {
                            if (++f === n) break;
                            r[f] = 1, i = !i
                        }
                        s++
                    }
                    if (f !== n && (f !== n - 1 || s !== a)) throw new u.default
                }, t.recordPatternInReverse = function(e, r, n) {
                    for (var o = n.length, a = e.get(r); 0 < r && 0 <= o;) e.get(--r) !== a && (o--, a = !a);
                    if (0 <= o) throw new u.default;
                    t.recordPattern(e, r + 1, n)
                }, t.patternMatchVariance = function(t, e, r) {
                    for (var n = t.length, o = 0, a = 0, i = 0; i < n; i++) o += t[i], a += e[i];
                    if (o < a) return Number.POSITIVE_INFINITY;
                    var u = o / a;
                    r *= u;
                    for (var f = 0, s = 0; s < n; s++) {
                        var d = t[s],
                            l = e[s] * u,
                            c = l < d ? d - l : l - d;
                        if (r < c) return Number.POSITIVE_INFINITY;
                        f += c
                    }
                    return f / o
                }, t
            }();
        e.default = f
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                void 0 === t && (t = ""), this.value = t
            }
            return t.prototype.append = function(t) {
                return this.value += "string" == typeof t ? t.toString() : String.fromCharCode(t), this
            }, t.prototype.length = function() {
                return this.value.length
            }, t.prototype.charAt = function(t) {
                return this.value.charAt(t)
            }, t.prototype.deleteCharAt = function(t) {
                this.value = this.value.substr(0, t) + this.value.substring(t + 1)
            }, t.prototype.setCharAt = function(t, e) {
                this.value = this.value.substr(0, t) + e + this.value.substr(t + 1)
            }, t.prototype.toString = function() {
                return this.value
            }, t.prototype.insert = function(t, e) {
                this.value = this.value.substr(0, t) + e + this.value.substr(t + e.length)
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(r(6).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.prototype.MathUtils = function() {}, t.round = function(t) {
                return NaN === t ? 0 : t <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : t >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t + (t < 0 ? -.5 : .5) | 0
            }, t.distance = function(t, e, r, n) {
                var o = t - r,
                    a = e - n;
                return Math.sqrt(o * o + a * a)
            }, t.sum = function(t) {
                for (var e = 0, r = 0, n = t.length; r !== n; r++) e += t[r];
                return e
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        var n, o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (o = n || (n = {}))[o.OTHER = 0] = "OTHER", o[o.ORIENTATION = 1] = "ORIENTATION", o[o.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", o[o.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", o[o.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", o[o.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", o[o.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", o[o.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", o[o.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", o[o.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", o[o.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY", e.default = n
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(7),
            o = r(23),
            a = r(28),
            i = r(1),
            u = function() {
                function t(e, r) {
                    this.bits = void 0 === e ? (this.size = 0, new Int32Array(1)) : (this.size = e, null == r ? t.makeArray(e) : r)
                }
                return t.prototype.getSize = function() {
                    return this.size
                }, t.prototype.getSizeInBytes = function() {
                    return Math.floor((this.size + 7) / 8)
                }, t.prototype.ensureCapacity = function(e) {
                    if (e > 32 * this.bits.length) {
                        var r = t.makeArray(e);
                        n.default.arraycopy(this.bits, 0, r, 0, this.bits.length), this.bits = r
                    }
                }, t.prototype.get = function(t) {
                    return 0 != (this.bits[Math.floor(t / 32)] & 1 << (31 & t))
                }, t.prototype.set = function(t) {
                    this.bits[Math.floor(t / 32)] |= 1 << (31 & t)
                }, t.prototype.flip = function(t) {
                    this.bits[Math.floor(t / 32)] ^= 1 << (31 & t)
                }, t.prototype.getNextSet = function(t) {
                    var e = this.size;
                    if (e <= t) return e;
                    var r = this.bits,
                        n = Math.floor(t / 32),
                        a = r[n];
                    a &= ~((1 << (31 & t)) - 1);
                    for (var i = r.length; 0 === a;) {
                        if (++n === i) return e;
                        a = r[n]
                    }
                    var u = 32 * n + o.default.numberOfTrailingZeros(a);
                    return e < u ? e : u
                }, t.prototype.getNextUnset = function(t) {
                    var e = this.size;
                    if (e <= t) return e;
                    var r = this.bits,
                        n = Math.floor(t / 32),
                        a = ~r[n];
                    a &= ~((1 << (31 & t)) - 1);
                    for (var i = r.length; 0 === a;) {
                        if (++n === i) return e;
                        a = ~r[n]
                    }
                    var u = 32 * n + o.default.numberOfTrailingZeros(a);
                    return e < u ? e : u
                }, t.prototype.setBulk = function(t, e) {
                    this.bits[Math.floor(t / 32)] = e
                }, t.prototype.setRange = function(t, e) {
                    if (e < t || t < 0 || e > this.size) throw new i.default;
                    if (e !== t) {
                        e--;
                        for (var r = Math.floor(t / 32), n = Math.floor(e / 32), o = this.bits, a = r; a <= n; a++) {
                            var u = (2 << (a < n ? 31 : 31 & e)) - (1 << (r < a ? 0 : 31 & t));
                            o[a] |= u
                        }
                    }
                }, t.prototype.clear = function() {
                    for (var t = this.bits.length, e = this.bits, r = 0; r < t; r++) e[r] = 0
                }, t.prototype.isRange = function(t, e, r) {
                    if (e < t || t < 0 || e > this.size) throw new i.default;
                    if (e === t) return !0;
                    e--;
                    for (var n = Math.floor(t / 32), o = Math.floor(e / 32), a = this.bits, u = n; u <= o; u++) {
                        var f = (2 << (u < o ? 31 : 31 & e)) - (1 << (n < u ? 0 : 31 & t)) & 4294967295;
                        if ((a[u] & f) !== (r ? f : 0)) return !1
                    }
                    return !0
                }, t.prototype.appendBit = function(t) {
                    this.ensureCapacity(this.size + 1), t && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++
                }, t.prototype.appendBits = function(t, e) {
                    if (e < 0 || 32 < e) throw new i.default("Num bits must be between 0 and 32");
                    this.ensureCapacity(this.size + e), this.appendBit;
                    for (var r = e; 0 < r; r--) this.appendBit(1 == (t >> r - 1 & 1))
                }, t.prototype.appendBitArray = function(t) {
                    var e = t.size;
                    this.ensureCapacity(this.size + e), this.appendBit;
                    for (var r = 0; r < e; r++) this.appendBit(t.get(r))
                }, t.prototype.xor = function(t) {
                    if (this.size !== t.size) throw new i.default("Sizes don't match");
                    for (var e = this.bits, r = 0, n = e.length; r < n; r++) e[r] ^= t.bits[r]
                }, t.prototype.toBytes = function(t, e, r, n) {
                    for (var o = 0; o < n; o++) {
                        for (var a = 0, i = 0; i < 8; i++) this.get(t) && (a |= 1 << 7 - i), t++;
                        e[r + o] = a
                    }
                }, t.prototype.getBitArray = function() {
                    return this.bits
                }, t.prototype.reverse = function() {
                    for (var t = new Int32Array(this.bits.length), e = Math.floor((this.size - 1) / 32), r = e + 1, n = this.bits, o = 0; o < r; o++) {
                        var a = n[o];
                        a = (a = (a = (a = (a = a >> 1 & 1431655765 | (1431655765 & a) << 1) >> 2 & 858993459 | (858993459 & a) << 2) >> 4 & 252645135 | (252645135 & a) << 4) >> 8 & 16711935 | (16711935 & a) << 8) >> 16 & 65535 | (65535 & a) << 16, t[e - o] = a
                    }
                    if (this.size !== 32 * r) {
                        var i = 32 * r - this.size,
                            u = t[0] >>> i;
                        for (o = 1; o < r; o++) {
                            var f = t[o];
                            u |= f << 32 - i, t[o - 1] = u, u = f >>> i
                        }
                        t[r - 1] = u
                    }
                    this.bits = t
                }, t.makeArray = function(t) {
                    return new Int32Array(Math.floor((t + 31) / 32))
                }, t.prototype.equals = function(e) {
                    if (!(e instanceof t)) return !1;
                    var r = e;
                    return this.size === r.size && a.default.equals(this.bits, r.bits)
                }, t.prototype.hashCode = function() {
                    return 31 * this.size + a.default.hashCode(this.bits)
                }, t.prototype.toString = function() {
                    for (var t = "", e = 0, r = this.size; e < r; e++) 0 == (7 & e) && (t += " "), t += this.get(e) ? "X" : ".";
                    return t
                }, t.prototype.clone = function() {
                    return new t(this.size, this.bits.slice())
                }, t
            }();
        e.default = u
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(24),
            o = r(23),
            a = r(1),
            i = r(51),
            u = function() {
                function t(t, e, r) {
                    this.primitive = t, this.size = e, this.generatorBase = r;
                    for (var o = new Int32Array(e), a = 1, i = 0; i < e; i++) o[i] = a, e <= (a *= 2) && (a ^= t, a &= e - 1);
                    this.expTable = o;
                    var u = new Int32Array(e);
                    for (i = 0; i < e - 1; i++) u[o[i]] = i;
                    this.logTable = u, this.zero = new n.default(this, Int32Array.from([0])), this.one = new n.default(this, Int32Array.from([1]))
                }
                return t.prototype.getZero = function() {
                    return this.zero
                }, t.prototype.getOne = function() {
                    return this.one
                }, t.prototype.buildMonomial = function(t, e) {
                    if (t < 0) throw new a.default;
                    if (0 === e) return this.zero;
                    var r = new Int32Array(t + 1);
                    return r[0] = e, new n.default(this, r)
                }, t.addOrSubtract = function(t, e) {
                    return t ^ e
                }, t.prototype.exp = function(t) {
                    return this.expTable[t]
                }, t.prototype.log = function(t) {
                    if (0 === t) throw new a.default;
                    return this.logTable[t]
                }, t.prototype.inverse = function(t) {
                    if (0 === t) throw new i.default;
                    return this.expTable[this.size - this.logTable[t] - 1]
                }, t.prototype.multiply = function(t, e) {
                    return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.size - 1)]
                }, t.prototype.getSize = function() {
                    return this.size
                }, t.prototype.getGeneratorBase = function() {
                    return this.generatorBase
                }, t.prototype.toString = function() {
                    return "GF(0x" + o.default.toHexString(this.primitive) + "," + this.size + ")"
                }, t.prototype.equals = function(t) {
                    return t === this
                }, t.AZTEC_DATA_12 = new t(4201, 4096, 1), t.AZTEC_DATA_10 = new t(1033, 1024, 1), t.AZTEC_DATA_6 = new t(67, 64, 1), t.AZTEC_PARAM = new t(19, 16, 1), t.QR_CODE_FIELD_256 = new t(285, 256, 0), t.DATA_MATRIX_FIELD_256 = new t(301, 256, 1), t.AZTEC_DATA_8 = t.DATA_MATRIX_FIELD_256, t.MAXICODE_FIELD_64 = t.AZTEC_DATA_6, t
            }();
        e.default = u
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(45),
            o = r(46),
            a = r(47),
            i = r(48),
            u = r(0),
            f = r(29),
            s = r(12),
            d = r(5),
            l = function() {
                function t(t, e, r) {
                    void 0 === e && (e = 500), this.reader = t, this.timeBetweenScansMillis = e, this.hints = r
                }
                return t.prototype.getVideoInputDevices = function() {
                    return new Promise(function(t, e) {
                        navigator.mediaDevices.enumerateDevices().then(function(e) {
                            for (var r = new Array, n = 0, a = 0, i = e.length; a !== i; a++) {
                                var u = e[a];
                                "videoinput" === u.kind && (r.push(new o.VideoInputDevice(u.deviceId, u.label || "Video source " + n)), n++)
                            }
                            t(r)
                        }).catch(function(t) {
                            e(t)
                        })
                    })
                }, t.prototype.decodeFromInputVideoDevice = function(t, e) {
                    var r, n = this;
                    return this.reset(), this.prepareVideoElement(e), r = void 0 === t ? {
                        video: {
                            facingMode: "environment"
                        }
                    } : {
                        video: {
                            deviceId: {
                                exact: t
                            }
                        }
                    }, new Promise(function(t, e) {
                        var o = function() {
                            n.decodeOnceWithDelay(t, e)
                        };
                        navigator.mediaDevices.getUserMedia(r).then(function(t) {
                            return n.startDecodeFromStream(t, o)
                        }).catch(function(t) {
                            return e(t)
                        })
                    })
                }, t.prototype.startDecodeFromStream = function(t, e) {
                    if (this.stream = t, !this.videoElement && this.stream.active) return this.reset();
                    this.bindVideoSrc(this.videoElement, t), this.bindEvents(this.videoElement, e)
                }, t.prototype.bindEvents = function(t, e) {
                    this.videoPlayingEventListener = e, t.addEventListener("playing", this.videoPlayingEventListener), this.videoLoadedMetadataEventListener = function() {
                        return t.play()
                    }, t.addEventListener("loadedmetadata", this.videoLoadedMetadataEventListener)
                }, t.prototype.decodeFromVideoSource = function(t, e) {
                    var r = this;
                    return this.reset(), this.prepareVideoElement(e), new Promise(function(e, n) {
                        r.videoPlayEndedEventListener = function() {
                            r.stopStreams(), n(new u.default)
                        }, r.videoElement.addEventListener("ended", r.videoPlayEndedEventListener), r.videoPlayingEventListener = function() {
                            r.decodeOnceWithDelay(e, n)
                        }, r.videoElement.addEventListener("playing", r.videoPlayingEventListener), r.videoElement.setAttribute("autoplay", "true"), r.videoElement.setAttribute("src", t)
                    })
                }, t.prototype.prepareVideoElement = function(t) {
                    t || "undefined" == typeof document || ((t = document.createElement("video")).width = 200, t.height = 200), "string" == typeof t && (t = this.getMediaElement(t, "video")), t.setAttribute("autoplay", "true"), t.setAttribute("muted", "true"), t.setAttribute("playsinline", "true"), t.setAttribute("autofocus", "true"), this.videoElement = t
                }, t.prototype.getMediaElement = function(t, e) {
                    var r = document.getElementById(t);
                    if (null === r) throw new f.default("element with id '" + t + "' not found");
                    if (r.nodeName.toLowerCase() !== e.toLowerCase()) throw new f.default("element with id '" + t + "' must be an " + e + " element");
                    return r
                }, t.prototype.decodeFromImage = function(t, e) {
                    var r = this;
                    if (this.reset(), void 0 === t && void 0 === e) throw new f.default("either imageElement with a src set or an url must be provided");
                    return this.prepareImageElement(t), new Promise(function(t, n) {
                        if (void 0 !== e) r.imageLoadedEventListener = function() {
                            r.decodeOnce(t, n, !1, !0)
                        }, r.imageElement.addEventListener("load", r.imageLoadedEventListener), r.imageElement.src = e;
                        else {
                            if (!r.isImageLoaded(r.imageElement)) throw new f.default("either src or a loaded img should be provided");
                            r.decodeOnce(t, n, !1, !0)
                        }
                    })
                }, t.prototype.isImageLoaded = function(t) {
                    return !!t.complete && 0 !== t.naturalWidth
                }, t.prototype.prepareImageElement = function(t) {
                    void 0 === t && ((t = document.createElement("img")).width = 200, t.height = 200), "string" == typeof t && (t = this.getMediaElement(t, "img")), this.imageElement = t
                }, t.prototype.decodeOnceWithDelay = function(t, e) {
                    this.timeoutHandler = window.setTimeout(this.decodeOnce.bind(this, t, e), this.timeBetweenScansMillis)
                }, t.prototype.decodeOnce = function(t, e, r, n) {
                    void 0 === r && (r = !0), void 0 === n && (n = !0);
                    try {
                        t(this.decode())
                    } catch (o) {
                        r && o instanceof u.default ? this.decodeOnceWithDelay(t, e) : n && (o instanceof s.default || o instanceof d.default) ? this.decodeOnceWithDelay(t, e) : e(o)
                    }
                }, t.prototype.decode = function() {
                    var t = this.createBinaryBitmap(this.videoElement || this.imageElement);
                    return this.decodeBitmap(t)
                }, t.prototype.createBinaryBitmap = function(t) {
                    void 0 === this.canvasElementContext && this.prepareCaptureCanvas(), this.drawImageOnCanvas(this.canvasElementContext, t);
                    var e = new n.HTMLCanvasElementLuminanceSource(this.canvasElement),
                        r = new i.default(e);
                    return new a.default(r)
                }, t.prototype.drawImageOnCanvas = function(t, e) {
                    t.drawImage(e, 0, 0)
                }, t.prototype.decodeBitmap = function(t) {
                    return this.reader.decode(t, this.hints)
                }, t.prototype.prepareCaptureCanvas = function() {
                    if ("undefined" == typeof document) return this.canvasElement = void 0, void(this.canvasElementContext = void 0);
                    var t, e, r = document.createElement("canvas");
                    void 0 !== this.videoElement && (t = this.videoElement.videoWidth, e = this.videoElement.videoHeight), t || e || void 0 === this.imageElement || (t = this.imageElement.naturalWidth || this.imageElement.width, e = this.imageElement.naturalHeight || this.imageElement.height), r.style.width = t + "px", r.style.height = e + "px", r.width = t, r.height = e, this.canvasElement = r, this.canvasElementContext = r.getContext("2d")
                }, t.prototype.stopStreams = function() {
                    this.stream && (this.stream.getVideoTracks().forEach(function(t) {
                        return t.stop()
                    }), this.stream = void 0)
                }, t.prototype.reset = function() {
                    window.clearTimeout(this.timeoutHandler), this.stopStreams(), void 0 !== this.videoPlayEndedEventListener && void 0 !== this.videoElement && this.videoElement.removeEventListener("ended", this.videoPlayEndedEventListener), void 0 !== this.videoPlayingEventListener && void 0 !== this.videoElement && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), void 0 !== this.videoElement && (this.unbindVideoSrc(this.videoElement), this.videoElement = void 0), void 0 !== this.videoPlayEndedEventListener && void 0 !== this.imageElement && this.imageElement.removeEventListener("load", this.imageLoadedEventListener), void 0 !== this.imageElement && (this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0), this.canvasElementContext = void 0, this.canvasElement = void 0
                }, t.prototype.bindVideoSrc = function(t, e) {
                    try {
                        t.srcObject = e
                    } catch (r) {
                        t.src = window.URL.createObjectURL(e)
                    }
                }, t.prototype.unbindVideoSrc = function(t) {
                    try {
                        t.srcObject = null
                    } catch (e) {
                        t.src = ""
                    }
                }, t
            }();
        e.BrowserCodeReader = l
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e(e) {
                var r = t.call(this, e.getWidth(), e.getHeight()) || this;
                return r.delegate = e, r
            }
            return o(e, t), e.prototype.getRow = function(t, e) {
                for (var r = this.delegate.getRow(t, e), n = this.getWidth(), o = 0; o < n; o++) r[o] = 255 - (255 & r[o]);
                return r
            }, e.prototype.getMatrix = function() {
                for (var t = this.delegate.getMatrix(), e = this.getWidth() * this.getHeight(), r = new Uint8ClampedArray(e), n = 0; n < e; n++) r[n] = 255 - (255 & t[n]);
                return r
            }, e.prototype.isCropSupported = function() {
                return this.delegate.isCropSupported()
            }, e.prototype.crop = function(t, r, n, o) {
                return new e(this.delegate.crop(t, r, n, o))
            }, e.prototype.isRotateSupported = function() {
                return this.delegate.isRotateSupported()
            }, e.prototype.invert = function() {
                return this.delegate
            }, e.prototype.rotateCounterClockwise = function() {
                return new e(this.delegate.rotateCounterClockwise())
            }, e.prototype.rotateCounterClockwise45 = function() {
                return new e(this.delegate.rotateCounterClockwise45())
            }, e
        }(r(19).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(11),
            o = r(27),
            a = function() {
                function t(t, e) {
                    this.width = t, this.height = e
                }
                return t.prototype.getWidth = function() {
                    return this.width
                }, t.prototype.getHeight = function() {
                    return this.height
                }, t.prototype.isCropSupported = function() {
                    return !1
                }, t.prototype.crop = function(t, e, r, n) {
                    throw new o.default("This luminance source does not support cropping.")
                }, t.prototype.isRotateSupported = function() {
                    return !1
                }, t.prototype.rotateCounterClockwise = function() {
                    throw new o.default("This luminance source does not support rotation by 90 degrees.")
                }, t.prototype.rotateCounterClockwise45 = function() {
                    throw new o.default("This luminance source does not support rotation by 45 degrees.")
                }, t.prototype.toString = function() {
                    for (var t = new Uint8ClampedArray(this.width), e = new n.default, r = 0; r < this.height; r++) {
                        for (var o = this.getRow(r, t), a = 0; a < this.width; a++) {
                            var i, u = 255 & o[a];
                            i = u < 64 ? "#" : u < 128 ? "+" : u < 192 ? "." : " ", e.append(i)
                        }
                        e.append("\n")
                    }
                    return e.toString()
                }, t
            }();
        e.default = a
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(r(6).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, o, a = r(5);
        (o = n = e.CharacterSetValueIdentifiers || (e.CharacterSetValueIdentifiers = {}))[o.Cp437 = 0] = "Cp437", o[o.ISO8859_1 = 1] = "ISO8859_1", o[o.ISO8859_2 = 2] = "ISO8859_2", o[o.ISO8859_3 = 3] = "ISO8859_3", o[o.ISO8859_4 = 4] = "ISO8859_4", o[o.ISO8859_5 = 5] = "ISO8859_5", o[o.ISO8859_6 = 6] = "ISO8859_6", o[o.ISO8859_7 = 7] = "ISO8859_7", o[o.ISO8859_8 = 8] = "ISO8859_8", o[o.ISO8859_9 = 9] = "ISO8859_9", o[o.ISO8859_10 = 10] = "ISO8859_10", o[o.ISO8859_11 = 11] = "ISO8859_11", o[o.ISO8859_13 = 12] = "ISO8859_13", o[o.ISO8859_14 = 13] = "ISO8859_14", o[o.ISO8859_15 = 14] = "ISO8859_15", o[o.ISO8859_16 = 15] = "ISO8859_16", o[o.SJIS = 16] = "SJIS", o[o.Cp1250 = 17] = "Cp1250", o[o.Cp1251 = 18] = "Cp1251", o[o.Cp1252 = 19] = "Cp1252", o[o.Cp1256 = 20] = "Cp1256", o[o.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", o[o.UTF8 = 22] = "UTF8", o[o.ASCII = 23] = "ASCII", o[o.Big5 = 24] = "Big5", o[o.GB18030 = 25] = "GB18030", o[o.EUC_KR = 26] = "EUC_KR";
        var i = function() {
            function t(e, r, n) {
                for (var o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a];
                this.valueIdentifier = e, this.name = n, this.values = "number" == typeof r ? Int32Array.from([r]) : r, this.otherEncodingNames = o, t.VALUE_IDENTIFIER_TO_ECI.set(e, this), t.NAME_TO_ECI.set(n, this);
                for (var i = this.values, u = 0, f = i.length; u !== f; u++) {
                    var s = i[u];
                    t.VALUES_TO_ECI.set(s, this)
                }
                for (var d = 0, l = o; d < l.length; d++) {
                    var c = l[d];
                    t.NAME_TO_ECI.set(c, this)
                }
            }
            return t.prototype.getValueIdentifier = function() {
                return this.valueIdentifier
            }, t.prototype.getName = function() {
                return this.name
            }, t.prototype.getValue = function() {
                return this.values[0]
            }, t.getCharacterSetECIByValue = function(e) {
                if (e < 0 || 900 <= e) throw new a.default("incorect value");
                var r = t.VALUES_TO_ECI.get(e);
                if (void 0 === r) throw new a.default("incorect value");
                return r
            }, t.getCharacterSetECIByName = function(e) {
                var r = t.NAME_TO_ECI.get(e);
                if (void 0 === r) throw new a.default("incorect value");
                return r
            }, t.prototype.equals = function(e) {
                if (!(e instanceof t)) return !1;
                var r = e;
                return this.getName() === r.getName()
            }, t.VALUE_IDENTIFIER_TO_ECI = new Map, t.VALUES_TO_ECI = new Map, t.NAME_TO_ECI = new Map, t.Cp437 = new t(n.Cp437, Int32Array.from([0, 2]), "Cp437"), t.ISO8859_1 = new t(n.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), t.ISO8859_2 = new t(n.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), t.ISO8859_3 = new t(n.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), t.ISO8859_4 = new t(n.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), t.ISO8859_5 = new t(n.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), t.ISO8859_6 = new t(n.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), t.ISO8859_7 = new t(n.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), t.ISO8859_8 = new t(n.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), t.ISO8859_9 = new t(n.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), t.ISO8859_10 = new t(n.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), t.ISO8859_11 = new t(n.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), t.ISO8859_13 = new t(n.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), t.ISO8859_14 = new t(n.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), t.ISO8859_15 = new t(n.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), t.ISO8859_16 = new t(n.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), t.SJIS = new t(n.SJIS, 20, "SJIS", "Shift_JIS"), t.Cp1250 = new t(n.Cp1250, 21, "Cp1250", "windows-1250"), t.Cp1251 = new t(n.Cp1251, 22, "Cp1251", "windows-1251"), t.Cp1252 = new t(n.Cp1252, 23, "Cp1252", "windows-1252"), t.Cp1256 = new t(n.Cp1256, 24, "Cp1256", "windows-1256"), t.UnicodeBigUnmarked = new t(n.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), t.UTF8 = new t(n.UTF8, 26, "UTF8", "UTF-8"), t.ASCII = new t(n.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), t.Big5 = new t(n.Big5, 28, "Big5"), t.GB18030 = new t(n.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), t.EUC_KR = new t(n.EUC_KR, 30, "EUC_KR", "EUC-KR"), t
        }();
        e.default = i
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(2),
            i = r(4),
            u = r(9),
            f = r(14),
            s = r(3),
            d = r(10),
            l = r(105),
            c = r(0),
            h = r(5),
            p = r(12),
            w = function(t) {
                function e() {
                    var r = t.call(this) || this;
                    r.decodeRowStringBuffer = "", r.decodeRowStringBuffer = "", e.L_AND_G_PATTERNS = e.L_PATTERNS.map(function(t) {
                        return t.slice()
                    });
                    for (var n = 10; n < 20; n++) {
                        for (var o = e.L_PATTERNS[n - 10], a = new Array(o.length), i = 0; i < o.length; i++) a[i] = o[o.length - i - 1];
                        e.L_AND_G_PATTERNS[n] = a
                    }
                    return r
                }
                return o(e, t), e.findStartGuardPattern = function(t) {
                    for (var r = !1, n = null, o = 0, a = [0, 0, 0]; !r;) {
                        var i = (n = e.findGuardPattern(t, o, !(a = [0, 0, 0]), this.START_END_PATTERN, a))[0],
                            u = i - ((o = n[1]) - i);
                        0 <= u && (r = t.isRange(u, i, !1))
                    }
                    return n
                }, e.prototype.decodeRow = function(t, r, n) {
                    var o = e.findStartGuardPattern(r),
                        d = null == n ? null : n.get(i.default.NEED_RESULT_POINT_CALLBACK);
                    if (null != d) {
                        var w = new s.default((o[0] + o[1]) / 2, t);
                        d.foundPossibleResultPoint(w)
                    }
                    var g = this.decodeMiddle(r, o, this.decodeRowStringBuffer),
                        _ = g.rowOffset,
                        v = g.resultString;
                    if (null != d) {
                        var y = new s.default(_, t);
                        d.foundPossibleResultPoint(y)
                    }
                    var E = e.decodeEnd(r, _);
                    if (null != d) {
                        var A = new s.default((E[0] + E[1]) / 2, t);
                        d.foundPossibleResultPoint(A)
                    }
                    var C = E[1],
                        m = C + (C - E[0]);
                    if (m >= r.getSize() || !r.isRange(C, m, !1)) throw new c.default;
                    var S = v.toString();
                    if (S.length < 8) throw new h.default;
                    if (!e.checkChecksum(S)) throw new p.default;
                    var I = (o[1] + o[0]) / 2,
                        O = (E[1] + E[0]) / 2,
                        T = this.getBarcodeFormat(),
                        M = [new s.default(I, t), new s.default(O, t)],
                        b = new u.default(S, null, 0, M, T, (new Date).getTime()),
                        N = 0;
                    try {
                        var R = l.default.decodeRow(t, r, E[1]);
                        b.putMetadata(f.default.UPC_EAN_EXTENSION, R.getText()), b.putAllMetadata(R.getResultMetadata()), b.addResultPoints(R.getResultPoints()), N = R.getText().length
                    } catch (t) {}
                    var P = null == n ? null : n.get(i.default.ALLOWED_EAN_EXTENSIONS);
                    if (null != P) {
                        var D = !1;
                        for (var B in P)
                            if (N.toString() === B) {
                                D = !0;
                                break
                            }
                        if (!D) throw new c.default
                    }
                    return T === a.default.EAN_13 || a.default.UPC_A, b
                }, e.checkChecksum = function(t) {
                    return e.checkStandardUPCEANChecksum(t)
                }, e.checkStandardUPCEANChecksum = function(t) {
                    var r = t.length;
                    if (0 === r) return !1;
                    var n = parseInt(t.charAt(r - 1), 10);
                    return e.getStandardUPCEANChecksum(t.substring(0, r - 1)) === n
                }, e.getStandardUPCEANChecksum = function(t) {
                    for (var e = t.length, r = 0, n = e - 1; 0 <= n; n -= 2) {
                        if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || 9 < o) throw new h.default;
                        r += o
                    }
                    for (r *= 3, n = e - 2; 0 <= n; n -= 2) {
                        var o;
                        if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || 9 < o) throw new h.default;
                        r += o
                    }
                    return (1e3 - r) % 10
                }, e.decodeEnd = function(t, r) {
                    return e.findGuardPattern(t, r, !1, e.START_END_PATTERN, new Array(e.START_END_PATTERN.length).fill(0))
                }, e.findGuardPattern = function(t, r, n, o, a) {
                    for (var i = t.getSize(), u = 0, f = r = n ? t.getNextUnset(r) : t.getNextSet(r), s = o.length, l = n, h = r; h < i; h++)
                        if (t.get(h) !== l) a[u]++;
                        else {
                            if (u === s - 1) {
                                if (d.default.patternMatchVariance(a, o, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) return [f, h];
                                f += a[0] + a[1];
                                for (var p = a.slice(2, a.length), w = 0; w < u - 1; w++) a[w] = p[w];
                                a[u - 1] = 0, a[u] = 0, u--
                            } else u++;
                            a[u] = 1, l = !l
                        }
                    throw new c.default
                }, e.decodeDigit = function(t, r, n, o) {
                    this.recordPattern(t, n, r);
                    for (var a = this.MAX_AVG_VARIANCE, i = -1, u = o.length, f = 0; f < u; f++) {
                        var s = o[f],
                            l = d.default.patternMatchVariance(r, s, e.MAX_INDIVIDUAL_VARIANCE);
                        l < a && (a = l, i = f)
                    }
                    if (0 <= i) return i;
                    throw new c.default
                }, e.MAX_AVG_VARIANCE = .48, e.MAX_INDIVIDUAL_VARIANCE = .7, e.START_END_PATTERN = [1, 1, 1], e.MIDDLE_PATTERN = [1, 1, 1, 1, 1], e.END_PATTERN = [1, 1, 1, 1, 1, 1], e.L_PATTERNS = [
                    [3, 2, 1, 1],
                    [2, 2, 2, 1],
                    [2, 1, 2, 2],
                    [1, 4, 1, 1],
                    [1, 1, 3, 2],
                    [1, 2, 3, 1],
                    [1, 1, 1, 4],
                    [1, 3, 1, 2],
                    [1, 2, 1, 3],
                    [3, 1, 1, 2]
                ], e
            }(d.default);
        e.default = w
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.numberOfTrailingZeros = function(t) {
                var e;
                if (0 === t) return 32;
                var r = 31;
                return 0 != (e = t << 16) && (r -= 16, t = e), 0 != (e = t << 8) && (r -= 8, t = e), 0 != (e = t << 4) && (r -= 4, t = e), 0 != (e = t << 2) && (r -= 2, t = e), r - (t << 1 >>> 31)
            }, t.numberOfLeadingZeros = function(t) {
                if (0 === t) return 32;
                var e = 1;
                return t >>> 16 == 0 && (e += 16, t <<= 16), t >>> 24 == 0 && (e += 8, t <<= 8), t >>> 28 == 0 && (e += 4, t <<= 4), t >>> 30 == 0 && (e += 2, t <<= 2), e - (t >>> 31)
            }, t.toHexString = function(t) {
                return t.toString(16)
            }, t.bitCount = function(t) {
                return t = (t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135, 63 & (t += t >>> 8) + (t >>> 16)
            }, t.MIN_VALUE_32_BITS = -2147483648, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(16),
            o = r(7),
            a = r(1),
            i = function() {
                function t(t, e) {
                    if (0 === e.length) throw new a.default;
                    this.field = t;
                    var r = e.length;
                    if (1 < r && 0 === e[0]) {
                        for (var n = 1; n < r && 0 === e[n];) n++;
                        n === r ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(r - n), o.default.arraycopy(e, n, this.coefficients, 0, this.coefficients.length))
                    } else this.coefficients = e
                }
                return t.prototype.getCoefficients = function() {
                    return this.coefficients
                }, t.prototype.getDegree = function() {
                    return this.coefficients.length - 1
                }, t.prototype.isZero = function() {
                    return 0 === this.coefficients[0]
                }, t.prototype.getCoefficient = function(t) {
                    return this.coefficients[this.coefficients.length - 1 - t]
                }, t.prototype.evaluateAt = function(t) {
                    if (0 === t) return this.getCoefficient(0);
                    var e, r = this.coefficients;
                    if (1 === t) {
                        for (var o = e = 0, a = r.length; o !== a; o++) {
                            var i = r[o];
                            e = n.default.addOrSubtract(e, i)
                        }
                        return e
                    }
                    e = r[0];
                    var u = r.length,
                        f = this.field;
                    for (o = 1; o < u; o++) e = n.default.addOrSubtract(f.multiply(t, e), r[o]);
                    return e
                }, t.prototype.addOrSubtract = function(e) {
                    if (!this.field.equals(e.field)) throw new a.default("GenericGFPolys do not have same GenericGF field");
                    if (this.isZero()) return e;
                    if (e.isZero()) return this;
                    var r = this.coefficients,
                        i = e.coefficients;
                    if (r.length > i.length) {
                        var u = r;
                        r = i, i = u
                    }
                    var f = new Int32Array(i.length),
                        s = i.length - r.length;
                    o.default.arraycopy(i, 0, f, 0, s);
                    for (var d = s; d < i.length; d++) f[d] = n.default.addOrSubtract(r[d - s], i[d]);
                    return new t(this.field, f)
                }, t.prototype.multiply = function(e) {
                    if (!this.field.equals(e.field)) throw new a.default("GenericGFPolys do not have same GenericGF field");
                    if (this.isZero() || e.isZero()) return this.field.getZero();
                    for (var r = this.coefficients, o = r.length, i = e.coefficients, u = i.length, f = new Int32Array(o + u - 1), s = this.field, d = 0; d < o; d++)
                        for (var l = r[d], c = 0; c < u; c++) f[d + c] = n.default.addOrSubtract(f[d + c], s.multiply(l, i[c]));
                    return new t(s, f)
                }, t.prototype.multiplyScalar = function(e) {
                    if (0 === e) return this.field.getZero();
                    if (1 === e) return this;
                    for (var r = this.coefficients.length, n = this.field, o = new Int32Array(r), a = this.coefficients, i = 0; i < r; i++) o[i] = n.multiply(a[i], e);
                    return new t(n, o)
                }, t.prototype.multiplyByMonomial = function(e, r) {
                    if (e < 0) throw new a.default;
                    if (0 === r) return this.field.getZero();
                    for (var n = this.coefficients, o = n.length, i = new Int32Array(o + e), u = this.field, f = 0; f < o; f++) i[f] = u.multiply(n[f], r);
                    return new t(u, i)
                }, t.prototype.divide = function(t) {
                    if (!this.field.equals(t.field)) throw new a.default("GenericGFPolys do not have same GenericGF field");
                    if (t.isZero()) throw new a.default("Divide by 0");
                    for (var e = this.field, r = e.getZero(), n = this, o = t.getCoefficient(t.getDegree()), i = e.inverse(o); n.getDegree() >= t.getDegree() && !n.isZero();) {
                        var u = n.getDegree() - t.getDegree(),
                            f = e.multiply(n.getCoefficient(n.getDegree()), i),
                            s = t.multiplyByMonomial(u, f),
                            d = e.buildMonomial(u, f);
                        r = r.addOrSubtract(d), n = n.addOrSubtract(s)
                    }
                    return [r, n]
                }, t.prototype.toString = function() {
                    for (var t = "", e = this.getDegree(); 0 <= e; e--) {
                        var r = this.getCoefficient(e);
                        if (0 !== r) {
                            if (r < 0 ? (t += " - ", r = -r) : 0 < t.length && (t += " + "), 0 === e || 1 !== r) {
                                var n = this.field.log(r);
                                0 === n ? t += "1" : 1 === n ? t += "a" : (t += "a^", t += n)
                            }
                            0 !== e && (1 === e ? t += "x" : (t += "x^", t += e))
                        }
                    }
                    return t
                }, t
            }();
        e.default = i
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, o, a = r(29),
            i = r(1);
        (o = n = e.ErrorCorrectionLevelValues || (e.ErrorCorrectionLevelValues = {}))[o.L = 0] = "L", o[o.M = 1] = "M", o[o.Q = 2] = "Q", o[o.H = 3] = "H";
        var u = function() {
            function t(e, r, n) {
                this.value = e, this.stringValue = r, this.bits = n, t.FOR_BITS.set(n, this), t.FOR_VALUE.set(e, this)
            }
            return t.prototype.getValue = function() {
                return this.value
            }, t.prototype.getBits = function() {
                return this.bits
            }, t.fromString = function(e) {
                switch (e) {
                    case "L":
                        return t.L;
                    case "M":
                        return t.M;
                    case "Q":
                        return t.Q;
                    case "H":
                        return t.H;
                    default:
                        throw new a.default(e + "not available")
                }
            }, t.prototype.toString = function() {
                return this.stringValue
            }, t.prototype.equals = function(e) {
                if (!(e instanceof t)) return !1;
                var r = e;
                return this.value === r.value
            }, t.forBits = function(e) {
                if (e < 0 || e >= t.FOR_BITS.size) throw new i.default;
                return t.FOR_BITS.get(e)
            }, t.FOR_BITS = new Map, t.FOR_VALUE = new Map, t.L = new t(n.L, "L", 1), t.M = new t(n.M, "M", 0), t.Q = new t(n.Q, "Q", 3), t.H = new t(n.H, "H", 2), t
        }();
        e.default = u
    }, function(t, e, r) {
        "use strict";
        var n, o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (o = n || (n = {}))[o.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", o[o.CHARACTER_SET = 1] = "CHARACTER_SET", o[o.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", o[o.MIN_SIZE = 3] = "MIN_SIZE", o[o.MAX_SIZE = 4] = "MAX_SIZE", o[o.MARGIN = 5] = "MARGIN", o[o.PDF417_COMPACT = 6] = "PDF417_COMPACT", o[o.PDF417_COMPACTION = 7] = "PDF417_COMPACTION", o[o.PDF417_DIMENSIONS = 8] = "PDF417_DIMENSIONS", o[o.AZTEC_LAYERS = 9] = "AZTEC_LAYERS", o[o.QR_VERSION = 10] = "QR_VERSION", e.default = n
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(r(6).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(7),
            o = function() {
                function t() {}
                return t.equals = function(t, e) {
                    if (!t) return !1;
                    if (!e) return !1;
                    if (!t.length) return !1;
                    if (!e.length) return !1;
                    if (t.length !== e.length) return !1;
                    for (var r = 0, n = t.length; r < n; r++)
                        if (t[r] !== e[r]) return !1;
                    return !0
                }, t.hashCode = function(t) {
                    if (null === t) return 0;
                    for (var e = 1, r = 0, n = t; r < n.length; r++) e = 31 * e + n[r];
                    return e
                }, t.fillUint8Array = function(t, e) {
                    for (var r = 0; r !== t.length; r++) t[r] = e
                }, t.copyOf = function(t, e) {
                    var r = new Int32Array(e);
                    return n.default.arraycopy(t, 0, r, 0, Math.min(t.length, e)), r
                }, t.binarySearch = function(e, r, n) {
                    void 0 === n && (n = t.numberComparator);
                    for (var o = 0, a = e.length - 1; o <= a;) {
                        var i = a + o >> 1,
                            u = n(r, e[i]);
                        if (0 < u) o = i + 1;
                        else {
                            if (!(u < 0)) return i;
                            a = i - 1
                        }
                    }
                    return -o - 1
                }, t.numberComparator = function(t, e) {
                    return t - e
                }, t
            }();
        e.default = o
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(r(6).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(2),
            o = r(4),
            a = r(9),
            i = r(14),
            u = r(8),
            f = r(75),
            s = r(54),
            d = r(82),
            l = r(0),
            c = function() {
                function t() {
                    this.decoder = new f.default
                }
                return t.prototype.getDecoder = function() {
                    return this.decoder
                }, t.prototype.decode = function(e, r) {
                    var u, f;
                    if (null != r && void 0 !== r.get(o.default.PURE_BARCODE)) {
                        var l = t.extractPureBits(e.getBlackMatrix());
                        u = this.decoder.decodeBitMatrix(l, r), f = t.NO_POINTS
                    } else {
                        var c = new d.default(e.getBlackMatrix()).detect(r);
                        u = this.decoder.decodeBitMatrix(c.getBits(), r), f = c.getPoints()
                    }
                    u.getOther() instanceof s.default && u.getOther().applyMirroredCorrection(f);
                    var h = new a.default(u.getText(), u.getRawBytes(), void 0, f, n.default.QR_CODE, void 0),
                        p = u.getByteSegments();
                    null !== p && h.putMetadata(i.default.BYTE_SEGMENTS, p);
                    var w = u.getECLevel();
                    return null !== w && h.putMetadata(i.default.ERROR_CORRECTION_LEVEL, w), u.hasStructuredAppend() && (h.putMetadata(i.default.STRUCTURED_APPEND_SEQUENCE, u.getStructuredAppendSequenceNumber()), h.putMetadata(i.default.STRUCTURED_APPEND_PARITY, u.getStructuredAppendParity())), h
                }, t.prototype.reset = function() {}, t.extractPureBits = function(t) {
                    var e = t.getTopLeftOnBit(),
                        r = t.getBottomRightOnBit();
                    if (null === e || null === r) throw new l.default;
                    var n = this.moduleSize(e, t),
                        o = e[1],
                        a = r[1],
                        i = e[0],
                        f = r[0];
                    if (f <= i || a <= o) throw new l.default;
                    if (a - o != f - i && (f = i + (a - o)) >= t.getWidth()) throw new l.default;
                    var s = Math.round((f - i + 1) / n),
                        d = Math.round((a - o + 1) / n);
                    if (s <= 0 || d <= 0) throw new l.default;
                    if (d !== s) throw new l.default;
                    var c = Math.floor(n / 2);
                    o += c;
                    var h = (i += c) + Math.floor((s - 1) * n) - f;
                    if (0 < h) {
                        if (c < h) throw new l.default;
                        i -= h
                    }
                    var p = o + Math.floor((d - 1) * n) - a;
                    if (0 < p) {
                        if (c < p) throw new l.default;
                        o -= p
                    }
                    for (var w = new u.default(s, d), g = 0; g < d; g++)
                        for (var _ = o + Math.floor(g * n), v = 0; v < s; v++) t.get(i + Math.floor(v * n), _) && w.set(v, g);
                    return w
                }, t.moduleSize = function(t, e) {
                    for (var r = e.getHeight(), n = e.getWidth(), o = t[0], a = t[1], i = !0, u = 0; o < n && a < r;) {
                        if (i !== e.get(o, a)) {
                            if (5 == ++u) break;
                            i = !i
                        }
                        o++, a++
                    }
                    if (o === n || a === r) throw new l.default;
                    return (o - t[0]) / 7
                }, t.NO_POINTS = new Array, t
            }();
        e.default = c
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(16),
            o = r(24),
            a = r(52),
            i = r(20),
            u = function() {
                function t(t) {
                    this.field = t
                }
                return t.prototype.decode = function(t, e) {
                    for (var r = this.field, i = new o.default(r, t), u = new Int32Array(e), f = !0, s = 0; s < e; s++) {
                        var d = i.evaluateAt(r.exp(s + r.getGeneratorBase()));
                        0 !== (u[u.length - 1 - s] = d) && (f = !1)
                    }
                    if (!f) {
                        var l = new o.default(r, u),
                            c = this.runEuclideanAlgorithm(r.buildMonomial(e, 1), l, e),
                            h = c[0],
                            p = c[1],
                            w = this.findErrorLocations(h),
                            g = this.findErrorMagnitudes(p, w);
                        for (s = 0; s < w.length; s++) {
                            var _ = t.length - 1 - r.log(w[s]);
                            if (_ < 0) throw new a.default("Bad error location");
                            t[_] = n.default.addOrSubtract(t[_], g[s])
                        }
                    }
                }, t.prototype.runEuclideanAlgorithm = function(t, e, r) {
                    if (t.getDegree() < e.getDegree()) {
                        var n = t;
                        t = e, e = n
                    }
                    for (var o = this.field, u = t, f = e, s = o.getZero(), d = o.getOne(); f.getDegree() >= (r / 2 | 0);) {
                        var l = u,
                            c = s;
                        if (s = d, (u = f).isZero()) throw new a.default("r_{i-1} was zero");
                        f = l;
                        for (var h = o.getZero(), p = u.getCoefficient(u.getDegree()), w = o.inverse(p); f.getDegree() >= u.getDegree() && !f.isZero();) {
                            var g = f.getDegree() - u.getDegree(),
                                _ = o.multiply(f.getCoefficient(f.getDegree()), w);
                            h = h.addOrSubtract(o.buildMonomial(g, _)), f = f.addOrSubtract(u.multiplyByMonomial(g, _))
                        }
                        if (d = h.multiply(s).addOrSubtract(c), f.getDegree() >= u.getDegree()) throw new i.default("Division algorithm failed to reduce polynomial?")
                    }
                    var v = d.getCoefficient(0);
                    if (0 === v) throw new a.default("sigmaTilde(0) was zero");
                    var y = o.inverse(v);
                    return [d.multiplyScalar(y), f.multiplyScalar(y)]
                }, t.prototype.findErrorLocations = function(t) {
                    var e = t.getDegree();
                    if (1 === e) return Int32Array.from([t.getCoefficient(1)]);
                    for (var r = new Int32Array(e), n = 0, o = this.field, i = 1; i < o.getSize() && n < e; i++) 0 === t.evaluateAt(i) && (r[n] = o.inverse(i), n++);
                    if (n !== e) throw new a.default("Error locator degree does not match number of roots");
                    return r
                }, t.prototype.findErrorMagnitudes = function(t, e) {
                    for (var r = e.length, n = new Int32Array(r), o = this.field, a = 0; a < r; a++) {
                        for (var i = o.inverse(e[a]), u = 1, f = 0; f < r; f++)
                            if (a !== f) {
                                var s = o.multiply(e[f], i),
                                    d = 0 == (1 & s) ? 1 | s : -2 & s;
                                u = o.multiply(u, d)
                            }
                        n[a] = o.multiply(t.evaluateAt(i), o.inverse(u)), 0 !== o.getGeneratorBase() && (n[a] = o.multiply(n[a], i))
                    }
                    return n
                }, t
            }();
        e.default = u
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(8),
            o = r(53),
            a = r(77),
            i = r(78),
            u = r(5),
            f = r(1),
            s = function() {
                function t(t, e) {
                    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                    this.versionNumber = t, this.alignmentPatternCenters = e;
                    for (var o = 0, a = (this.ecBlocks = r)[0].getECCodewordsPerBlock(), i = 0, u = r[0].getECBlocks(); i < u.length; i++) {
                        var f = u[i];
                        o += f.getCount() * (f.getDataCodewords() + a)
                    }
                    this.totalCodewords = o
                }
                return t.prototype.getVersionNumber = function() {
                    return this.versionNumber
                }, t.prototype.getAlignmentPatternCenters = function() {
                    return this.alignmentPatternCenters
                }, t.prototype.getTotalCodewords = function() {
                    return this.totalCodewords
                }, t.prototype.getDimensionForVersion = function() {
                    return 17 + 4 * this.versionNumber
                }, t.prototype.getECBlocksForLevel = function(t) {
                    return this.ecBlocks[t.getValue()]
                }, t.getProvisionalVersionForDimension = function(t) {
                    if (t % 4 != 1) throw new u.default;
                    try {
                        return this.getVersionForNumber((t - 17) / 4)
                    } catch (t) {
                        throw new u.default
                    }
                }, t.getVersionForNumber = function(e) {
                    if (e < 1 || 40 < e) throw new f.default;
                    return t.VERSIONS[e - 1]
                }, t.decodeVersionInformation = function(e) {
                    for (var r = Number.MAX_SAFE_INTEGER, n = 0, a = 0; a < t.VERSION_DECODE_INFO.length; a++) {
                        var i = t.VERSION_DECODE_INFO[a];
                        if (i === e) return t.getVersionForNumber(a + 7);
                        var u = o.default.numBitsDiffering(e, i);
                        u < r && (n = a + 7, r = u)
                    }
                    return r <= 3 ? t.getVersionForNumber(n) : null
                }, t.prototype.buildFunctionPattern = function() {
                    var t = this.getDimensionForVersion(),
                        e = new n.default(t);
                    e.setRegion(0, 0, 9, 9), e.setRegion(t - 8, 0, 8, 9), e.setRegion(0, t - 8, 9, 8);
                    for (var r = this.alignmentPatternCenters.length, o = 0; o < r; o++)
                        for (var a = this.alignmentPatternCenters[o] - 2, i = 0; i < r; i++) 0 === o && (0 === i || i === r - 1) || o === r - 1 && 0 === i || e.setRegion(this.alignmentPatternCenters[i] - 2, a, 5, 5);
                    return e.setRegion(6, 9, 1, t - 17), e.setRegion(9, 6, t - 17, 1), 6 < this.versionNumber && (e.setRegion(t - 11, 0, 3, 6), e.setRegion(0, t - 11, 6, 3)), e
                }, t.prototype.toString = function() {
                    return "" + this.versionNumber
                }, t.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]), t.VERSIONS = [new t(1, new Int32Array(0), new a.default(7, new i.default(1, 19)), new a.default(10, new i.default(1, 16)), new a.default(13, new i.default(1, 13)), new a.default(17, new i.default(1, 9))), new t(2, Int32Array.from([6, 18]), new a.default(10, new i.default(1, 34)), new a.default(16, new i.default(1, 28)), new a.default(22, new i.default(1, 22)), new a.default(28, new i.default(1, 16))), new t(3, Int32Array.from([6, 22]), new a.default(15, new i.default(1, 55)), new a.default(26, new i.default(1, 44)), new a.default(18, new i.default(2, 17)), new a.default(22, new i.default(2, 13))), new t(4, Int32Array.from([6, 26]), new a.default(20, new i.default(1, 80)), new a.default(18, new i.default(2, 32)), new a.default(26, new i.default(2, 24)), new a.default(16, new i.default(4, 9))), new t(5, Int32Array.from([6, 30]), new a.default(26, new i.default(1, 108)), new a.default(24, new i.default(2, 43)), new a.default(18, new i.default(2, 15), new i.default(2, 16)), new a.default(22, new i.default(2, 11), new i.default(2, 12))), new t(6, Int32Array.from([6, 34]), new a.default(18, new i.default(2, 68)), new a.default(16, new i.default(4, 27)), new a.default(24, new i.default(4, 19)), new a.default(28, new i.default(4, 15))), new t(7, Int32Array.from([6, 22, 38]), new a.default(20, new i.default(2, 78)), new a.default(18, new i.default(4, 31)), new a.default(18, new i.default(2, 14), new i.default(4, 15)), new a.default(26, new i.default(4, 13), new i.default(1, 14))), new t(8, Int32Array.from([6, 24, 42]), new a.default(24, new i.default(2, 97)), new a.default(22, new i.default(2, 38), new i.default(2, 39)), new a.default(22, new i.default(4, 18), new i.default(2, 19)), new a.default(26, new i.default(4, 14), new i.default(2, 15))), new t(9, Int32Array.from([6, 26, 46]), new a.default(30, new i.default(2, 116)), new a.default(22, new i.default(3, 36), new i.default(2, 37)), new a.default(20, new i.default(4, 16), new i.default(4, 17)), new a.default(24, new i.default(4, 12), new i.default(4, 13))), new t(10, Int32Array.from([6, 28, 50]), new a.default(18, new i.default(2, 68), new i.default(2, 69)), new a.default(26, new i.default(4, 43), new i.default(1, 44)), new a.default(24, new i.default(6, 19), new i.default(2, 20)), new a.default(28, new i.default(6, 15), new i.default(2, 16))), new t(11, Int32Array.from([6, 30, 54]), new a.default(20, new i.default(4, 81)), new a.default(30, new i.default(1, 50), new i.default(4, 51)), new a.default(28, new i.default(4, 22), new i.default(4, 23)), new a.default(24, new i.default(3, 12), new i.default(8, 13))), new t(12, Int32Array.from([6, 32, 58]), new a.default(24, new i.default(2, 92), new i.default(2, 93)), new a.default(22, new i.default(6, 36), new i.default(2, 37)), new a.default(26, new i.default(4, 20), new i.default(6, 21)), new a.default(28, new i.default(7, 14), new i.default(4, 15))), new t(13, Int32Array.from([6, 34, 62]), new a.default(26, new i.default(4, 107)), new a.default(22, new i.default(8, 37), new i.default(1, 38)), new a.default(24, new i.default(8, 20), new i.default(4, 21)), new a.default(22, new i.default(12, 11), new i.default(4, 12))), new t(14, Int32Array.from([6, 26, 46, 66]), new a.default(30, new i.default(3, 115), new i.default(1, 116)), new a.default(24, new i.default(4, 40), new i.default(5, 41)), new a.default(20, new i.default(11, 16), new i.default(5, 17)), new a.default(24, new i.default(11, 12), new i.default(5, 13))), new t(15, Int32Array.from([6, 26, 48, 70]), new a.default(22, new i.default(5, 87), new i.default(1, 88)), new a.default(24, new i.default(5, 41), new i.default(5, 42)), new a.default(30, new i.default(5, 24), new i.default(7, 25)), new a.default(24, new i.default(11, 12), new i.default(7, 13))), new t(16, Int32Array.from([6, 26, 50, 74]), new a.default(24, new i.default(5, 98), new i.default(1, 99)), new a.default(28, new i.default(7, 45), new i.default(3, 46)), new a.default(24, new i.default(15, 19), new i.default(2, 20)), new a.default(30, new i.default(3, 15), new i.default(13, 16))), new t(17, Int32Array.from([6, 30, 54, 78]), new a.default(28, new i.default(1, 107), new i.default(5, 108)), new a.default(28, new i.default(10, 46), new i.default(1, 47)), new a.default(28, new i.default(1, 22), new i.default(15, 23)), new a.default(28, new i.default(2, 14), new i.default(17, 15))), new t(18, Int32Array.from([6, 30, 56, 82]), new a.default(30, new i.default(5, 120), new i.default(1, 121)), new a.default(26, new i.default(9, 43), new i.default(4, 44)), new a.default(28, new i.default(17, 22), new i.default(1, 23)), new a.default(28, new i.default(2, 14), new i.default(19, 15))), new t(19, Int32Array.from([6, 30, 58, 86]), new a.default(28, new i.default(3, 113), new i.default(4, 114)), new a.default(26, new i.default(3, 44), new i.default(11, 45)), new a.default(26, new i.default(17, 21), new i.default(4, 22)), new a.default(26, new i.default(9, 13), new i.default(16, 14))), new t(20, Int32Array.from([6, 34, 62, 90]), new a.default(28, new i.default(3, 107), new i.default(5, 108)), new a.default(26, new i.default(3, 41), new i.default(13, 42)), new a.default(30, new i.default(15, 24), new i.default(5, 25)), new a.default(28, new i.default(15, 15), new i.default(10, 16))), new t(21, Int32Array.from([6, 28, 50, 72, 94]), new a.default(28, new i.default(4, 116), new i.default(4, 117)), new a.default(26, new i.default(17, 42)), new a.default(28, new i.default(17, 22), new i.default(6, 23)), new a.default(30, new i.default(19, 16), new i.default(6, 17))), new t(22, Int32Array.from([6, 26, 50, 74, 98]), new a.default(28, new i.default(2, 111), new i.default(7, 112)), new a.default(28, new i.default(17, 46)), new a.default(30, new i.default(7, 24), new i.default(16, 25)), new a.default(24, new i.default(34, 13))), new t(23, Int32Array.from([6, 30, 54, 78, 102]), new a.default(30, new i.default(4, 121), new i.default(5, 122)), new a.default(28, new i.default(4, 47), new i.default(14, 48)), new a.default(30, new i.default(11, 24), new i.default(14, 25)), new a.default(30, new i.default(16, 15), new i.default(14, 16))), new t(24, Int32Array.from([6, 28, 54, 80, 106]), new a.default(30, new i.default(6, 117), new i.default(4, 118)), new a.default(28, new i.default(6, 45), new i.default(14, 46)), new a.default(30, new i.default(11, 24), new i.default(16, 25)), new a.default(30, new i.default(30, 16), new i.default(2, 17))), new t(25, Int32Array.from([6, 32, 58, 84, 110]), new a.default(26, new i.default(8, 106), new i.default(4, 107)), new a.default(28, new i.default(8, 47), new i.default(13, 48)), new a.default(30, new i.default(7, 24), new i.default(22, 25)), new a.default(30, new i.default(22, 15), new i.default(13, 16))), new t(26, Int32Array.from([6, 30, 58, 86, 114]), new a.default(28, new i.default(10, 114), new i.default(2, 115)), new a.default(28, new i.default(19, 46), new i.default(4, 47)), new a.default(28, new i.default(28, 22), new i.default(6, 23)), new a.default(30, new i.default(33, 16), new i.default(4, 17))), new t(27, Int32Array.from([6, 34, 62, 90, 118]), new a.default(30, new i.default(8, 122), new i.default(4, 123)), new a.default(28, new i.default(22, 45), new i.default(3, 46)), new a.default(30, new i.default(8, 23), new i.default(26, 24)), new a.default(30, new i.default(12, 15), new i.default(28, 16))), new t(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new a.default(30, new i.default(3, 117), new i.default(10, 118)), new a.default(28, new i.default(3, 45), new i.default(23, 46)), new a.default(30, new i.default(4, 24), new i.default(31, 25)), new a.default(30, new i.default(11, 15), new i.default(31, 16))), new t(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new a.default(30, new i.default(7, 116), new i.default(7, 117)), new a.default(28, new i.default(21, 45), new i.default(7, 46)), new a.default(30, new i.default(1, 23), new i.default(37, 24)), new a.default(30, new i.default(19, 15), new i.default(26, 16))), new t(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new a.default(30, new i.default(5, 115), new i.default(10, 116)), new a.default(28, new i.default(19, 47), new i.default(10, 48)), new a.default(30, new i.default(15, 24), new i.default(25, 25)), new a.default(30, new i.default(23, 15), new i.default(25, 16))), new t(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new a.default(30, new i.default(13, 115), new i.default(3, 116)), new a.default(28, new i.default(2, 46), new i.default(29, 47)), new a.default(30, new i.default(42, 24), new i.default(1, 25)), new a.default(30, new i.default(23, 15), new i.default(28, 16))), new t(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new a.default(30, new i.default(17, 115)), new a.default(28, new i.default(10, 46), new i.default(23, 47)), new a.default(30, new i.default(10, 24), new i.default(35, 25)), new a.default(30, new i.default(19, 15), new i.default(35, 16))), new t(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new a.default(30, new i.default(17, 115), new i.default(1, 116)), new a.default(28, new i.default(14, 46), new i.default(21, 47)), new a.default(30, new i.default(29, 24), new i.default(19, 25)), new a.default(30, new i.default(11, 15), new i.default(46, 16))), new t(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new a.default(30, new i.default(13, 115), new i.default(6, 116)), new a.default(28, new i.default(14, 46), new i.default(23, 47)), new a.default(30, new i.default(44, 24), new i.default(7, 25)), new a.default(30, new i.default(59, 16), new i.default(1, 17))), new t(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new a.default(30, new i.default(12, 121), new i.default(7, 122)), new a.default(28, new i.default(12, 47), new i.default(26, 48)), new a.default(30, new i.default(39, 24), new i.default(14, 25)), new a.default(30, new i.default(22, 15), new i.default(41, 16))), new t(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new a.default(30, new i.default(6, 121), new i.default(14, 122)), new a.default(28, new i.default(6, 47), new i.default(34, 48)), new a.default(30, new i.default(46, 24), new i.default(10, 25)), new a.default(30, new i.default(2, 15), new i.default(64, 16))), new t(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new a.default(30, new i.default(17, 122), new i.default(4, 123)), new a.default(28, new i.default(29, 46), new i.default(14, 47)), new a.default(30, new i.default(49, 24), new i.default(10, 25)), new a.default(30, new i.default(24, 15), new i.default(46, 16))), new t(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new a.default(30, new i.default(4, 122), new i.default(18, 123)), new a.default(28, new i.default(13, 46), new i.default(32, 47)), new a.default(30, new i.default(48, 24), new i.default(14, 25)), new a.default(30, new i.default(42, 15), new i.default(32, 16))), new t(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new a.default(30, new i.default(20, 117), new i.default(4, 118)), new a.default(28, new i.default(40, 47), new i.default(7, 48)), new a.default(30, new i.default(43, 24), new i.default(22, 25)), new a.default(30, new i.default(10, 15), new i.default(67, 16))), new t(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new a.default(30, new i.default(19, 118), new i.default(6, 119)), new a.default(28, new i.default(18, 47), new i.default(31, 48)), new a.default(30, new i.default(34, 24), new i.default(34, 25)), new a.default(30, new i.default(20, 15), new i.default(61, 16)))], t
            }();
        e.default = s
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            o = function() {
                function t(t) {
                    this.bytes = t, this.byteOffset = 0, this.bitOffset = 0
                }
                return t.prototype.getBitOffset = function() {
                    return this.bitOffset
                }, t.prototype.getByteOffset = function() {
                    return this.byteOffset
                }, t.prototype.readBits = function(t) {
                    if (t < 1 || 32 < t || t > this.available()) throw new n.default("" + t);
                    var e = 0,
                        r = this.bitOffset,
                        o = this.byteOffset,
                        a = this.bytes;
                    if (0 < r) {
                        var i = 8 - r,
                            u = t < i ? t : i,
                            f = 255 >> 8 - u << (s = i - u);
                        e = (a[o] & f) >> s, t -= u, 8 === (r += u) && (r = 0, o++)
                    }
                    if (0 < t) {
                        for (; 8 <= t;) e = e << 8 | 255 & a[o], o++, t -= 8;
                        var s;
                        if (0 < t) f = 255 >> (s = 8 - t) << s, e = e << t | (a[o] & f) >> s, r += t
                    }
                    return this.bitOffset = r, this.byteOffset = o, e
                }, t.prototype.available = function() {
                    return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset
                }, t
            }();
        e.default = o
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e, r, n, o, a) {
                void 0 === o && (o = -1), void 0 === a && (a = -1), this.rawBytes = t, this.text = e, this.byteSegments = r, this.ecLevel = n, this.structuredAppendSequenceNumber = o, this.structuredAppendParity = a, this.numBits = null == t ? 0 : 8 * t.length
            }
            return t.prototype.getRawBytes = function() {
                return this.rawBytes
            }, t.prototype.getNumBits = function() {
                return this.numBits
            }, t.prototype.setNumBits = function(t) {
                this.numBits = t
            }, t.prototype.getText = function() {
                return this.text
            }, t.prototype.getByteSegments = function() {
                return this.byteSegments
            }, t.prototype.getECLevel = function() {
                return this.ecLevel
            }, t.prototype.getErrorsCorrected = function() {
                return this.errorsCorrected
            }, t.prototype.setErrorsCorrected = function(t) {
                this.errorsCorrected = t
            }, t.prototype.getErasures = function() {
                return this.erasures
            }, t.prototype.setErasures = function(t) {
                this.erasures = t
            }, t.prototype.getOther = function() {
                return this.other
            }, t.prototype.setOther = function(t) {
                this.other = t
            }, t.prototype.hasStructuredAppend = function() {
                return 0 <= this.structuredAppendParity && 0 <= this.structuredAppendSequenceNumber
            }, t.prototype.getStructuredAppendParity = function() {
                return this.structuredAppendParity
            }, t.prototype.getStructuredAppendSequenceNumber = function() {
                return this.structuredAppendSequenceNumber
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(27),
            o = r(21),
            a = function() {
                function t() {}
                return t.decode = function(t, e) {
                    var r = this.encodingName(e);
                    return "undefined" == typeof TextDecoder ? this.decodeFallback(t, r) : new TextDecoder(r).decode(t)
                }, t.encode = function(e, r) {
                    return t.isBrowser() ? "undefined" == typeof TextEncoder ? this.encodeFallback(e) : (new TextEncoder).encode(e) : new TextEncoder(this.encodingName(r), {
                        NONSTANDARD_allowLegacyEncoding: !0
                    }).encode(e)
                }, t.isBrowser = function() {
                    return "undefined" != typeof window && "[object Window]" === {}.toString.call(window)
                }, t.encodingName = function(t) {
                    return "string" == typeof t ? t : t.getName()
                }, t.encodingCharacterSet = function(t) {
                    return o.default.getCharacterSetECIByName(this.encodingName(t))
                }, t.decodeFallback = function(t, e) {
                    var r = this.encodingCharacterSet(e);
                    if (r.equals(o.default.UTF8) || r.equals(o.default.ISO8859_1) || r.equals(o.default.ASCII)) {
                        for (var a = "", i = 0, u = t.length; i < u; i++) {
                            var f = t[i].toString(16);
                            f.length < 2 && (f = "0" + f), a += "%" + f
                        }
                        return decodeURIComponent(a)
                    }
                    if (r.equals(o.default.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(t.buffer));
                    throw new n.default("Encoding " + this.encodingName(e) + " not supported by fallback.")
                }, t.encodeFallback = function(t) {
                    for (var e = btoa(unescape(encodeURIComponent(t))).split(""), r = [], n = 0; n < e.length; n++) r.push(e[n].charCodeAt(0));
                    return new Uint8Array(r)
                }, t
            }();
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                this.bits = t, this.points = e
            }
            return t.prototype.getBits = function() {
                return this.bits
            }, t.prototype.getPoints = function() {
                return this.points
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(57),
            o = function() {
                function t() {}
                return t.setGridSampler = function(e) {
                    t.gridSampler = e
                }, t.getInstance = function() {
                    return t.gridSampler
                }, t.gridSampler = new n.default, t
            }();
        e.default = o
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e, r, n, o, a, i, u, f) {
                this.a11 = t, this.a21 = e, this.a31 = r, this.a12 = n, this.a22 = o, this.a32 = a, this.a13 = i, this.a23 = u, this.a33 = f
            }
            return t.quadrilateralToQuadrilateral = function(e, r, n, o, a, i, u, f, s, d, l, c, h, p, w, g) {
                var _ = t.quadrilateralToSquare(e, r, n, o, a, i, u, f);
                return t.squareToQuadrilateral(s, d, l, c, h, p, w, g).times(_)
            }, t.prototype.transformPoints = function(t) {
                for (var e = t.length, r = this.a11, n = this.a12, o = this.a13, a = this.a21, i = this.a22, u = this.a23, f = this.a31, s = this.a32, d = this.a33, l = 0; l < e; l += 2) {
                    var c = t[l],
                        h = t[l + 1],
                        p = o * c + u * h + d;
                    t[l] = (r * c + a * h + f) / p, t[l + 1] = (n * c + i * h + s) / p
                }
            }, t.prototype.transformPointsWithValues = function(t, e) {
                for (var r = this.a11, n = this.a12, o = this.a13, a = this.a21, i = this.a22, u = this.a23, f = this.a31, s = this.a32, d = this.a33, l = t.length, c = 0; c < l; c++) {
                    var h = t[c],
                        p = e[c],
                        w = o * h + u * p + d;
                    t[c] = (r * h + a * p + f) / w, e[c] = (n * h + i * p + s) / w
                }
            }, t.squareToQuadrilateral = function(e, r, n, o, a, i, u, f) {
                var s = e - n + a - u,
                    d = r - o + i - f;
                if (0 === s && 0 === d) return new t(n - e, a - n, e, o - r, i - o, r, 0, 0, 1);
                var l = n - a,
                    c = u - a,
                    h = o - i,
                    p = f - i,
                    w = l * p - c * h,
                    g = (s * p - c * d) / w,
                    _ = (l * d - s * h) / w;
                return new t(n - e + g * n, u - e + _ * u, e, o - r + g * o, f - r + _ * f, r, g, _, 1)
            }, t.quadrilateralToSquare = function(e, r, n, o, a, i, u, f) {
                return t.squareToQuadrilateral(e, r, n, o, a, i, u, f).buildAdjoint()
            }, t.prototype.buildAdjoint = function() {
                return new t(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21)
            }, t.prototype.times = function(e) {
                return new t(this.a11 * e.a11 + this.a21 * e.a12 + this.a31 * e.a13, this.a11 * e.a21 + this.a21 * e.a22 + this.a31 * e.a23, this.a11 * e.a31 + this.a21 * e.a32 + this.a31 * e.a33, this.a12 * e.a11 + this.a22 * e.a12 + this.a32 * e.a13, this.a12 * e.a21 + this.a22 * e.a22 + this.a32 * e.a23, this.a12 * e.a31 + this.a22 * e.a32 + this.a32 * e.a33, this.a13 * e.a11 + this.a23 * e.a12 + this.a33 * e.a13, this.a13 * e.a21 + this.a23 * e.a22 + this.a33 * e.a23, this.a13 * e.a31 + this.a23 * e.a32 + this.a33 * e.a33)
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(89),
            o = r(9),
            a = r(2),
            i = r(4),
            u = r(14),
            f = r(8),
            s = r(94),
            d = r(7),
            l = r(0),
            c = function() {
                function t() {
                    this.decoder = new n.default
                }
                return t.prototype.decode = function(e, r) {
                    var n, f;
                    if (void 0 === r && (r = null), null != r && r.has(i.default.PURE_BARCODE)) {
                        var l = t.extractPureBits(e.getBlackMatrix());
                        n = this.decoder.decode(l), f = t.NO_POINTS
                    } else {
                        var c = new s.default(e.getBlackMatrix()).detect();
                        n = this.decoder.decode(c.getBits()), f = c.getPoints()
                    }
                    var h = n.getRawBytes(),
                        p = new o.default(n.getText(), h, 8 * h.length, f, a.default.DATA_MATRIX, d.default.currentTimeMillis()),
                        w = n.getByteSegments();
                    null != w && p.putMetadata(u.default.BYTE_SEGMENTS, w);
                    var g = n.getECLevel();
                    return null != g && p.putMetadata(u.default.ERROR_CORRECTION_LEVEL, g), p
                }, t.prototype.reset = function() {}, t.extractPureBits = function(t) {
                    var e = t.getTopLeftOnBit(),
                        r = t.getBottomRightOnBit();
                    if (null == e || null == r) throw new l.default;
                    var n = this.moduleSize(e, t),
                        o = e[1],
                        a = r[1],
                        i = e[0],
                        u = (r[0] - i + 1) / n,
                        s = (a - o + 1) / n;
                    if (u <= 0 || s <= 0) throw new l.default;
                    var d = n / 2;
                    o += d, i += d;
                    for (var c = new f.default(u, s), h = 0; h < s; h++)
                        for (var p = o + h * n, w = 0; w < u; w++) t.get(i + w * n, p) && c.set(w, h);
                    return c
                }, t.moduleSize = function(t, e) {
                    for (var r = e.getWidth(), n = t[0], o = t[1]; n < r && e.get(n, o);) n++;
                    if (n === r) throw new l.default;
                    var a = n - t[0];
                    if (0 === a) throw new l.default;
                    return a
                }, t.NO_POINTS = [], t
            }();
        e.default = c
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(26),
            o = r(15),
            a = r(21),
            i = r(16),
            u = r(60),
            f = r(56),
            s = r(32),
            d = r(61),
            l = r(96),
            c = r(41),
            h = r(97),
            p = r(35),
            w = r(98),
            g = r(42),
            _ = function() {
                function t() {}
                return t.calculateMaskPenalty = function(t) {
                    return d.default.applyMaskPenaltyRule1(t) + d.default.applyMaskPenaltyRule2(t) + d.default.applyMaskPenaltyRule3(t) + d.default.applyMaskPenaltyRule4(t)
                }, t.encode = function(e, r, i) {
                    void 0 === i && (i = null);
                    var u = t.DEFAULT_BYTE_MODE_ENCODING,
                        d = null !== i && void 0 !== i.get(n.default.CHARACTER_SET);
                    d && (u = i.get(n.default.CHARACTER_SET).toString());
                    var p = this.chooseMode(e, u),
                        w = new o.default;
                    if (p === f.default.BYTE && (d || t.DEFAULT_BYTE_MODE_ENCODING !== u)) {
                        var _ = a.default.getCharacterSetECIByName(u);
                        void 0 !== _ && this.appendECI(_, w)
                    }
                    this.appendModeInfo(p, w);
                    var v, y = new o.default;
                    if (this.appendBytes(e, p, y, u), null !== i && void 0 !== i.get(n.default.QR_VERSION)) {
                        var E = Number.parseInt(i.get(n.default.QR_VERSION).toString(), 10);
                        v = s.default.getVersionForNumber(E);
                        var A = this.calculateBitsNeeded(p, w, y, v);
                        if (!this.willFit(A, v, r)) throw new g.default("Data too big for requested version")
                    } else v = this.recommendVersion(r, p, w, y);
                    var C = new o.default;
                    C.appendBitArray(w);
                    var m = p === f.default.BYTE ? y.getSizeInBytes() : e.length;
                    this.appendLengthInfo(m, v, p, C), C.appendBitArray(y);
                    var S = v.getECBlocksForLevel(r),
                        I = v.getTotalCodewords() - S.getTotalECCodewords();
                    this.terminateBits(I, C);
                    var O = this.interleaveWithECBytes(C, v.getTotalCodewords(), I, S.getNumBlocks()),
                        T = new c.default;
                    T.setECLevel(r), T.setMode(p), T.setVersion(v);
                    var M = v.getDimensionForVersion(),
                        b = new l.default(M, M),
                        N = this.chooseMaskPattern(O, r, v, b);
                    return T.setMaskPattern(N), h.default.buildMatrix(O, r, v, N, b), T.setMatrix(b), T
                }, t.recommendVersion = function(t, e, r, n) {
                    var o = this.calculateBitsNeeded(e, r, n, s.default.getVersionForNumber(1)),
                        a = this.chooseVersion(o, t),
                        i = this.calculateBitsNeeded(e, r, n, a);
                    return this.chooseVersion(i, t)
                }, t.calculateBitsNeeded = function(t, e, r, n) {
                    return e.getSize() + t.getCharacterCountBits(n) + r.getSize()
                }, t.getAlphanumericCode = function(e) {
                    return e < t.ALPHANUMERIC_TABLE.length ? t.ALPHANUMERIC_TABLE[e] : -1
                }, t.chooseMode = function(e, r) {
                    if (void 0 === r && (r = null), a.default.SJIS.getName() === r && this.isOnlyDoubleByteKanji(e)) return f.default.KANJI;
                    for (var n = !1, o = !1, i = 0, u = e.length; i < u; ++i) {
                        var s = e.charAt(i);
                        if (t.isDigit(s)) n = !0;
                        else {
                            if (-1 === this.getAlphanumericCode(s.charCodeAt(0))) return f.default.BYTE;
                            o = !0
                        }
                    }
                    return o ? f.default.ALPHANUMERIC : n ? f.default.NUMERIC : f.default.BYTE
                }, t.isOnlyDoubleByteKanji = function(t) {
                    var e;
                    try {
                        e = p.default.encode(t, a.default.SJIS)
                    } catch (t) {
                        return !1
                    }
                    var r = e.length;
                    if (r % 2 != 0) return !1;
                    for (var n = 0; n < r; n += 2) {
                        var o = 255 & e[n];
                        if ((o < 129 || 159 < o) && (o < 224 || 235 < o)) return !1
                    }
                    return !0
                }, t.chooseMaskPattern = function(t, e, r, n) {
                    for (var o = Number.MAX_SAFE_INTEGER, a = -1, i = 0; i < c.default.NUM_MASK_PATTERNS; i++) {
                        h.default.buildMatrix(t, e, r, i, n);
                        var u = this.calculateMaskPenalty(n);
                        u < o && (o = u, a = i)
                    }
                    return a
                }, t.chooseVersion = function(e, r) {
                    for (var n = 1; n <= 40; n++) {
                        var o = s.default.getVersionForNumber(n);
                        if (t.willFit(e, o, r)) return o
                    }
                    throw new g.default("Data too big")
                }, t.willFit = function(t, e, r) {
                    return (t + 7) / 8 <= e.getTotalCodewords() - e.getECBlocksForLevel(r).getTotalECCodewords()
                }, t.terminateBits = function(t, e) {
                    var r = 8 * t;
                    if (e.getSize() > r) throw new g.default("data bits cannot fit in the QR Code" + e.getSize() + " > " + r);
                    for (var n = 0; n < 4 && e.getSize() < r; ++n) e.appendBit(!1);
                    var o = 7 & e.getSize();
                    if (0 < o)
                        for (n = o; n < 8; n++) e.appendBit(!1);
                    var a = t - e.getSizeInBytes();
                    for (n = 0; n < a; ++n) e.appendBits(0 == (1 & n) ? 236 : 17, 8);
                    if (e.getSize() !== r) throw new g.default("Bits size does not equal capacity")
                }, t.getNumDataBytesAndNumECBytesForBlockID = function(t, e, r, n, o, a) {
                    if (r <= n) throw new g.default("Block ID too large");
                    var i = t % r,
                        u = r - i,
                        f = Math.floor(t / r),
                        s = f + 1,
                        d = Math.floor(e / r),
                        l = d + 1,
                        c = f - d,
                        h = s - l;
                    if (c !== h) throw new g.default("EC bytes mismatch");
                    if (r !== u + i) throw new g.default("RS blocks mismatch");
                    if (t !== (d + c) * u + (l + h) * i) throw new g.default("Total bytes mismatch");
                    a[0] = n < u ? (o[0] = d, c) : (o[0] = l, h)
                }, t.interleaveWithECBytes = function(e, r, n, a) {
                    if (e.getSizeInBytes() !== n) throw new g.default("Number of bits and data bytes does not match");
                    for (var i = 0, u = 0, f = 0, s = new Array, d = 0; d < a; ++d) {
                        var l = new Int32Array(1),
                            c = new Int32Array(1);
                        t.getNumDataBytesAndNumECBytesForBlockID(r, n, a, d, l, c);
                        var h = l[0],
                            p = new Uint8Array(h);
                        e.toBytes(8 * i, p, 0, h);
                        var _ = t.generateECBytes(p, c[0]);
                        s.push(new w.default(p, _)), u = Math.max(u, h), f = Math.max(f, _.length), i += l[0]
                    }
                    if (n !== i) throw new g.default("Data bytes does not match offset");
                    var v = new o.default;
                    for (d = 0; d < u; ++d)
                        for (var y = 0, E = s; y < E.length; y++) d < (p = E[y].getDataBytes()).length && v.appendBits(p[d], 8);
                    for (d = 0; d < f; ++d)
                        for (var A = 0, C = s; A < C.length; A++) d < (_ = C[A].getErrorCorrectionBytes()).length && v.appendBits(_[d], 8);
                    if (r !== v.getSizeInBytes()) throw new g.default("Interleaving error: " + r + " and " + v.getSizeInBytes() + " differ.");
                    return v
                }, t.generateECBytes = function(t, e) {
                    for (var r = t.length, n = new Int32Array(r + e), o = 0; o < r; o++) n[o] = 255 & t[o];
                    new u.default(i.default.QR_CODE_FIELD_256).encode(n, e);
                    var a = new Uint8Array(e);
                    for (o = 0; o < e; o++) a[o] = n[r + o];
                    return a
                }, t.appendModeInfo = function(t, e) {
                    e.appendBits(t.getBits(), 4)
                }, t.appendLengthInfo = function(t, e, r, n) {
                    var o = r.getCharacterCountBits(e);
                    if (1 << o <= t) throw new g.default(t + " is bigger than " + ((1 << o) - 1));
                    n.appendBits(t, o)
                }, t.appendBytes = function(e, r, n, o) {
                    switch (r) {
                        case f.default.NUMERIC:
                            t.appendNumericBytes(e, n);
                            break;
                        case f.default.ALPHANUMERIC:
                            t.appendAlphanumericBytes(e, n);
                            break;
                        case f.default.BYTE:
                            t.append8BitBytes(e, n, o);
                            break;
                        case f.default.KANJI:
                            t.appendKanjiBytes(e, n);
                            break;
                        default:
                            throw new g.default("Invalid mode: " + r)
                    }
                }, t.getDigit = function(t) {
                    return t.charCodeAt(0) - 48
                }, t.isDigit = function(e) {
                    var r = t.getDigit(e);
                    return 0 <= r && r <= 9
                }, t.appendNumericBytes = function(e, r) {
                    for (var n = e.length, o = 0; o < n;) {
                        var a = t.getDigit(e.charAt(o));
                        if (o + 2 < n) {
                            var i = t.getDigit(e.charAt(o + 1)),
                                u = t.getDigit(e.charAt(o + 2));
                            r.appendBits(100 * a + 10 * i + u, 10), o += 3
                        } else o + 1 < n ? (i = t.getDigit(e.charAt(o + 1)), r.appendBits(10 * a + i, 7), o += 2) : (r.appendBits(a, 4), o++)
                    }
                }, t.appendAlphanumericBytes = function(e, r) {
                    for (var n = e.length, o = 0; o < n;) {
                        var a = t.getAlphanumericCode(e.charCodeAt(o));
                        if (-1 === a) throw new g.default;
                        if (o + 1 < n) {
                            var i = t.getAlphanumericCode(e.charCodeAt(o + 1));
                            if (-1 === i) throw new g.default;
                            r.appendBits(45 * a + i, 11), o += 2
                        } else r.appendBits(a, 6), o++
                    }
                }, t.append8BitBytes = function(t, e, r) {
                    var n;
                    try {
                        n = p.default.encode(t, r)
                    } catch (t) {
                        throw new g.default(t)
                    }
                    for (var o = 0, a = n.length; o !== a; o++) {
                        var i = n[o];
                        e.appendBits(i, 8)
                    }
                }, t.appendKanjiBytes = function(t, e) {
                    var r;
                    try {
                        r = p.default.encode(t, a.default.SJIS)
                    } catch (t) {
                        throw new g.default(t)
                    }
                    for (var n = r.length, o = 0; o < n; o += 2) {
                        var i = (255 & r[o]) << 8 & 4294967295 | 255 & r[o + 1],
                            u = -1;
                        if (33088 <= i && i <= 40956 ? u = i - 33088 : 57408 <= i && i <= 60351 && (u = i - 49472), -1 === u) throw new g.default("Invalid byte sequence");
                        var f = 192 * (u >> 8) + (255 & u);
                        e.appendBits(f, 13)
                    }
                }, t.appendECI = function(t, e) {
                    e.appendBits(f.default.ECI.getBits(), 4), e.appendBits(t.getValue(), 8)
                }, t.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]), t.DEFAULT_BYTE_MODE_ENCODING = a.default.UTF8.getName(), t
            }();
        e.default = _
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(11),
            o = function() {
                function t() {
                    this.maskPattern = -1
                }
                return t.prototype.getMode = function() {
                    return this.mode
                }, t.prototype.getECLevel = function() {
                    return this.ecLevel
                }, t.prototype.getVersion = function() {
                    return this.version
                }, t.prototype.getMaskPattern = function() {
                    return this.maskPattern
                }, t.prototype.getMatrix = function() {
                    return this.matrix
                }, t.prototype.toString = function() {
                    var t = new n.default;
                    return t.append("<<\n"), t.append(" mode: "), t.append(this.mode ? this.mode.toString() : "null"), t.append("\n ecLevel: "), t.append(this.ecLevel ? this.ecLevel.toString() : "null"), t.append("\n version: "), t.append(this.version ? this.version.toString() : "null"), t.append("\n maskPattern: "), t.append(this.maskPattern.toString()), this.matrix ? (t.append("\n matrix:\n"), t.append(this.matrix.toString())) : t.append("\n matrix: null\n"), t.append(">>\n"), t.toString()
                }, t.prototype.setMode = function(t) {
                    this.mode = t
                }, t.prototype.setECLevel = function(t) {
                    this.ecLevel = t
                }, t.prototype.setVersion = function(t) {
                    this.version = t
                }, t.prototype.setMaskPattern = function(t) {
                    this.maskPattern = t
                }, t.prototype.setMatrix = function(t) {
                    this.matrix = t
                }, t.isValidMaskPattern = function(e) {
                    return 0 <= e && e < t.NUM_MASK_PATTERNS
                }, t.NUM_MASK_PATTERNS = 8, t
            }();
        e.default = o
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(r(6).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(2),
            i = r(62),
            u = r(63),
            f = r(64),
            s = r(4),
            d = r(66),
            l = r(104),
            c = r(0),
            h = function(t) {
                function e(e) {
                    var r = t.call(this) || this;
                    r.readers = [];
                    var n = e ? e.get(s.default.POSSIBLE_FORMATS) : null,
                        o = e && void 0 !== e.get(s.default.ASSUME_CODE_39_CHECK_DIGIT);
                    return n && ((n.includes(a.default.EAN_13) || n.includes(a.default.EAN_8)) && r.readers.push(new l.default(e)), n.includes(a.default.CODE_39) && r.readers.push(new i.default(o)), n.includes(a.default.CODE_128) && r.readers.push(new u.default), n.includes(a.default.ITF) && r.readers.push(new d.default), n.includes(a.default.RSS_14) && r.readers.push(new f.default)), 0 === r.readers.length && (r.readers.push(new i.default), r.readers.push(new l.default(e)), r.readers.push(new u.default), r.readers.push(new d.default), r.readers.push(new f.default)), r
                }
                return o(e, t), e.prototype.decodeRow = function(t, e, r) {
                    for (var n = 0; n < this.readers.length; n++) try {
                        return this.readers[n].decodeRow(t, e, r)
                    } catch (t) {}
                    throw new c.default
                }, e.prototype.reset = function() {
                    this.readers.forEach(function(t) {
                        return t.reset()
                    })
                }, e
            }(r(10).default);
        e.default = h
    }, function(t, e, r) {
        "use strict";

        function n(t) {
            for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(r(72)), n(r(88)), n(r(95)), n(r(99)), n(r(17)), n(r(109)), n(r(45)), n(r(46));
        var o = r(6);
        e.Exception = o.default;
        var a = r(29);
        e.ArgumentException = a.default;
        var i = r(51);
        e.ArithmeticException = i.default;
        var u = r(12);
        e.ChecksumException = u.default;
        var f = r(5);
        e.FormatException = f.default;
        var s = r(1);
        e.IllegalArgumentException = s.default;
        var d = r(20);
        e.IllegalStateException = d.default;
        var l = r(0);
        e.NotFoundException = l.default;
        var c = r(69);
        e.ReaderException = c.default;
        var h = r(52);
        e.ReedSolomonException = h.default;
        var p = r(27);
        e.UnsupportedOperationException = p.default;
        var w = r(42);
        e.WriterException = w.default;
        var g = r(2);
        e.BarcodeFormat = g.default;
        var _ = r(50);
        e.Binarizer = _.default;
        var v = r(47);
        e.BinaryBitmap = v.default;
        var y = r(4);
        e.DecodeHintType = y.default;
        var E = r(18);
        e.InvertedLuminanceSource = E.default;
        var A = r(19);
        e.LuminanceSource = A.default;
        var C = r(68);
        e.MultiFormatReader = C.default;
        var m = r(110);
        e.MultiFormatWriter = m.default;
        var S = r(111);
        e.PlanarYUVLuminanceSource = S.default;
        var I = r(9);
        e.Result = I.default;
        var O = r(14);
        e.ResultMetadataType = O.default;
        var T = r(112);
        e.RGBLuminanceSource = T.default;
        var M = r(15);
        e.BitArray = M.default;
        var b = r(8);
        e.BitMatrix = b.default;
        var N = r(33);
        e.BitSource = N.default;
        var R = r(21);
        e.CharacterSetECI = R.default;
        var P = r(34);
        e.DecoderResult = P.default;
        var D = r(57);
        e.DefaultGridSampler = D.default;
        var B = r(36);
        e.DetectorResult = B.default;
        var k = r(26);
        e.EncodeHintType = k.default;
        var L = r(49);
        e.GlobalHistogramBinarizer = L.default;
        var F = r(58);
        e.GridSampler = F.default;
        var U = r(37);
        e.GridSamplerInstance = U.default;
        var x = r(48);
        e.HybridBinarizer = x.default;
        var V = r(38);
        e.PerspectiveTransform = V.default;
        var H = r(55);
        e.StringUtils = H.default;
        var j = r(13);
        e.MathUtils = j.default;
        var z = r(59);
        e.WhiteRectangleDetector = z.default;
        var G = r(16);
        e.GenericGF = G.default;
        var W = r(24);
        e.GenericGFPoly = W.default;
        var X = r(31);
        e.ReedSolomonDecoder = X.default;
        var K = r(60);
        e.ReedSolomonEncoder = K.default;
        var Y = r(39);
        e.DataMatrixReader = Y.default;
        var Z = r(30);
        e.QRCodeReader = Z.default;
        var Q = r(70);
        e.QRCodeWriter = Q.default;
        var q = r(25);
        e.QRCodeDecoderErrorCorrectionLevel = q.default;
        var J = r(40);
        e.QRCodeEncoder = J.default;
        var $ = r(41);
        e.QRCodeEncoderQRCode = $.default;
        var tt = r(10);
        e.OneDReader = tt.default;
        var et = r(67);
        e.EAN13Reader = et.default;
        var rt = r(63);
        e.Code128Reader = rt.default;
        var nt = r(66);
        e.ITFReader = nt.default;
        var ot = r(62);
        e.Code39Reader = ot.default;
        var at = r(64);
        e.RSS14Reader = at.default;
        var it = r(43);
        e.MultiformatReader = it.default
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(18),
            i = r(19),
            u = r(1),
            f = function(t) {
                function e(r) {
                    var n = t.call(this, r.width, r.height) || this;
                    return n.canvas = r, n.tempCanvasElement = null, n.buffer = e.makeBufferFromCanvasImageData(r), n
                }
                return o(e, t), e.makeBufferFromCanvasImageData = function(t) {
                    var r = t.getContext("2d").getImageData(0, 0, t.width, t.height);
                    return e.toGrayscaleBuffer(r.data, t.width, t.height)
                }, e.toGrayscaleBuffer = function(t, e, r) {
                    for (var n = new Uint8ClampedArray(e * r), o = 0, a = 0, i = t.length; o < i; o += 4, a++) {
                        var u = void 0;
                        u = 0 === t[o + 3] ? 255 : 306 * t[o] + 601 * t[o + 1] + 117 * t[o + 2] + 512 >> 10, n[a] = u
                    }
                    return n
                }, e.prototype.getRow = function(t, e) {
                    if (t < 0 || t >= this.getHeight()) throw new u.default("Requested row is outside the image: " + t);
                    var r = this.getWidth(),
                        n = t * r;
                    return null === e ? e = this.buffer.slice(n, n + r) : (e.length < r && (e = new Uint8ClampedArray(r)), e.set(this.buffer.slice(n, n + r))), e
                }, e.prototype.getMatrix = function() {
                    return this.buffer
                }, e.prototype.isCropSupported = function() {
                    return !0
                }, e.prototype.crop = function(t, e, r, n) {
                    return this.crop(t, e, r, n), this
                }, e.prototype.isRotateSupported = function() {
                    return !0
                }, e.prototype.rotateCounterClockwise = function() {
                    return this.rotate(-90), this
                }, e.prototype.rotateCounterClockwise45 = function() {
                    return this.rotate(-45), this
                }, e.prototype.getTempCanvasElement = function() {
                    if (null === this.tempCanvasElement) {
                        var t = this.canvas.ownerDocument.createElement("canvas");
                        t.width = this.canvas.width, t.height = this.canvas.height, this.tempCanvasElement = t
                    }
                    return this.tempCanvasElement
                }, e.prototype.rotate = function(t) {
                    var r = this.getTempCanvasElement(),
                        n = r.getContext("2d"),
                        o = t * e.DEGREE_TO_RADIANS,
                        a = this.canvas.width,
                        i = this.canvas.height,
                        u = Math.ceil(Math.abs(Math.cos(o)) * a + Math.abs(Math.sin(o)) * i),
                        f = Math.ceil(Math.abs(Math.sin(o)) * a + Math.abs(Math.cos(o)) * i);
                    return r.width = u, r.height = f, n.translate(u / 2, f / 2), n.rotate(o), n.drawImage(this.canvas, a / -2, i / -2), this.buffer = e.makeBufferFromCanvasImageData(r), this
                }, e.prototype.invert = function() {
                    return new a.default(this)
                }, e.DEGREE_TO_RADIANS = Math.PI / 180, e
            }(i.default);
        e.HTMLCanvasElementLuminanceSource = f
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.VideoInputDevice = function(t, e) {
            this.deviceId = t, this.label = e
        }
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            o = function() {
                function t(t) {
                    if (null === (this.binarizer = t)) throw new n.default("Binarizer must be non-null.")
                }
                return t.prototype.getWidth = function() {
                    return this.binarizer.getWidth()
                }, t.prototype.getHeight = function() {
                    return this.binarizer.getHeight()
                }, t.prototype.getBlackRow = function(t, e) {
                    return this.binarizer.getBlackRow(t, e)
                }, t.prototype.getBlackMatrix = function() {
                    return null !== this.matrix && void 0 !== this.matrix || (this.matrix = this.binarizer.getBlackMatrix()), this.matrix
                }, t.prototype.isCropSupported = function() {
                    return this.binarizer.getLuminanceSource().isCropSupported()
                }, t.prototype.crop = function(e, r, n, o) {
                    var a = this.binarizer.getLuminanceSource().crop(e, r, n, o);
                    return new t(this.binarizer.createBinarizer(a))
                }, t.prototype.isRotateSupported = function() {
                    return this.binarizer.getLuminanceSource().isRotateSupported()
                }, t.prototype.rotateCounterClockwise = function() {
                    var e = this.binarizer.getLuminanceSource().rotateCounterClockwise();
                    return new t(this.binarizer.createBinarizer(e))
                }, t.prototype.rotateCounterClockwise45 = function() {
                    var e = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
                    return new t(this.binarizer.createBinarizer(e))
                }, t.prototype.toString = function() {
                    try {
                        return this.getBlackMatrix().toString()
                    } catch (t) {
                        return ""
                    }
                }, t
            }();
        e.default = o
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(49),
            i = r(8),
            u = function(t) {
                function e(e) {
                    var r = t.call(this, e) || this;
                    return r.matrix = null, r
                }
                return o(e, t), e.prototype.getBlackMatrix = function() {
                    if (null !== this.matrix) return this.matrix;
                    var r = this.getLuminanceSource(),
                        n = r.getWidth(),
                        o = r.getHeight();
                    if (e.MINIMUM_DIMENSION <= n && e.MINIMUM_DIMENSION <= o) {
                        var a = r.getMatrix(),
                            u = n >> e.BLOCK_SIZE_POWER;
                        0 != (n & e.BLOCK_SIZE_MASK) && u++;
                        var f = o >> e.BLOCK_SIZE_POWER;
                        0 != (o & e.BLOCK_SIZE_MASK) && f++;
                        var s = e.calculateBlackPoints(a, u, f, n, o),
                            d = new i.default(n, o);
                        e.calculateThresholdForBlock(a, u, f, n, o, s, d), this.matrix = d
                    } else this.matrix = t.prototype.getBlackMatrix.call(this);
                    return this.matrix
                }, e.prototype.createBinarizer = function(t) {
                    return new e(t)
                }, e.calculateThresholdForBlock = function(t, r, n, o, a, i, u) {
                    for (var f = a - e.BLOCK_SIZE, s = o - e.BLOCK_SIZE, d = 0; d < n; d++) {
                        var l = d << e.BLOCK_SIZE_POWER;
                        f < l && (l = f);
                        for (var c = e.cap(d, 2, n - 3), h = 0; h < r; h++) {
                            var p = h << e.BLOCK_SIZE_POWER;
                            s < p && (p = s);
                            for (var w = e.cap(h, 2, r - 3), g = 0, _ = -2; _ <= 2; _++) {
                                var v = i[c + _];
                                g += v[w - 2] + v[w - 1] + v[w] + v[w + 1] + v[w + 2]
                            }
                            e.thresholdBlock(t, p, l, g / 25, o, u)
                        }
                    }
                }, e.cap = function(t, e, r) {
                    return t < e ? e : r < t ? r : t
                }, e.thresholdBlock = function(t, r, n, o, a, i) {
                    for (var u = 0, f = n * a + r; u < e.BLOCK_SIZE; u++, f += a)
                        for (var s = 0; s < e.BLOCK_SIZE; s++)(255 & t[f + s]) <= o && i.set(r + s, n + u)
                }, e.calculateBlackPoints = function(t, r, n, o, a) {
                    for (var i = a - e.BLOCK_SIZE, u = o - e.BLOCK_SIZE, f = new Array(n), s = 0; s < n; s++) {
                        f[s] = new Int32Array(r);
                        var d = s << e.BLOCK_SIZE_POWER;
                        i < d && (d = i);
                        for (var l = 0; l < r; l++) {
                            var c = l << e.BLOCK_SIZE_POWER;
                            u < c && (c = u);
                            for (var h = 0, p = 255, w = 0, g = 0, _ = d * o + c; g < e.BLOCK_SIZE; g++, _ += o) {
                                for (var v = 0; v < e.BLOCK_SIZE; v++) {
                                    var y = 255 & t[_ + v];
                                    h += y, y < p && (p = y), w < y && (w = y)
                                }
                                if (e.MIN_DYNAMIC_RANGE < w - p)
                                    for (g++, _ += o; g < e.BLOCK_SIZE; g++, _ += o)
                                        for (v = 0; v < e.BLOCK_SIZE; v++) h += 255 & t[_ + v]
                            }
                            var E = h >> 2 * e.BLOCK_SIZE_POWER;
                            if (w - p <= e.MIN_DYNAMIC_RANGE && (E = p / 2, 0 < s && 0 < l)) {
                                var A = (f[s - 1][l] + 2 * f[s][l - 1] + f[s - 1][l - 1]) / 4;
                                p < A && (E = A)
                            }
                            f[s][l] = E
                        }
                    }
                    return f
                }, e.BLOCK_SIZE_MASK = (e.BLOCK_SIZE = 1 << (e.BLOCK_SIZE_POWER = 3)) - 1, e.MINIMUM_DIMENSION = 5 * e.BLOCK_SIZE, e.MIN_DYNAMIC_RANGE = 24, e
            }(a.default);
        e.default = u
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(50),
            i = r(15),
            u = r(8),
            f = r(0),
            s = function(t) {
                function e(r) {
                    var n = t.call(this, r) || this;
                    return n.luminances = e.EMPTY, n.buckets = new Int32Array(e.LUMINANCE_BUCKETS), n
                }
                return o(e, t), e.prototype.getBlackRow = function(t, r) {
                    var n = this.getLuminanceSource(),
                        o = n.getWidth();
                    null == r || r.getSize() < o ? r = new i.default(o) : r.clear(), this.initArrays(o);
                    for (var a = n.getRow(t, this.luminances), u = this.buckets, f = 0; f < o; f++) u[(255 & a[f]) >> e.LUMINANCE_SHIFT]++;
                    var s = e.estimateBlackPoint(u);
                    if (o < 3)
                        for (f = 0; f < o; f++)(255 & a[f]) < s && r.set(f);
                    else {
                        var d = 255 & a[0],
                            l = 255 & a[1];
                        for (f = 1; f < o - 1; f++) {
                            var c = 255 & a[f + 1];
                            (4 * l - d - c) / 2 < s && r.set(f), d = l, l = c
                        }
                    }
                    return r
                }, e.prototype.getBlackMatrix = function() {
                    var t = this.getLuminanceSource(),
                        r = t.getWidth(),
                        n = t.getHeight(),
                        o = new u.default(r, n);
                    this.initArrays(r);
                    for (var a = this.buckets, i = 1; i < 5; i++)
                        for (var f = n * i / 5, s = t.getRow(f, this.luminances), d = Math.floor(4 * r / 5), l = Math.floor(r / 5); l < d; l++) a[(255 & s[l]) >> e.LUMINANCE_SHIFT]++;
                    var c = e.estimateBlackPoint(a),
                        h = t.getMatrix();
                    for (i = 0; i < n; i++) {
                        var p = i * r;
                        for (l = 0; l < r; l++)(255 & h[p + l]) < c && o.set(l, i)
                    }
                    return o
                }, e.prototype.createBinarizer = function(t) {
                    return new e(t)
                }, e.prototype.initArrays = function(t) {
                    this.luminances.length < t && (this.luminances = new Uint8ClampedArray(t));
                    for (var r = this.buckets, n = 0; n < e.LUMINANCE_BUCKETS; n++) r[n] = 0
                }, e.estimateBlackPoint = function(t) {
                    for (var r = t.length, n = 0, o = 0, a = 0, i = 0; i < r; i++) t[i] > a && (a = t[o = i]), t[i] > n && (n = t[i]);
                    var u = 0,
                        s = 0;
                    for (i = 0; i < r; i++) {
                        var d = i - o;
                        s < (p = t[i] * d * d) && (u = i, s = p)
                    }
                    if (u < o) {
                        var l = o;
                        o = u, u = l
                    }
                    if (u - o <= r / 16) throw new f.default;
                    var c = u - 1,
                        h = -1;
                    for (i = u - 1; o < i; i--) {
                        var p, w = i - o;
                        h < (p = w * w * (u - i) * (n - t[i])) && (c = i, h = p)
                    }
                    return c << e.LUMINANCE_SHIFT
                }, e.LUMINANCE_SHIFT = 8 - (e.LUMINANCE_BITS = 5), e.LUMINANCE_BUCKETS = 1 << e.LUMINANCE_BITS, e.EMPTY = Uint8ClampedArray.from([0]), e
            }(a.default);
        e.default = s
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                this.source = t
            }
            return t.prototype.getLuminanceSource = function() {
                return this.source
            }, t.prototype.getWidth = function() {
                return this.source.getWidth()
            }, t.prototype.getHeight = function() {
                return this.source.getHeight()
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(r(6).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(r(6).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(25),
            o = r(23),
            a = function() {
                function t(t) {
                    this.errorCorrectionLevel = n.default.forBits(t >> 3 & 3), this.dataMask = 7 & t
                }
                return t.numBitsDiffering = function(t, e) {
                    return o.default.bitCount(t ^ e)
                }, t.decodeFormatInformation = function(e, r) {
                    var n = t.doDecodeFormatInformation(e, r);
                    return null !== n ? n : t.doDecodeFormatInformation(e ^ t.FORMAT_INFO_MASK_QR, r ^ t.FORMAT_INFO_MASK_QR)
                }, t.doDecodeFormatInformation = function(e, r) {
                    for (var n = Number.MAX_SAFE_INTEGER, o = 0, a = 0, i = t.FORMAT_INFO_DECODE_LOOKUP; a < i.length; a++) {
                        var u = i[a],
                            f = u[0];
                        if (f === e || f === r) return new t(u[1]);
                        var s = t.numBitsDiffering(e, f);
                        s < n && (o = u[1], n = s), e !== r && (s = t.numBitsDiffering(r, f)) < n && (o = u[1], n = s)
                    }
                    return n <= 3 ? new t(o) : null
                }, t.prototype.getErrorCorrectionLevel = function() {
                    return this.errorCorrectionLevel
                }, t.prototype.getDataMask = function() {
                    return this.dataMask
                }, t.prototype.hashCode = function() {
                    return this.errorCorrectionLevel.getBits() << 3 | this.dataMask
                }, t.prototype.equals = function(e) {
                    if (!(e instanceof t)) return !1;
                    var r = e;
                    return this.errorCorrectionLevel === r.errorCorrectionLevel && this.dataMask === r.dataMask
                }, t.FORMAT_INFO_MASK_QR = 21522, t.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])], t
            }();
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                this.mirrored = t
            }
            return t.prototype.isMirrored = function() {
                return this.mirrored
            }, t.prototype.applyMirroredCorrection = function(t) {
                if (this.mirrored && null !== t && !(t.length < 3)) {
                    var e = t[0];
                    t[0] = t[2], t[2] = e
                }
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(4),
            o = r(21),
            a = function() {
                function t() {}
                return t.prototype.StringUtils = function() {}, t.guessEncoding = function(e, r) {
                    if (null != r && void 0 !== r.get(n.default.CHARACTER_SET)) return r.get(n.default.CHARACTER_SET).toString();
                    for (var o = e.length, a = !0, i = !0, u = !0, f = 0, s = 0, d = 0, l = 0, c = 0, h = 0, p = 0, w = 0, g = 0, _ = 0, v = 0, y = 3 < e.length && 239 === e[0] && 187 === e[1] && 191 === e[2], E = 0; E < o && (a || i || u); E++) {
                        var A = 255 & e[E];
                        u && (0 < f ? 0 == (128 & A) ? u = !1 : f-- : 0 != (128 & A) && (0 == (64 & A) ? u = !1 : (f++, 0 == (32 & A) ? s++ : (f++, 0 == (16 & A) ? d++ : (f++, 0 == (8 & A) ? l++ : u = !1))))), a && (127 < A && A < 160 ? a = !1 : 159 < A && (A < 192 || 215 === A || 247 === A) && v++), i && (0 < c ? A < 64 || 127 === A || 252 < A ? i = !1 : c-- : 128 === A || 160 === A || 239 < A ? i = !1 : 160 < A && A < 224 ? (h++, w = 0, g < ++p && (g = p)) : 127 < A ? (c++, p = 0, _ < ++w && (_ = w)) : w = p = 0)
                    }
                    return u && 0 < f && (u = !1), i && 0 < c && (i = !1), u && (y || 0 < s + d + l) ? t.UTF8 : i && (t.ASSUME_SHIFT_JIS || 3 <= g || 3 <= _) ? t.SHIFT_JIS : a && i ? 2 === g && 2 === h || o <= 10 * v ? t.SHIFT_JIS : t.ISO88591 : a ? t.ISO88591 : i ? t.SHIFT_JIS : u ? t.UTF8 : t.PLATFORM_DEFAULT_ENCODING
                }, t.SHIFT_JIS = o.default.SJIS.getName(), t.GB2312 = "GB2312", t.ISO88591 = o.default.ISO8859_1.getName(), t.EUC_JP = "EUC_JP", t.UTF8 = o.default.UTF8.getName(), t.PLATFORM_DEFAULT_ENCODING = t.UTF8, t.ASSUME_SHIFT_JIS = !1, t
            }();
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, o, a = r(1);
        (o = n = e.ModeValues || (e.ModeValues = {}))[o.TERMINATOR = 0] = "TERMINATOR", o[o.NUMERIC = 1] = "NUMERIC", o[o.ALPHANUMERIC = 2] = "ALPHANUMERIC", o[o.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", o[o.BYTE = 4] = "BYTE", o[o.ECI = 5] = "ECI", o[o.KANJI = 6] = "KANJI", o[o.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", o[o.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", o[o.HANZI = 9] = "HANZI";
        var i = function() {
            function t(e, r, n, o) {
                this.value = e, this.stringValue = r, this.characterCountBitsForVersions = n, this.bits = o, t.FOR_BITS.set(o, this), t.FOR_VALUE.set(e, this)
            }
            return t.forBits = function(e) {
                var r = t.FOR_BITS.get(e);
                if (void 0 === r) throw new a.default;
                return r
            }, t.prototype.getCharacterCountBits = function(t) {
                var e, r = t.getVersionNumber();
                return e = r <= 9 ? 0 : r <= 26 ? 1 : 2, this.characterCountBitsForVersions[e]
            }, t.prototype.getValue = function() {
                return this.value
            }, t.prototype.getBits = function() {
                return this.bits
            }, t.prototype.equals = function(e) {
                if (!(e instanceof t)) return !1;
                var r = e;
                return this.value === r.value
            }, t.prototype.toString = function() {
                return this.stringValue
            }, t.FOR_BITS = new Map, t.FOR_VALUE = new Map, t.TERMINATOR = new t(n.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), t.NUMERIC = new t(n.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), t.ALPHANUMERIC = new t(n.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), t.STRUCTURED_APPEND = new t(n.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), t.BYTE = new t(n.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), t.ECI = new t(n.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), t.KANJI = new t(n.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), t.FNC1_FIRST_POSITION = new t(n.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), t.FNC1_SECOND_POSITION = new t(n.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), t.HANZI = new t(n.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13), t
        }();
        e.default = i
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(58),
            i = r(8),
            u = r(38),
            f = r(0),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.sampleGrid = function(t, e, r, n, o, a, i, f, s, d, l, c, h, p, w, g, _, v, y) {
                    var E = u.default.quadrilateralToQuadrilateral(n, o, a, i, f, s, d, l, c, h, p, w, g, _, v, y);
                    return this.sampleGridWithTransform(t, e, r, E)
                }, e.prototype.sampleGridWithTransform = function(t, e, r, n) {
                    if (e <= 0 || r <= 0) throw new f.default;
                    for (var o = new i.default(e, r), u = new Float32Array(2 * e), s = 0; s < r; s++) {
                        for (var d = u.length, l = s + .5, c = 0; c < d; c += 2) u[c] = c / 2 + .5, u[c + 1] = l;
                        n.transformPoints(u), a.default.checkAndNudgePoints(t, u);
                        try {
                            for (c = 0; c < d; c += 2) t.get(Math.floor(u[c]), Math.floor(u[c + 1])) && o.set(c / 2, s)
                        } catch (t) {
                            throw new f.default
                        }
                    }
                    return o
                }, e
            }(a.default);
        e.default = s
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(0),
            o = function() {
                function t() {}
                return t.checkAndNudgePoints = function(t, e) {
                    for (var r = t.getWidth(), o = t.getHeight(), a = !0, i = 0; i < e.length && a; i += 2) {
                        var u = Math.floor(e[i]),
                            f = Math.floor(e[i + 1]);
                        if (u < -1 || r < u || f < -1 || o < f) throw new n.default;
                        a = !1, -1 === u ? a = !(e[i] = 0) : u === r && (e[i] = r - 1, a = !0), -1 === f ? a = !(e[i + 1] = 0) : f === o && (e[i + 1] = o - 1, a = !0)
                    }
                    for (a = !0, i = e.length - 2; 0 <= i && a; i -= 2) {
                        if (u = Math.floor(e[i]), f = Math.floor(e[i + 1]), u < -1 || r < u || f < -1 || o < f) throw new n.default;
                        a = !1, -1 === u ? a = !(e[i] = 0) : u === r && (e[i] = r - 1, a = !0), -1 === f ? a = !(e[i + 1] = 0) : f === o && (e[i + 1] = o - 1, a = !0)
                    }
                }, t
            }();
        e.default = o
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(3),
            o = r(13),
            a = r(0),
            i = function() {
                function t(e, r, n, o) {
                    this.image = e, this.height = e.getHeight(), this.width = e.getWidth(), null == r && (r = t.INIT_SIZE), null == n && (n = e.getWidth() / 2 | 0), null == o && (o = e.getHeight() / 2 | 0);
                    var i = r / 2 | 0;
                    if (this.leftInit = n - i, this.rightInit = n + i, this.upInit = o - i, this.downInit = o + i, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) throw new a.default
                }
                return t.prototype.detect = function() {
                    for (var t = this.leftInit, e = this.rightInit, r = this.upInit, n = this.downInit, o = !1, i = !0, u = !1, f = !1, s = !1, d = !1, l = !1, c = this.width, h = this.height; i;) {
                        for (var p = !(i = !1);
                            (p || !f) && e < c;)(p = this.containsBlackPoint(r, n, e, !1)) ? (e++, f = i = !0) : f || e++;
                        if (c <= e) {
                            o = !0;
                            break
                        }
                        for (var w = !0;
                            (w || !s) && n < h;)(w = this.containsBlackPoint(t, e, n, !0)) ? (n++, s = i = !0) : s || n++;
                        if (h <= n) {
                            o = !0;
                            break
                        }
                        for (var g = !0;
                            (g || !d) && 0 <= t;)(g = this.containsBlackPoint(r, n, t, !1)) ? (t--, d = i = !0) : d || t--;
                        if (t < 0) {
                            o = !0;
                            break
                        }
                        for (var _ = !0;
                            (_ || !l) && 0 <= r;)(_ = this.containsBlackPoint(t, e, r, !0)) ? (r--, l = i = !0) : l || r--;
                        if (r < 0) {
                            o = !0;
                            break
                        }
                        i && (u = !0)
                    }
                    if (o || !u) throw new a.default;
                    for (var v = e - t, y = null, E = 1; null === y && E < v; E++) y = this.getBlackPointOnSegment(t, n - E, t + E, n);
                    if (null == y) throw new a.default;
                    var A = null;
                    for (E = 1; null === A && E < v; E++) A = this.getBlackPointOnSegment(t, r + E, t + E, r);
                    if (null == A) throw new a.default;
                    var C = null;
                    for (E = 1; null === C && E < v; E++) C = this.getBlackPointOnSegment(e, r + E, e - E, r);
                    if (null == C) throw new a.default;
                    var m = null;
                    for (E = 1; null === m && E < v; E++) m = this.getBlackPointOnSegment(e, n - E, e - E, n);
                    if (null == m) throw new a.default;
                    return this.centerEdges(m, y, C, A)
                }, t.prototype.getBlackPointOnSegment = function(t, e, r, a) {
                    for (var i = o.default.round(o.default.distance(t, e, r, a)), u = (r - t) / i, f = (a - e) / i, s = this.image, d = 0; d < i; d++) {
                        var l = o.default.round(t + d * u),
                            c = o.default.round(e + d * f);
                        if (s.get(l, c)) return new n.default(l, c)
                    }
                    return null
                }, t.prototype.centerEdges = function(e, r, o, a) {
                    var i = e.getX(),
                        u = e.getY(),
                        f = r.getX(),
                        s = r.getY(),
                        d = o.getX(),
                        l = o.getY(),
                        c = a.getX(),
                        h = a.getY(),
                        p = t.CORR;
                    return i < this.width / 2 ? [new n.default(c - p, h + p), new n.default(f + p, s + p), new n.default(d - p, l - p), new n.default(i + p, u - p)] : [new n.default(c + p, h + p), new n.default(f + p, s - p), new n.default(d - p, l + p), new n.default(i - p, u - p)]
                }, t.prototype.containsBlackPoint = function(t, e, r, n) {
                    var o = this.image;
                    if (n) {
                        for (var a = t; a <= e; a++)
                            if (o.get(a, r)) return !0
                    } else
                        for (var i = t; i <= e; i++)
                            if (o.get(r, i)) return !0; return !1
                }, t.INIT_SIZE = 10, t.CORR = 1, t
            }();
        e.default = i
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(24),
            o = r(7),
            a = r(1),
            i = function() {
                function t(t) {
                    this.field = t, this.cachedGenerators = [], this.cachedGenerators.push(new n.default(t, Int32Array.from([1])))
                }
                return t.prototype.buildGenerator = function(t) {
                    var e = this.cachedGenerators;
                    if (t >= e.length)
                        for (var r = e[e.length - 1], o = this.field, a = e.length; a <= t; a++) {
                            var i = r.multiply(new n.default(o, Int32Array.from([1, o.exp(a - 1 + o.getGeneratorBase())])));
                            e.push(i), r = i
                        }
                    return e[t]
                }, t.prototype.encode = function(t, e) {
                    if (0 === e) throw new a.default("No error correction bytes");
                    var r = t.length - e;
                    if (r <= 0) throw new a.default("No data bytes provided");
                    var i = this.buildGenerator(e),
                        u = new Int32Array(r);
                    o.default.arraycopy(t, 0, u, 0, r);
                    for (var f = new n.default(this.field, u), s = (f = f.multiplyByMonomial(e, 1)).divide(i)[1].getCoefficients(), d = e - s.length, l = 0; l < d; l++) t[r + l] = 0;
                    o.default.arraycopy(s, 0, t, r + d, s.length)
                }, t
            }();
        e.default = i
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            o = function() {
                function t() {}
                return t.applyMaskPenaltyRule1 = function(e) {
                    return t.applyMaskPenaltyRule1Internal(e, !0) + t.applyMaskPenaltyRule1Internal(e, !1)
                }, t.applyMaskPenaltyRule2 = function(e) {
                    for (var r = 0, n = e.getArray(), o = e.getWidth(), a = e.getHeight(), i = 0; i < a - 1; i++)
                        for (var u = n[i], f = 0; f < o - 1; f++) {
                            var s = u[f];
                            s === u[f + 1] && s === n[i + 1][f] && s === n[i + 1][f + 1] && r++
                        }
                    return t.N2 * r
                }, t.applyMaskPenaltyRule3 = function(e) {
                    for (var r = 0, n = e.getArray(), o = e.getWidth(), a = e.getHeight(), i = 0; i < a; i++)
                        for (var u = 0; u < o; u++) {
                            var f = n[i];
                            u + 6 < o && 1 === f[u] && 0 === f[u + 1] && 1 === f[u + 2] && 1 === f[u + 3] && 1 === f[u + 4] && 0 === f[u + 5] && 1 === f[u + 6] && (t.isWhiteHorizontal(f, u - 4, u) || t.isWhiteHorizontal(f, u + 7, u + 11)) && r++, i + 6 < a && 1 === n[i][u] && 0 === n[i + 1][u] && 1 === n[i + 2][u] && 1 === n[i + 3][u] && 1 === n[i + 4][u] && 0 === n[i + 5][u] && 1 === n[i + 6][u] && (t.isWhiteVertical(n, u, i - 4, i) || t.isWhiteVertical(n, u, i + 7, i + 11)) && r++
                        }
                    return r * t.N3
                }, t.isWhiteHorizontal = function(t, e, r) {
                    e = Math.max(e, 0), r = Math.min(r, t.length);
                    for (var n = e; n < r; n++)
                        if (1 === t[n]) return !1;
                    return !0
                }, t.isWhiteVertical = function(t, e, r, n) {
                    r = Math.max(r, 0), n = Math.min(n, t.length);
                    for (var o = r; o < n; o++)
                        if (1 === t[o][e]) return !1;
                    return !0
                }, t.applyMaskPenaltyRule4 = function(e) {
                    for (var r = 0, n = e.getArray(), o = e.getWidth(), a = e.getHeight(), i = 0; i < a; i++)
                        for (var u = n[i], f = 0; f < o; f++) 1 === u[f] && r++;
                    var s = e.getHeight() * e.getWidth();
                    return Math.floor(10 * Math.abs(2 * r - s) / s) * t.N4
                }, t.getDataMaskBit = function(t, e, r) {
                    var o, a;
                    switch (t) {
                        case 0:
                            o = r + e & 1;
                            break;
                        case 1:
                            o = 1 & r;
                            break;
                        case 2:
                            o = e % 3;
                            break;
                        case 3:
                            o = (r + e) % 3;
                            break;
                        case 4:
                            o = Math.floor(r / 2) + Math.floor(e / 3) & 1;
                            break;
                        case 5:
                            o = (1 & (a = r * e)) + a % 3;
                            break;
                        case 6:
                            o = (1 & (a = r * e)) + a % 3 & 1;
                            break;
                        case 7:
                            o = (a = r * e) % 3 + (r + e & 1) & 1;
                            break;
                        default:
                            throw new n.default("Invalid mask pattern: " + t)
                    }
                    return 0 === o
                }, t.applyMaskPenaltyRule1Internal = function(e, r) {
                    for (var n = 0, o = r ? e.getHeight() : e.getWidth(), a = r ? e.getWidth() : e.getHeight(), i = e.getArray(), u = 0; u < o; u++) {
                        for (var f = 0, s = -1, d = 0; d < a; d++) {
                            var l = r ? i[u][d] : i[d][u];
                            l === s ? f++ : (5 <= f && (n += t.N1 + (f - 5)), f = 1, s = l)
                        }
                        5 <= f && (n += t.N1 + (f - 5))
                    }
                    return n
                }, t.N1 = 3, t.N2 = 3, t.N3 = 40, t.N4 = 10, t
            }();
        e.default = o
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(2),
            i = r(12),
            u = r(5),
            f = r(0),
            s = r(10),
            d = r(9),
            l = r(3),
            c = function(t) {
                function e(e, r) {
                    void 0 === e && (e = !1), void 0 === r && (r = !1);
                    var n = t.call(this) || this;
                    return n.usingCheckDigit = e, n.extendedMode = r, n.decodeRowResult = "", n.counters = new Array(9), n
                }
                return o(e, t), e.prototype.decodeRow = function(t, r, n) {
                    var o = this.counters;
                    o.fill(0), this.decodeRowResult = "";
                    var u, s, c, h = e.findAsteriskPattern(r, o),
                        p = r.getNextSet(h[1]),
                        w = r.getSize();
                    do {
                        e.recordPattern(r, p, o);
                        var g = e.toNarrowWidePattern(o);
                        if (g < 0) throw new f.default;
                        u = e.patternToChar(g), this.decodeRowResult += u, s = p;
                        for (var _ = 0, v = o; _ < v.length; _++) p += v[_];
                        p = r.getNextSet(p)
                    } while ("*" !== u);
                    this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
                    for (var y = 0, E = 0, A = o; E < A.length; E++) y += A[E];
                    if (p !== w && 2 * (p - s - y) < y) throw new f.default;
                    if (this.usingCheckDigit) {
                        for (var C = this.decodeRowResult.length - 1, m = 0, S = 0; S < C; S++) m += e.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(S));
                        if (this.decodeRowResult.charAt(C) !== e.ALPHABET_STRING.charAt(m % 43)) throw new i.default;
                        this.decodeRowResult = this.decodeRowResult.substring(0, C)
                    }
                    if (0 === this.decodeRowResult.length) throw new f.default;
                    c = this.extendedMode ? e.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
                    var I = (h[1] + h[0]) / 2,
                        O = s + y / 2;
                    return new d.default(c, null, 0, [new l.default(I, t), new l.default(O, t)], a.default.CODE_39, (new Date).getTime())
                }, e.findAsteriskPattern = function(t, r) {
                    for (var n = t.getSize(), o = t.getNextSet(0), a = 0, i = o, u = !1, s = r.length, d = o; d < n; d++)
                        if (t.get(d) !== u) r[a]++;
                        else {
                            if (a === s - 1) {
                                if (this.toNarrowWidePattern(r) === e.ASTERISK_ENCODING && t.isRange(Math.max(0, i - Math.floor((d - i) / 2)), i, !1)) return [i, d];
                                i += r[0] + r[1], r.copyWithin(0, 2, 2 + a - 1), r[a - 1] = 0, r[a] = 0, a--
                            } else a++;
                            r[a] = 1, u = !u
                        }
                    throw new f.default
                }, e.toNarrowWidePattern = function(t) {
                    var e, r = t.length,
                        n = 0;
                    do {
                        for (var o = 2147483647, a = 0, i = t; a < i.length; a++)(d = i[a]) < o && n < d && (o = d);
                        n = o;
                        for (var u = e = 0, f = 0, s = 0; s < r; s++) n < (d = t[s]) && (f |= 1 << r - 1 - s, e++, u += d);
                        if (3 === e) {
                            for (s = 0; s < r && 0 < e; s++) {
                                var d;
                                if (n < (d = t[s]) && (e--, u <= 2 * d)) return -1
                            }
                            return f
                        }
                    } while (3 < e);
                    return -1
                }, e.patternToChar = function(t) {
                    for (var r = 0; r < e.CHARACTER_ENCODINGS.length; r++)
                        if (e.CHARACTER_ENCODINGS[r] === t) return e.ALPHABET_STRING.charAt(r);
                    if (t === e.ASTERISK_ENCODING) return "*";
                    throw new f.default
                }, e.decodeExtended = function(t) {
                    for (var e = t.length, r = "", n = 0; n < e; n++) {
                        var o = t.charAt(n);
                        if ("+" === o || "$" === o || "%" === o || "/" === o) {
                            var a = t.charAt(n + 1),
                                i = "\0";
                            switch (o) {
                                case "+":
                                    if (!("A" <= a && a <= "Z")) throw new u.default;
                                    i = String.fromCharCode(a.charCodeAt(0) + 32);
                                    break;
                                case "$":
                                    if (!("A" <= a && a <= "Z")) throw new u.default;
                                    i = String.fromCharCode(a.charCodeAt(0) - 64);
                                    break;
                                case "%":
                                    if ("A" <= a && a <= "E") i = String.fromCharCode(a.charCodeAt(0) - 38);
                                    else if ("F" <= a && a <= "J") i = String.fromCharCode(a.charCodeAt(0) - 11);
                                    else if ("K" <= a && a <= "O") i = String.fromCharCode(a.charCodeAt(0) + 16);
                                    else if ("P" <= a && a <= "T") i = String.fromCharCode(a.charCodeAt(0) + 43);
                                    else if ("U" === a) i = "\0";
                                    else if ("V" === a) i = "@";
                                    else if ("W" === a) i = "`";
                                    else {
                                        if ("X" !== a && "Y" !== a && "Z" !== a) throw new u.default;
                                        i = ""
                                    }
                                    break;
                                case "/":
                                    if ("A" <= a && a <= "O") i = String.fromCharCode(a.charCodeAt(0) - 32);
                                    else {
                                        if ("Z" !== a) throw new u.default;
                                        i = ":"
                                    }
                            }
                            r += i, n++
                        } else r += o
                    }
                    return r
                }, e.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", e.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42], e.ASTERISK_ENCODING = 148, e
            }(s.default);
        e.default = c
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(2),
            i = r(4),
            u = r(9),
            f = r(3),
            s = r(10),
            d = r(0),
            l = r(5),
            c = r(12),
            h = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.findStartPattern = function(t) {
                    for (var r = t.getSize(), n = t.getNextSet(0), o = 0, a = [0, 0, 0, 0, 0, 0], i = n, u = !1, f = n; f < r; f++)
                        if (t.get(f) !== u) a[o]++;
                        else {
                            if (5 === o) {
                                for (var l = e.MAX_AVG_VARIANCE, c = -1, h = e.CODE_START_A; h <= e.CODE_START_C; h++) {
                                    var p = s.default.patternMatchVariance(a, e.CODE_PATTERNS[h], e.MAX_INDIVIDUAL_VARIANCE);
                                    p < l && (l = p, c = h)
                                }
                                if (0 <= c && t.isRange(Math.max(0, i - (f - i) / 2), i, !1)) return [i, f, c];
                                i += a[0] + a[1], a.splice(0, 2), a[o - 1] = 0, a[o] = 0, o--
                            } else o++;
                            a[o] = 1, u = !u
                        }
                    throw new d.default
                }, e.decodeCode = function(t, r, n) {
                    s.default.recordPattern(t, n, r);
                    for (var o = e.MAX_AVG_VARIANCE, a = -1, i = 0; i < e.CODE_PATTERNS.length; i++) {
                        var u = e.CODE_PATTERNS[i],
                            f = this.patternMatchVariance(r, u, e.MAX_INDIVIDUAL_VARIANCE);
                        f < o && (o = f, a = i)
                    }
                    if (0 <= a) return a;
                    throw new d.default
                }, e.prototype.decodeRow = function(t, r, n) {
                    var o, s = n && !0 === n.get(i.default.ASSUME_GS1),
                        h = e.findStartPattern(r),
                        p = h[2],
                        w = 0,
                        g = new Uint8Array(20);
                    switch (g[w++] = p) {
                        case e.CODE_START_A:
                            o = e.CODE_CODE_A;
                            break;
                        case e.CODE_START_B:
                            o = e.CODE_CODE_B;
                            break;
                        case e.CODE_START_C:
                            o = e.CODE_CODE_C;
                            break;
                        default:
                            throw new l.default
                    }
                    for (var _ = !1, v = !1, y = "", E = h[0], A = h[1], C = [0, 0, 0, 0, 0, 0], m = 0, S = 0, I = p, O = 0, T = !0, M = !1, b = !1; !_;) {
                        var N = v;
                        switch (v = !1, m = S, S = e.decodeCode(r, C, A), (g[w++] = S) !== e.CODE_STOP && (T = !0), S !== e.CODE_STOP && (I += ++O * S), E = A, A += C.reduce(function(t, e) {
                            return t + e
                        }, 0), S) {
                            case e.CODE_START_A:
                            case e.CODE_START_B:
                            case e.CODE_START_C:
                                throw new l.default
                        }
                        switch (o) {
                            case e.CODE_CODE_A:
                                if (S < 64) y += b === M ? String.fromCharCode(" ".charCodeAt(0) + S) : String.fromCharCode(" ".charCodeAt(0) + S + 128), b = !1;
                                else if (S < 96) y += b === M ? String.fromCharCode(S - 64) : String.fromCharCode(S + 64), b = !1;
                                else switch (S !== e.CODE_STOP && (T = !1), S) {
                                    case e.CODE_FNC_1:
                                        s && (0 === y.length ? y += "]C1" : y += String.fromCharCode(29));
                                        break;
                                    case e.CODE_FNC_2:
                                    case e.CODE_FNC_3:
                                        break;
                                    case e.CODE_FNC_4_A:
                                        b = !M && b ? !(M = !0) : !M || !b || (M = !1);
                                        break;
                                    case e.CODE_SHIFT:
                                        v = !0, o = e.CODE_CODE_B;
                                        break;
                                    case e.CODE_CODE_B:
                                        o = e.CODE_CODE_B;
                                        break;
                                    case e.CODE_CODE_C:
                                        o = e.CODE_CODE_C;
                                        break;
                                    case e.CODE_STOP:
                                        _ = !0
                                }
                                break;
                            case e.CODE_CODE_B:
                                if (S < 96) y += b === M ? String.fromCharCode(" ".charCodeAt(0) + S) : String.fromCharCode(" ".charCodeAt(0) + S + 128), b = !1;
                                else switch (S !== e.CODE_STOP && (T = !1), S) {
                                    case e.CODE_FNC_1:
                                        s && (0 === y.length ? y += "]C1" : y += String.fromCharCode(29));
                                        break;
                                    case e.CODE_FNC_2:
                                    case e.CODE_FNC_3:
                                        break;
                                    case e.CODE_FNC_4_B:
                                        b = !M && b ? !(M = !0) : !M || !b || (M = !1);
                                        break;
                                    case e.CODE_SHIFT:
                                        v = !0, o = e.CODE_CODE_A;
                                        break;
                                    case e.CODE_CODE_A:
                                        o = e.CODE_CODE_A;
                                        break;
                                    case e.CODE_CODE_C:
                                        o = e.CODE_CODE_C;
                                        break;
                                    case e.CODE_STOP:
                                        _ = !0
                                }
                                break;
                            case e.CODE_CODE_C:
                                if (S < 100) S < 10 && (y += "0"), y += S;
                                else switch (S !== e.CODE_STOP && (T = !1), S) {
                                    case e.CODE_FNC_1:
                                        s && (0 === y.length ? y += "]C1" : y += String.fromCharCode(29));
                                        break;
                                    case e.CODE_CODE_A:
                                        o = e.CODE_CODE_A;
                                        break;
                                    case e.CODE_CODE_B:
                                        o = e.CODE_CODE_B;
                                        break;
                                    case e.CODE_STOP:
                                        _ = !0
                                }
                        }
                        N && (o = o === e.CODE_CODE_A ? e.CODE_CODE_B : e.CODE_CODE_A)
                    }
                    var R = A - E;
                    if (A = r.getNextUnset(A), !r.isRange(A, Math.min(r.getSize(), A + (A - E) / 2), !1)) throw new d.default;
                    if ((I -= O * m) % 103 !== m) throw new c.default;
                    var P = y.length;
                    if (0 === P) throw new d.default;
                    0 < P && T && (y = o === e.CODE_CODE_C ? y.substring(0, P - 2) : y.substring(0, P - 1));
                    for (var D = (h[1] + h[0]) / 2, B = E + R / 2, k = g.length, L = new Uint8Array(k), F = 0; F < k; F++) L[F] = g[F];
                    var U = [new f.default(D, t), new f.default(B, t)];
                    return new u.default(y, L, 0, U, a.default.CODE_128, (new Date).getTime())
                }, e.CODE_PATTERNS = [
                    [2, 1, 2, 2, 2, 2],
                    [2, 2, 2, 1, 2, 2],
                    [2, 2, 2, 2, 2, 1],
                    [1, 2, 1, 2, 2, 3],
                    [1, 2, 1, 3, 2, 2],
                    [1, 3, 1, 2, 2, 2],
                    [1, 2, 2, 2, 1, 3],
                    [1, 2, 2, 3, 1, 2],
                    [1, 3, 2, 2, 1, 2],
                    [2, 2, 1, 2, 1, 3],
                    [2, 2, 1, 3, 1, 2],
                    [2, 3, 1, 2, 1, 2],
                    [1, 1, 2, 2, 3, 2],
                    [1, 2, 2, 1, 3, 2],
                    [1, 2, 2, 2, 3, 1],
                    [1, 1, 3, 2, 2, 2],
                    [1, 2, 3, 1, 2, 2],
                    [1, 2, 3, 2, 2, 1],
                    [2, 2, 3, 2, 1, 1],
                    [2, 2, 1, 1, 3, 2],
                    [2, 2, 1, 2, 3, 1],
                    [2, 1, 3, 2, 1, 2],
                    [2, 2, 3, 1, 1, 2],
                    [3, 1, 2, 1, 3, 1],
                    [3, 1, 1, 2, 2, 2],
                    [3, 2, 1, 1, 2, 2],
                    [3, 2, 1, 2, 2, 1],
                    [3, 1, 2, 2, 1, 2],
                    [3, 2, 2, 1, 1, 2],
                    [3, 2, 2, 2, 1, 1],
                    [2, 1, 2, 1, 2, 3],
                    [2, 1, 2, 3, 2, 1],
                    [2, 3, 2, 1, 2, 1],
                    [1, 1, 1, 3, 2, 3],
                    [1, 3, 1, 1, 2, 3],
                    [1, 3, 1, 3, 2, 1],
                    [1, 1, 2, 3, 1, 3],
                    [1, 3, 2, 1, 1, 3],
                    [1, 3, 2, 3, 1, 1],
                    [2, 1, 1, 3, 1, 3],
                    [2, 3, 1, 1, 1, 3],
                    [2, 3, 1, 3, 1, 1],
                    [1, 1, 2, 1, 3, 3],
                    [1, 1, 2, 3, 3, 1],
                    [1, 3, 2, 1, 3, 1],
                    [1, 1, 3, 1, 2, 3],
                    [1, 1, 3, 3, 2, 1],
                    [1, 3, 3, 1, 2, 1],
                    [3, 1, 3, 1, 2, 1],
                    [2, 1, 1, 3, 3, 1],
                    [2, 3, 1, 1, 3, 1],
                    [2, 1, 3, 1, 1, 3],
                    [2, 1, 3, 3, 1, 1],
                    [2, 1, 3, 1, 3, 1],
                    [3, 1, 1, 1, 2, 3],
                    [3, 1, 1, 3, 2, 1],
                    [3, 3, 1, 1, 2, 1],
                    [3, 1, 2, 1, 1, 3],
                    [3, 1, 2, 3, 1, 1],
                    [3, 3, 2, 1, 1, 1],
                    [3, 1, 4, 1, 1, 1],
                    [2, 2, 1, 4, 1, 1],
                    [4, 3, 1, 1, 1, 1],
                    [1, 1, 1, 2, 2, 4],
                    [1, 1, 1, 4, 2, 2],
                    [1, 2, 1, 1, 2, 4],
                    [1, 2, 1, 4, 2, 1],
                    [1, 4, 1, 1, 2, 2],
                    [1, 4, 1, 2, 2, 1],
                    [1, 1, 2, 2, 1, 4],
                    [1, 1, 2, 4, 1, 2],
                    [1, 2, 2, 1, 1, 4],
                    [1, 2, 2, 4, 1, 1],
                    [1, 4, 2, 1, 1, 2],
                    [1, 4, 2, 2, 1, 1],
                    [2, 4, 1, 2, 1, 1],
                    [2, 2, 1, 1, 1, 4],
                    [4, 1, 3, 1, 1, 1],
                    [2, 4, 1, 1, 1, 2],
                    [1, 3, 4, 1, 1, 1],
                    [1, 1, 1, 2, 4, 2],
                    [1, 2, 1, 1, 4, 2],
                    [1, 2, 1, 2, 4, 1],
                    [1, 1, 4, 2, 1, 2],
                    [1, 2, 4, 1, 1, 2],
                    [1, 2, 4, 2, 1, 1],
                    [4, 1, 1, 2, 1, 2],
                    [4, 2, 1, 1, 1, 2],
                    [4, 2, 1, 2, 1, 1],
                    [2, 1, 2, 1, 4, 1],
                    [2, 1, 4, 1, 2, 1],
                    [4, 1, 2, 1, 2, 1],
                    [1, 1, 1, 1, 4, 3],
                    [1, 1, 1, 3, 4, 1],
                    [1, 3, 1, 1, 4, 1],
                    [1, 1, 4, 1, 1, 3],
                    [1, 1, 4, 3, 1, 1],
                    [4, 1, 1, 1, 1, 3],
                    [4, 1, 1, 3, 1, 1],
                    [1, 1, 3, 1, 4, 1],
                    [1, 1, 4, 1, 3, 1],
                    [3, 1, 1, 1, 4, 1],
                    [4, 1, 1, 1, 3, 1],
                    [2, 1, 1, 4, 1, 2],
                    [2, 1, 1, 2, 1, 4],
                    [2, 1, 1, 2, 3, 2],
                    [2, 3, 3, 1, 1, 1, 2]
                ], e.MAX_AVG_VARIANCE = .25, e.MAX_INDIVIDUAL_VARIANCE = .7, e.CODE_SHIFT = 98, e.CODE_CODE_C = 99, e.CODE_CODE_B = 100, e.CODE_CODE_A = 101, e.CODE_FNC_1 = 102, e.CODE_FNC_2 = 97, e.CODE_FNC_3 = 96, e.CODE_FNC_4_A = 101, e.CODE_FNC_4_B = 100, e.CODE_START_A = 103, e.CODE_START_B = 104, e.CODE_START_C = 105, e.CODE_STOP = 106, e
            }(s.default);
        e.default = h
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(100),
            i = r(101),
            u = r(9),
            f = r(4),
            s = r(0),
            d = r(11),
            l = r(2),
            c = r(3),
            h = r(102),
            p = r(65),
            w = r(13),
            g = r(103),
            _ = r(7),
            v = r(10),
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.possibleLeftPairs = [], e.possibleRightPairs = [], e
                }
                return o(e, t), e.prototype.decodeRow = function(t, r, n) {
                    var o = this.decodePair(r, !1, t, n);
                    e.addOrTally(this.possibleLeftPairs, o), r.reverse();
                    var a = this.decodePair(r, !0, t, n);
                    e.addOrTally(this.possibleRightPairs, a), r.reverse();
                    for (var i = 0, u = this.possibleLeftPairs; i < u.length; i++) {
                        var f = u[i];
                        if (1 < f.getCount())
                            for (var d = 0, l = this.possibleRightPairs; d < l.length; d++) {
                                var c = l[d];
                                if (1 < c.getCount() && e.checkChecksum(f, c)) return e.constructResult(f, c)
                            }
                    }
                    throw new s.default
                }, e.addOrTally = function(t, e) {
                    if (null != e) {
                        for (var r = !1, n = 0, o = t; n < o.length; n++) {
                            var a = o[n];
                            if (a.getValue() === e.getValue()) {
                                a.incrementCount(), r = !0;
                                break
                            }
                        }
                        r || t.push(e)
                    }
                }, e.prototype.reset = function() {
                    this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0
                }, e.constructResult = function(t, e) {
                    for (var r = 4537077 * t.getValue() + e.getValue(), n = new String(r).toString(), o = new d.default, a = 13 - n.length; 0 < a; a--) o.append("0");
                    o.append(n);
                    var i = 0;
                    for (a = 0; a < 13; a++) {
                        var f = o.charAt(a).charCodeAt(0) - "0".charCodeAt(0);
                        i += 0 == (1 & a) ? 3 * f : f
                    }
                    10 == (i = 10 - i % 10) && (i = 0), o.append(i.toString());
                    var s = t.getFinderPattern().getResultPoints(),
                        c = e.getFinderPattern().getResultPoints();
                    return new u.default(o.toString(), null, 0, [s[0], s[1], c[0], c[1]], l.default.RSS_14, (new Date).getTime())
                }, e.checkChecksum = function(t, e) {
                    var r = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79,
                        n = 9 * t.getFinderPattern().getValue() + e.getFinderPattern().getValue();
                    return 72 < n && n--, 8 < n && n--, r === n
                }, e.prototype.decodePair = function(t, e, r, n) {
                    try {
                        var o = this.findFinderPattern(t, e),
                            a = this.parseFoundFinderPattern(t, r, e, o),
                            u = null == n ? null : n.get(f.default.NEED_RESULT_POINT_CALLBACK);
                        if (null != u) {
                            var s = (o[0] + o[1]) / 2;
                            e && (s = t.getSize() - 1 - s), u.foundPossibleResultPoint(new c.default(s, r))
                        }
                        var d = this.decodeDataCharacter(t, a, !0),
                            l = this.decodeDataCharacter(t, a, !1);
                        return new i.default(1597 * d.getValue() + l.getValue(), d.getChecksumPortion() + 4 * l.getChecksumPortion(), a)
                    } catch (t) {
                        return null
                    }
                }, e.prototype.decodeDataCharacter = function(t, r, n) {
                    for (var o = this.getDataCharacterCounters(), a = 0; a < o.length; a++) o[a] = 0;
                    if (n) v.default.recordPatternInReverse(t, r.getStartEnd()[0], o);
                    else {
                        v.default.recordPattern(t, r.getStartEnd()[1] + 1, o);
                        for (var i = 0, u = o.length - 1; i < u; i++, u--) {
                            var f = o[i];
                            o[i] = o[u], o[u] = f
                        }
                    }
                    var d = n ? 16 : 15,
                        l = w.default.sum(new Int32Array(o)) / d,
                        c = this.getOddCounts(),
                        h = this.getEvenCounts(),
                        _ = this.getOddRoundingErrors(),
                        y = this.getEvenRoundingErrors();
                    for (i = 0; i < o.length; i++) {
                        var E = o[i] / l,
                            A = Math.floor(E + .5);
                        A < 1 ? A = 1 : 8 < A && (A = 8);
                        var C = Math.floor(i / 2);
                        0 == (1 & i) ? (c[C] = A, _[C] = E - A) : (h[C] = A, y[C] = E - A)
                    }
                    this.adjustOddEvenCounts(n, d);
                    var m = 0,
                        S = 0;
                    for (i = c.length - 1; 0 <= i; i--) S *= 9, S += c[i], m += c[i];
                    var I = 0,
                        O = 0;
                    for (i = h.length - 1; 0 <= i; i--) I *= 9, I += h[i], O += h[i];
                    var T = S + 3 * I;
                    if (n) {
                        if (0 != (1 & m) || 12 < m || m < 4) throw new s.default;
                        var M = 9 - (B = e.OUTSIDE_ODD_WIDEST[D = (12 - m) / 2]),
                            b = g.default.getRSSvalue(c, B, !1),
                            N = g.default.getRSSvalue(h, M, !0),
                            R = e.OUTSIDE_EVEN_TOTAL_SUBSET[D],
                            P = e.OUTSIDE_GSUM[D];
                        return new p.default(b * R + N + P, T)
                    }
                    if (0 != (1 & O) || 10 < O || O < 4) throw new s.default;
                    M = 9 - (B = e.INSIDE_ODD_WIDEST[D = (10 - O) / 2]), b = g.default.getRSSvalue(c, B, !0), N = g.default.getRSSvalue(h, M, !1);
                    var D, B, k = e.INSIDE_ODD_TOTAL_SUBSET[D];
                    return P = e.INSIDE_GSUM[D], new p.default(N * k + b + P, T)
                }, e.prototype.findFinderPattern = function(t, e) {
                    var r = this.getDecodeFinderCounters();
                    r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 0;
                    for (var n = t.getSize(), o = !1, i = 0; i < n && e !== (o = !t.get(i));) i++;
                    for (var u = 0, f = i, d = i; d < n; d++)
                        if (t.get(d) !== o) r[u]++;
                        else {
                            if (3 === u) {
                                if (a.default.isFinderPattern(r)) return [f, d];
                                f += r[0] + r[1], r[0] = r[2], r[1] = r[3], r[2] = 0, r[3] = 0, u--
                            } else u++;
                            r[u] = 1, o = !o
                        }
                    throw new s.default
                }, e.prototype.parseFoundFinderPattern = function(t, r, n, o) {
                    for (var a = t.get(o[0]), i = o[0] - 1; 0 <= i && a !== t.get(i);) i--;
                    i++;
                    var u = o[0] - i,
                        f = this.getDecodeFinderCounters(),
                        s = new Array(f.length);
                    _.default.arraycopy(f, 0, s, 1, f.length - 1), s[0] = u;
                    var d = this.parseFinderValue(s, e.FINDER_PATTERNS),
                        l = i,
                        c = o[1];
                    return n && (l = t.getSize() - 1 - l, c = t.getSize() - 1 - c), new h.default(d, [i, o[1]], l, c, r)
                }, e.prototype.adjustOddEvenCounts = function(t, e) {
                    var r = w.default.sum(new Int32Array(this.getOddCounts())),
                        n = w.default.sum(new Int32Array(this.getEvenCounts())),
                        o = !1,
                        i = !1,
                        u = !1,
                        f = !1;
                    t ? (12 < r ? i = !0 : r < 4 && (o = !0), 12 < n ? f = !0 : n < 4 && (u = !0)) : (11 < r ? i = !0 : r < 5 && (o = !0), 10 < n ? f = !0 : n < 4 && (u = !0));
                    var d = r + n - e,
                        l = (1 & r) == (t ? 1 : 0),
                        c = 1 == (1 & n);
                    if (1 === d)
                        if (l) {
                            if (c) throw new s.default;
                            i = !0
                        } else {
                            if (!c) throw new s.default;
                            f = !0
                        } else if (-1 === d)
                        if (l) {
                            if (c) throw new s.default;
                            o = !0
                        } else {
                            if (!c) throw new s.default;
                            u = !0
                        } else {
                        if (0 !== d) throw new s.default;
                        if (l) {
                            if (!c) throw new s.default;
                            r < n ? f = o = !0 : u = i = !0
                        } else if (c) throw new s.default
                    }
                    if (o) {
                        if (i) throw new s.default;
                        a.default.increment(this.getOddCounts(), this.getOddRoundingErrors())
                    }
                    if (i && a.default.decrement(this.getOddCounts(), this.getOddRoundingErrors()), u) {
                        if (f) throw new s.default;
                        a.default.increment(this.getEvenCounts(), this.getOddRoundingErrors())
                    }
                    f && a.default.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
                }, e.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], e.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], e.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715], e.INSIDE_GSUM = [0, 336, 1036, 1516], e.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], e.INSIDE_ODD_WIDEST = [2, 4, 6, 8], e.FINDER_PATTERNS = [
                    [3, 8, 2, 1],
                    [3, 5, 5, 1],
                    [3, 3, 7, 1],
                    [3, 1, 9, 1],
                    [2, 7, 4, 1],
                    [2, 5, 6, 1],
                    [2, 3, 8, 1],
                    [1, 5, 7, 1],
                    [1, 3, 9, 1]
                ], e
            }(a.default);
        e.default = y
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                this.value = t, this.checksumPortion = e
            }
            return t.prototype.getValue = function() {
                return this.value
            }, t.prototype.getChecksumPortion = function() {
                return this.checksumPortion
            }, t.prototype.toString = function() {
                return this.value + "(" + this.checksumPortion + ")"
            }, t.prototype.equals = function(e) {
                if (!(e instanceof t)) return !1;
                var r = e;
                return this.value === r.value && this.checksumPortion === r.checksumPortion
            }, t.prototype.hashCode = function() {
                return this.value ^ this.checksumPortion
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(2),
            i = r(4),
            u = r(9),
            f = r(3),
            s = r(10),
            d = r(11),
            l = r(7),
            c = r(5),
            h = r(0),
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.narrowLineWidth = -1, e
                }
                return o(e, t), e.prototype.decodeRow = function(t, r, n) {
                    var o = this.decodeStart(r),
                        s = this.decodeEnd(r),
                        l = new d.default;
                    e.decodeMiddle(r, o[1], s[0], l);
                    var h = l.toString(),
                        p = null;
                    null != n && (p = n.get(i.default.ALLOWED_LENGTHS)), null == p && (p = e.DEFAULT_ALLOWED_LENGTHS);
                    for (var w = h.length, g = !1, _ = 0, v = 0, y = p; v < y.length; v++) {
                        var E = y[v];
                        if (w === E) {
                            g = !0;
                            break
                        }
                        _ < E && (_ = E)
                    }
                    if (!g && _ < w && (g = !0), !g) throw new c.default;
                    var A = [new f.default(o[1], t), new f.default(s[0], t)];
                    return new u.default(h, null, 0, A, a.default.ITF, (new Date).getTime())
                }, e.decodeMiddle = function(t, r, n, o) {
                    var a = new Array(10),
                        i = new Array(5),
                        u = new Array(5);
                    for (a.fill(0), i.fill(0), u.fill(0); r < n;) {
                        s.default.recordPattern(t, r, a);
                        for (var f = 0; f < 5; f++) {
                            var d = 2 * f;
                            i[f] = a[d], u[f] = a[d + 1]
                        }
                        var l = e.decodeDigit(i);
                        o.append(l.toString()), l = this.decodeDigit(u), o.append(l.toString()), a.forEach(function(t) {
                            r += t
                        })
                    }
                }, e.prototype.decodeStart = function(t) {
                    var r = e.skipWhiteSpace(t),
                        n = e.findGuardPattern(t, r, e.START_PATTERN);
                    return this.narrowLineWidth = (n[1] - n[0]) / 4, this.validateQuietZone(t, n[0]), n
                }, e.prototype.validateQuietZone = function(t, e) {
                    var r = 10 * this.narrowLineWidth;
                    r = r < e ? r : e;
                    for (var n = e - 1; 0 < r && 0 <= n && !t.get(n); n--) r--;
                    if (0 !== r) throw new h.default
                }, e.skipWhiteSpace = function(t) {
                    var e = t.getSize(),
                        r = t.getNextSet(0);
                    if (r === e) throw new h.default;
                    return r
                }, e.prototype.decodeEnd = function(t) {
                    t.reverse();
                    try {
                        var r = e.skipWhiteSpace(t),
                            n = void 0;
                        try {
                            n = e.findGuardPattern(t, r, e.END_PATTERN_REVERSED[0])
                        } catch (o) {
                            n = e.findGuardPattern(t, r, e.END_PATTERN_REVERSED[1])
                        }
                        this.validateQuietZone(t, n[0]);
                        var o = n[0];
                        return n[0] = t.getSize() - n[1], n[1] = t.getSize() - o, n
                    } finally {
                        t.reverse()
                    }
                }, e.findGuardPattern = function(t, r, n) {
                    var o = n.length,
                        a = new Array(o),
                        i = t.getSize(),
                        u = !1,
                        f = 0,
                        d = r;
                    a.fill(0);
                    for (var c = r; c < i; c++)
                        if (t.get(c) !== u) a[f]++;
                        else {
                            if (f === o - 1) {
                                if (s.default.patternMatchVariance(a, n, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) return [d, c];
                                d += a[0] + a[1], l.default.arraycopy(a, 2, a, 0, f - 1), a[f - 1] = 0, a[f] = 0, f--
                            } else f++;
                            a[f] = 1, u = !u
                        }
                    throw new h.default
                }, e.decodeDigit = function(t) {
                    for (var r = e.MAX_AVG_VARIANCE, n = -1, o = e.PATTERNS.length, a = 0; a < o; a++) {
                        var i = e.PATTERNS[a],
                            u = s.default.patternMatchVariance(t, i, e.MAX_INDIVIDUAL_VARIANCE);
                        u < r ? (r = u, n = a) : u === r && (n = -1)
                    }
                    if (0 <= n) return n % 10;
                    throw new h.default
                }, e.W = 3, e.w = 2, e.N = 1, e.PATTERNS = [
                    [1, 1, 2, 2, 1],
                    [2, 1, 1, 1, 2],
                    [1, 2, 1, 1, 2],
                    [2, 2, 1, 1, 1],
                    [1, 1, 2, 1, 2],
                    [2, 1, 2, 1, 1],
                    [1, 2, 2, 1, 1],
                    [1, 1, 1, 2, 2],
                    [2, 1, 1, 2, 1],
                    [1, 2, 1, 2, 1],
                    [1, 1, 3, 3, 1],
                    [3, 1, 1, 1, 3],
                    [1, 3, 1, 1, 3],
                    [3, 3, 1, 1, 1],
                    [1, 1, 3, 1, 3],
                    [3, 1, 3, 1, 1],
                    [1, 3, 3, 1, 1],
                    [1, 1, 1, 3, 3],
                    [3, 1, 1, 3, 1],
                    [1, 3, 1, 3, 1]
                ], e.MAX_AVG_VARIANCE = .38, e.MAX_INDIVIDUAL_VARIANCE = .5, e.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], e.START_PATTERN = [1, 1, 1, 1], e.END_PATTERN_REVERSED = [
                    [1, 1, 2],
                    [1, 1, 3]
                ], e
            }(s.default);
        e.default = p
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(2),
            i = r(22),
            u = r(0),
            f = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.decodeMiddleCounters = [0, 0, 0, 0], e
                }
                return o(e, t), e.prototype.decodeMiddle = function(t, r, n) {
                    var o = this.decodeMiddleCounters;
                    o[0] = 0, o[1] = 0, o[2] = 0, o[3] = 0;
                    for (var a = t.getSize(), u = r[1], f = 0, s = 0; s < 6 && u < a; s++) {
                        var d = i.default.decodeDigit(t, o, u, i.default.L_AND_G_PATTERNS);
                        n += String.fromCharCode("0".charCodeAt(0) + d % 10);
                        for (var l = 0, c = o; l < c.length; l++) u += c[l];
                        10 <= d && (f |= 1 << 5 - s)
                    }
                    for (n = e.determineFirstDigit(n, f), u = i.default.findGuardPattern(t, u, !0, i.default.MIDDLE_PATTERN, new Array(i.default.MIDDLE_PATTERN.length).fill(0))[1], s = 0; s < 6 && u < a; s++) {
                        d = i.default.decodeDigit(t, o, u, i.default.L_PATTERNS), n += String.fromCharCode("0".charCodeAt(0) + d);
                        for (var h = 0, p = o; h < p.length; h++) u += p[h]
                    }
                    return {
                        rowOffset: u,
                        resultString: n
                    }
                }, e.prototype.getBarcodeFormat = function() {
                    return a.default.EAN_13
                }, e.determineFirstDigit = function(t, e) {
                    for (var r = 0; r < 10; r++)
                        if (e === this.FIRST_DIGIT_ENCODINGS[r]) return String.fromCharCode("0".charCodeAt(0) + r) + t;
                    throw new u.default
                }, e.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26], e
            }(i.default);
        e.default = f
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(4),
            o = r(2),
            a = r(30),
            i = r(43),
            u = r(39),
            f = r(0),
            s = r(69),
            d = function() {
                function t() {}
                return t.prototype.decode = function(t, e) {
                    return this.setHints(e), this.decodeInternal(t)
                }, t.prototype.decodeWithState = function(t) {
                    return null !== this.readers && void 0 !== this.readers || this.setHints(null), this.decodeInternal(t)
                }, t.prototype.setHints = function(t) {
                    var e = null != (this.hints = t) && void 0 !== t.get(n.default.TRY_HARDER),
                        r = null == t ? null : t.get(n.default.POSSIBLE_FORMATS),
                        f = new Array;
                    if (null != r) {
                        var s = r.some(function(t) {
                            return t === o.default.UPC_A || t === o.default.UPC_E || t === o.default.EAN_13 || t === o.default.EAN_8 || t === o.default.CODABAR || t === o.default.CODE_39 || t === o.default.CODE_93 || t === o.default.CODE_128 || t === o.default.ITF || t === o.default.RSS_14 || t === o.default.RSS_EXPANDED
                        });
                        s && !e && f.push(new i.default(t)), r.includes(o.default.QR_CODE) && f.push(new a.default), r.includes(o.default.DATA_MATRIX) && f.push(new u.default), s && e && f.push(new i.default(t))
                    }
                    0 === f.length && (e || f.push(new i.default(t)), f.push(new a.default), f.push(new u.default), e && f.push(new i.default(t))), this.readers = f
                }, t.prototype.reset = function() {
                    if (null !== this.readers)
                        for (var t = 0, e = this.readers; t < e.length; t++) e[t].reset()
                }, t.prototype.decodeInternal = function(t) {
                    if (null === this.readers) throw new s.default("No readers where selected, nothing can be read.");
                    for (var e = 0, r = this.readers; e < r.length; e++) {
                        var n = r[e];
                        try {
                            return n.decode(t, this.hints)
                        } catch (t) {
                            if (t instanceof s.default) continue
                        }
                    }
                    throw new f.default("No MultiFormat Readers were able to detect the code.")
                }, t
            }();
        e.default = d
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(r(6).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(2),
            o = r(26),
            a = r(8),
            i = r(25),
            u = r(40),
            f = r(1),
            s = r(20),
            d = function() {
                function t() {}
                return t.prototype.encode = function(e, r, a, s, d) {
                    if (0 === e.length) throw new f.default("Found empty contents");
                    if (r !== n.default.QR_CODE) throw new f.default("Can only encode QR_CODE, but got " + r);
                    if (a < 0 || s < 0) throw new f.default("Requested dimensions are too small: " + a + "x" + s);
                    var l = i.default.L,
                        c = t.QUIET_ZONE_SIZE;
                    null !== d && (void 0 !== d.get(o.default.ERROR_CORRECTION) && (l = i.default.fromString(d.get(o.default.ERROR_CORRECTION).toString())), void 0 !== d.get(o.default.MARGIN) && (c = Number.parseInt(d.get(o.default.MARGIN).toString(), 10)));
                    var h = u.default.encode(e, l, d);
                    return t.renderResult(h, a, s, c)
                }, t.renderResult = function(t, e, r, n) {
                    var o = t.getMatrix();
                    if (null === o) throw new s.default;
                    for (var i = o.getWidth(), u = o.getHeight(), f = i + 2 * n, d = u + 2 * n, l = Math.max(e, f), c = Math.max(r, d), h = Math.min(Math.floor(l / f), Math.floor(c / d)), p = Math.floor((l - i * h) / 2), w = Math.floor((c - u * h) / 2), g = new a.default(l, c), _ = 0, v = w; _ < u; _++, v += h)
                        for (var y = 0, E = p; y < i; y++, E += h) 1 === o.get(y, _) && g.setRegion(E, v, h, h);
                    return g
                }, t.QUIET_ZONE_SIZE = 4, t
            }();
        e.default = d
    }, function(t, e, r) {
        t.exports = r(44)
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(17),
            i = r(30),
            u = function(t) {
                function e(e) {
                    return void 0 === e && (e = 500), t.call(this, new i.default, e) || this
                }
                return o(e, t), e
            }(a.BrowserCodeReader);
        e.BrowserQRCodeReader = u
    }, function(t, e, r) {
        ! function(t) {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            };

            function r(t, e) {
                void 0 === e && (e = t.constructor);
                var r = Error.captureStackTrace;
                r && r(t, e)
            }
            var n = function(t) {
                function n(e) {
                    var n, o, a, i = this.constructor,
                        u = t.call(this, e) || this;
                    return u.name = i.name, n = u, o = i.prototype, (a = Object.setPrototypeOf) ? a(n, o) : n.__proto__ = o, r(u), u
                }
                return function(t, r) {
                    function n() {
                        this.constructor = t
                    }
                    e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                }(n, t), n
            }(Error);
            t.CustomError = n, t.customErrorFactory = function(t, e) {
                function n() {
                    for (var o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
                    if (!(this instanceof n)) return new(n.bind.apply(n, [void 0].concat(o)));
                    e.apply(this, o), t.apply(this, o), this.name = t.name || e.name, r(this, n)
                }
                return void 0 === e && (e = Error), Object.defineProperties(n, {
                    prototype: {
                        value: Object.create(e.prototype, {
                            constructor: {
                                value: n,
                                writable: !0,
                                configurable: !0
                            }
                        })
                    }
                })
            }
        }(e)
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.floatToIntBits = function(t) {
                return t
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(8),
            o = r(16),
            a = r(31),
            i = r(76),
            u = r(54),
            f = r(80),
            s = r(81),
            d = r(12),
            l = function() {
                function t() {
                    this.rsDecoder = new a.default(o.default.QR_CODE_FIELD_256)
                }
                return t.prototype.decodeBooleanArray = function(t, e) {
                    return this.decodeBitMatrix(n.default.parseFromBooleanArray(t), e)
                }, t.prototype.decodeBitMatrix = function(t, e) {
                    var r = new i.default(t),
                        n = null;
                    try {
                        return this.decodeBitMatrixParser(r, e)
                    } catch (t) {
                        n = t
                    }
                    try {
                        r.remask(), r.setMirror(!0), r.readVersion(), r.readFormatInformation(), r.mirror();
                        var o = this.decodeBitMatrixParser(r, e);
                        return o.setOther(new u.default(!0)), o
                    } catch (t) {
                        if (null !== n) throw n;
                        throw t
                    }
                }, t.prototype.decodeBitMatrixParser = function(t, e) {
                    for (var r = t.readVersion(), n = t.readFormatInformation().getErrorCorrectionLevel(), o = t.readCodewords(), a = f.default.getDataBlocks(o, r, n), i = 0, u = 0, d = a; u < d.length; u++) i += (w = d[u]).getNumDataCodewords();
                    for (var l = new Uint8Array(i), c = 0, h = 0, p = a; h < p.length; h++) {
                        var w, g = (w = p[h]).getCodewords(),
                            _ = w.getNumDataCodewords();
                        this.correctErrors(g, _);
                        for (var v = 0; v < _; v++) l[c++] = g[v]
                    }
                    return s.default.decode(l, r, n, e)
                }, t.prototype.correctErrors = function(t, e) {
                    t.length;
                    var r = new Int32Array(t);
                    try {
                        this.rsDecoder.decode(r, t.length - e)
                    } catch (t) {
                        throw new d.default
                    }
                    for (var n = 0; n < e; n++) t[n] = r[n]
                }, t
            }();
        e.default = l
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(32),
            o = r(53),
            a = r(79),
            i = r(5),
            u = function() {
                function t(t) {
                    var e = t.getHeight();
                    if (e < 21 || 1 != (3 & e)) throw new i.default;
                    this.bitMatrix = t
                }
                return t.prototype.readFormatInformation = function() {
                    if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo) return this.parsedFormatInfo;
                    for (var t = 0, e = 0; e < 6; e++) t = this.copyBit(e, 8, t);
                    t = this.copyBit(7, 8, t), t = this.copyBit(8, 8, t), t = this.copyBit(8, 7, t);
                    for (var r = 5; 0 <= r; r--) t = this.copyBit(8, r, t);
                    var n = this.bitMatrix.getHeight(),
                        a = 0,
                        u = n - 7;
                    for (r = n - 1; u <= r; r--) a = this.copyBit(8, r, a);
                    for (e = n - 8; e < n; e++) a = this.copyBit(e, 8, a);
                    if (this.parsedFormatInfo = o.default.decodeFormatInformation(t, a), null !== this.parsedFormatInfo) return this.parsedFormatInfo;
                    throw new i.default
                }, t.prototype.readVersion = function() {
                    if (null !== this.parsedVersion && void 0 !== this.parsedVersion) return this.parsedVersion;
                    var t = this.bitMatrix.getHeight(),
                        e = Math.floor((t - 17) / 4);
                    if (e <= 6) return n.default.getVersionForNumber(e);
                    for (var r = 0, o = t - 11, a = 5; 0 <= a; a--)
                        for (var u = t - 9; o <= u; u--) r = this.copyBit(u, a, r);
                    var f = n.default.decodeVersionInformation(r);
                    if (null !== f && f.getDimensionForVersion() === t) return this.parsedVersion = f;
                    for (r = 0, u = 5; 0 <= u; u--)
                        for (a = t - 9; o <= a; a--) r = this.copyBit(u, a, r);
                    if (null !== (f = n.default.decodeVersionInformation(r)) && f.getDimensionForVersion() === t) return this.parsedVersion = f;
                    throw new i.default
                }, t.prototype.copyBit = function(t, e, r) {
                    return (this.isMirror ? this.bitMatrix.get(e, t) : this.bitMatrix.get(t, e)) ? r << 1 | 1 : r << 1
                }, t.prototype.readCodewords = function() {
                    var t = this.readFormatInformation(),
                        e = this.readVersion(),
                        r = a.default.values.get(t.getDataMask()),
                        n = this.bitMatrix.getHeight();
                    r.unmaskBitMatrix(this.bitMatrix, n);
                    for (var o = e.buildFunctionPattern(), u = !0, f = new Uint8Array(e.getTotalCodewords()), s = 0, d = 0, l = 0, c = n - 1; 0 < c; c -= 2) {
                        6 === c && c--;
                        for (var h = 0; h < n; h++)
                            for (var p = u ? n - 1 - h : h, w = 0; w < 2; w++) o.get(c - w, p) || (l++, d <<= 1, this.bitMatrix.get(c - w, p) && (d |= 1), 8 === l && (f[s++] = d, d = l = 0));
                        u = !u
                    }
                    if (s !== e.getTotalCodewords()) throw new i.default;
                    return f
                }, t.prototype.remask = function() {
                    if (null !== this.parsedFormatInfo) {
                        var t = a.default.values[this.parsedFormatInfo.getDataMask()],
                            e = this.bitMatrix.getHeight();
                        t.unmaskBitMatrix(this.bitMatrix, e)
                    }
                }, t.prototype.setMirror = function(t) {
                    this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = t
                }, t.prototype.mirror = function() {
                    for (var t = this.bitMatrix, e = 0, r = t.getWidth(); e < r; e++)
                        for (var n = e + 1, o = t.getHeight(); n < o; n++) t.get(e, n) !== t.get(n, e) && (t.flip(n, e), t.flip(e, n))
                }, t
            }();
        e.default = u
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                this.ecCodewordsPerBlock = t, this.ecBlocks = e
            }
            return t.prototype.getECCodewordsPerBlock = function() {
                return this.ecCodewordsPerBlock
            }, t.prototype.getNumBlocks = function() {
                for (var t = 0, e = 0, r = this.ecBlocks; e < r.length; e++) t += r[e].getCount();
                return t
            }, t.prototype.getTotalECCodewords = function() {
                return this.ecCodewordsPerBlock * this.getNumBlocks()
            }, t.prototype.getECBlocks = function() {
                return this.ecBlocks
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                this.count = t, this.dataCodewords = e
            }
            return t.prototype.getCount = function() {
                return this.count
            }, t.prototype.getDataCodewords = function() {
                return this.dataCodewords
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        var n, o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (o = n = e.DataMaskValues || (e.DataMaskValues = {}))[o.DATA_MASK_000 = 0] = "DATA_MASK_000", o[o.DATA_MASK_001 = 1] = "DATA_MASK_001", o[o.DATA_MASK_010 = 2] = "DATA_MASK_010", o[o.DATA_MASK_011 = 3] = "DATA_MASK_011", o[o.DATA_MASK_100 = 4] = "DATA_MASK_100", o[o.DATA_MASK_101 = 5] = "DATA_MASK_101", o[o.DATA_MASK_110 = 6] = "DATA_MASK_110", o[o.DATA_MASK_111 = 7] = "DATA_MASK_111";
        var a = function() {
            function t(t, e) {
                this.value = t, this.isMasked = e
            }
            return t.prototype.unmaskBitMatrix = function(t, e) {
                for (var r = 0; r < e; r++)
                    for (var n = 0; n < e; n++) this.isMasked(r, n) && t.flip(n, r)
            }, t.values = new Map([
                [n.DATA_MASK_000, new t(n.DATA_MASK_000, function(t, e) {
                    return 0 == (t + e & 1)
                })],
                [n.DATA_MASK_001, new t(n.DATA_MASK_001, function(t, e) {
                    return 0 == (1 & t)
                })],
                [n.DATA_MASK_010, new t(n.DATA_MASK_010, function(t, e) {
                    return e % 3 == 0
                })],
                [n.DATA_MASK_011, new t(n.DATA_MASK_011, function(t, e) {
                    return (t + e) % 3 == 0
                })],
                [n.DATA_MASK_100, new t(n.DATA_MASK_100, function(t, e) {
                    return 0 == (Math.floor(t / 2) + Math.floor(e / 3) & 1)
                })],
                [n.DATA_MASK_101, new t(n.DATA_MASK_101, function(t, e) {
                    return t * e % 6 == 0
                })],
                [n.DATA_MASK_110, new t(n.DATA_MASK_110, function(t, e) {
                    return t * e % 6 < 3
                })],
                [n.DATA_MASK_111, new t(n.DATA_MASK_111, function(t, e) {
                    return 0 == (t + e + t * e % 3 & 1)
                })]
            ]), t
        }();
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            o = function() {
                function t(t, e) {
                    this.numDataCodewords = t, this.codewords = e
                }
                return t.getDataBlocks = function(e, r, o) {
                    if (e.length !== r.getTotalCodewords()) throw new n.default;
                    for (var a = r.getECBlocksForLevel(o), i = 0, u = a.getECBlocks(), f = 0, s = u; f < s.length; f++) i += (p = s[f]).getCount();
                    for (var d = new Array(i), l = 0, c = 0, h = u; c < h.length; c++)
                        for (var p = h[c], w = 0; w < p.getCount(); w++) {
                            var g = p.getDataCodewords(),
                                _ = a.getECCodewordsPerBlock() + g;
                            d[l++] = new t(g, new Uint8Array(_))
                        }
                    for (var v = d[0].codewords.length, y = d.length - 1; 0 <= y && d[y].codewords.length !== v;) y--;
                    y++;
                    var E = v - a.getECCodewordsPerBlock(),
                        A = 0;
                    for (w = 0; w < E; w++)
                        for (var C = 0; C < l; C++) d[C].codewords[w] = e[A++];
                    for (C = y; C < l; C++) d[C].codewords[E] = e[A++];
                    var m = d[0].codewords.length;
                    for (w = E; w < m; w++)
                        for (C = 0; C < l; C++) {
                            var S = C < y ? w : w + 1;
                            d[C].codewords[S] = e[A++]
                        }
                    return d
                }, t.prototype.getNumDataCodewords = function() {
                    return this.numDataCodewords
                }, t.prototype.getCodewords = function() {
                    return this.codewords
                }, t
            }();
        e.default = o
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(33),
            o = r(21),
            a = r(34),
            i = r(55),
            u = r(56),
            f = r(11),
            s = r(35),
            d = r(5),
            l = function() {
                function t() {}
                return t.decode = function(e, r, i, s) {
                    var l = new n.default(e),
                        c = new f.default,
                        h = new Array,
                        p = -1,
                        w = -1;
                    try {
                        var g = null,
                            _ = !1,
                            v = void 0;
                        do {
                            if (l.available() < 4) v = u.default.TERMINATOR;
                            else {
                                var y = l.readBits(4);
                                v = u.default.forBits(y)
                            }
                            switch (v) {
                                case u.default.TERMINATOR:
                                    break;
                                case u.default.FNC1_FIRST_POSITION:
                                case u.default.FNC1_SECOND_POSITION:
                                    _ = !0;
                                    break;
                                case u.default.STRUCTURED_APPEND:
                                    if (l.available() < 16) throw new d.default;
                                    p = l.readBits(8), w = l.readBits(8);
                                    break;
                                case u.default.ECI:
                                    var E = t.parseECIValue(l);
                                    if (null === (g = o.default.getCharacterSetECIByValue(E))) throw new d.default;
                                    break;
                                case u.default.HANZI:
                                    var A = l.readBits(4),
                                        C = l.readBits(v.getCharacterCountBits(r));
                                    A === t.GB2312_SUBSET && t.decodeHanziSegment(l, c, C);
                                    break;
                                default:
                                    var m = l.readBits(v.getCharacterCountBits(r));
                                    switch (v) {
                                        case u.default.NUMERIC:
                                            t.decodeNumericSegment(l, c, m);
                                            break;
                                        case u.default.ALPHANUMERIC:
                                            t.decodeAlphanumericSegment(l, c, m, _);
                                            break;
                                        case u.default.BYTE:
                                            t.decodeByteSegment(l, c, m, g, h, s);
                                            break;
                                        case u.default.KANJI:
                                            t.decodeKanjiSegment(l, c, m);
                                            break;
                                        default:
                                            throw new d.default
                                    }
                            }
                        } while (v !== u.default.TERMINATOR)
                    } catch (e) {
                        throw new d.default
                    }
                    return new a.default(e, c.toString(), 0 === h.length ? null : h, null === i ? null : i.toString(), p, w)
                }, t.decodeHanziSegment = function(t, e, r) {
                    if (13 * r > t.available()) throw new d.default;
                    for (var n = new Uint8Array(2 * r), o = 0; 0 < r;) {
                        var a = t.readBits(13),
                            u = a / 96 << 8 & 4294967295 | a % 96;
                        u += u < 959 ? 41377 : 42657, n[o] = u >> 8 & 255, n[o + 1] = 255 & u, o += 2, r--
                    }
                    try {
                        e.append(s.default.decode(n, i.default.GB2312))
                    } catch (t) {
                        throw new d.default(t)
                    }
                }, t.decodeKanjiSegment = function(t, e, r) {
                    if (13 * r > t.available()) throw new d.default;
                    for (var n = new Uint8Array(2 * r), o = 0; 0 < r;) {
                        var a = t.readBits(13),
                            u = a / 192 << 8 & 4294967295 | a % 192;
                        u += u < 7936 ? 33088 : 49472, n[o] = u >> 8, n[o + 1] = u, o += 2, r--
                    }
                    try {
                        e.append(s.default.decode(n, i.default.SHIFT_JIS))
                    } catch (t) {
                        throw new d.default(t)
                    }
                }, t.decodeByteSegment = function(t, e, r, n, o, a) {
                    if (8 * r > t.available()) throw new d.default;
                    for (var u, f = new Uint8Array(r), l = 0; l < r; l++) f[l] = t.readBits(8);
                    u = null === n ? i.default.guessEncoding(f, a) : n.getName();
                    try {
                        e.append(s.default.decode(f, u))
                    } catch (t) {
                        throw new d.default(t)
                    }
                    o.push(f)
                }, t.toAlphaNumericChar = function(e) {
                    if (e >= t.ALPHANUMERIC_CHARS.length) throw new d.default;
                    return t.ALPHANUMERIC_CHARS[e]
                }, t.decodeAlphanumericSegment = function(e, r, n, o) {
                    for (var a = r.length(); 1 < n;) {
                        if (e.available() < 11) throw new d.default;
                        var i = e.readBits(11);
                        r.append(t.toAlphaNumericChar(Math.floor(i / 45))), r.append(t.toAlphaNumericChar(i % 45)), n -= 2
                    }
                    if (1 === n) {
                        if (e.available() < 6) throw new d.default;
                        r.append(t.toAlphaNumericChar(e.readBits(6)))
                    }
                    if (o)
                        for (var u = a; u < r.length(); u++) "%" === r.charAt(u) && (u < r.length() - 1 && "%" === r.charAt(u + 1) ? r.deleteCharAt(u + 1) : r.setCharAt(u, String.fromCharCode(29)))
                }, t.decodeNumericSegment = function(e, r, n) {
                    for (; 3 <= n;) {
                        if (e.available() < 10) throw new d.default;
                        var o = e.readBits(10);
                        if (1e3 <= o) throw new d.default;
                        r.append(t.toAlphaNumericChar(Math.floor(o / 100))), r.append(t.toAlphaNumericChar(Math.floor(o / 10) % 10)), r.append(t.toAlphaNumericChar(o % 10)), n -= 3
                    }
                    if (2 === n) {
                        if (e.available() < 7) throw new d.default;
                        var a = e.readBits(7);
                        if (100 <= a) throw new d.default;
                        r.append(t.toAlphaNumericChar(Math.floor(a / 10))), r.append(t.toAlphaNumericChar(a % 10))
                    } else if (1 === n) {
                        if (e.available() < 4) throw new d.default;
                        var i = e.readBits(4);
                        if (10 <= i) throw new d.default;
                        r.append(t.toAlphaNumericChar(i))
                    }
                }, t.parseECIValue = function(t) {
                    var e = t.readBits(8);
                    if (0 == (128 & e)) return 127 & e;
                    if (128 == (192 & e)) return (63 & e) << 8 & 4294967295 | t.readBits(8);
                    if (192 != (224 & e)) throw new d.default;
                    return (31 & e) << 16 & 4294967295 | t.readBits(16)
                }, t.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", t.GB2312_SUBSET = 1, t
            }();
        e.default = l
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(4),
            o = r(3),
            a = r(36),
            i = r(37),
            u = r(38),
            f = r(13),
            s = r(32),
            d = r(83),
            l = r(86),
            c = r(0),
            h = function() {
                function t(t) {
                    this.image = t
                }
                return t.prototype.getImage = function() {
                    return this.image
                }, t.prototype.getResultPointCallback = function() {
                    return this.resultPointCallback
                }, t.prototype.detect = function(t) {
                    this.resultPointCallback = null == t ? null : t.get(n.default.NEED_RESULT_POINT_CALLBACK);
                    var e = new d.default(this.image, this.resultPointCallback).find(t);
                    return this.processFinderPatternInfo(e)
                }, t.prototype.processFinderPatternInfo = function(e) {
                    var r = e.getTopLeft(),
                        n = e.getTopRight(),
                        o = e.getBottomLeft(),
                        i = this.calculateModuleSize(r, n, o);
                    if (i < 1) throw new c.default("No pattern found in proccess finder.");
                    var u = t.computeDimension(r, n, o, i),
                        f = s.default.getProvisionalVersionForDimension(u),
                        d = f.getDimensionForVersion() - 7,
                        l = null;
                    if (0 < f.getAlignmentPatternCenters().length)
                        for (var h = n.getX() - r.getX() + o.getX(), p = n.getY() - r.getY() + o.getY(), w = 1 - 3 / d, g = Math.floor(r.getX() + w * (h - r.getX())), _ = Math.floor(r.getY() + w * (p - r.getY())), v = 4; v <= 16; v <<= 1) try {
                            l = this.findAlignmentInRegion(i, g, _, v);
                            break
                        } catch (e) {
                            if (!(e instanceof c.default)) throw e
                        }
                    var y, E = t.createTransform(r, n, o, l, u),
                        A = t.sampleGrid(this.image, E, u);
                    return y = null === l ? [o, r, n] : [o, r, n, l], new a.default(A, y)
                }, t.createTransform = function(t, e, r, n, o) {
                    var a, i, f, s, d = o - 3.5;
                    return s = f = null !== n ? (a = n.getX(), i = n.getY(), d - 3) : (a = e.getX() - t.getX() + r.getX(), i = e.getY() - t.getY() + r.getY(), d), u.default.quadrilateralToQuadrilateral(3.5, 3.5, d, 3.5, f, s, 3.5, d, t.getX(), t.getY(), e.getX(), e.getY(), a, i, r.getX(), r.getY())
                }, t.sampleGrid = function(t, e, r) {
                    return i.default.getInstance().sampleGridWithTransform(t, r, r, e)
                }, t.computeDimension = function(t, e, r, n) {
                    var a = f.default.round(o.default.distance(t, e) / n),
                        i = f.default.round(o.default.distance(t, r) / n),
                        u = Math.floor((a + i) / 2) + 7;
                    switch (3 & u) {
                        case 0:
                            u++;
                            break;
                        case 2:
                            u--;
                            break;
                        case 3:
                            throw new c.default("Dimensions could be not found.")
                    }
                    return u
                }, t.prototype.calculateModuleSize = function(t, e, r) {
                    return (this.calculateModuleSizeOneWay(t, e) + this.calculateModuleSizeOneWay(t, r)) / 2
                }, t.prototype.calculateModuleSizeOneWay = function(t, e) {
                    var r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()), Math.floor(e.getX()), Math.floor(e.getY())),
                        n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.getX()), Math.floor(e.getY()), Math.floor(t.getX()), Math.floor(t.getY()));
                    return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14
                }, t.prototype.sizeOfBlackWhiteBlackRunBothWays = function(t, e, r, n) {
                    var o = this.sizeOfBlackWhiteBlackRun(t, e, r, n),
                        a = 1,
                        i = t - (r - t);
                    i < 0 ? (a = t / (t - i), i = 0) : i >= this.image.getWidth() && (a = (this.image.getWidth() - 1 - t) / (i - t), i = this.image.getWidth() - 1);
                    var u = Math.floor(e - (n - e) * a);
                    return a = 1, u < 0 ? (a = e / (e - u), u = 0) : u >= this.image.getHeight() && (a = (this.image.getHeight() - 1 - e) / (u - e), u = this.image.getHeight() - 1), i = Math.floor(t + (i - t) * a), (o += this.sizeOfBlackWhiteBlackRun(t, e, i, u)) - 1
                }, t.prototype.sizeOfBlackWhiteBlackRun = function(t, e, r, n) {
                    var o = Math.abs(n - e) > Math.abs(r - t);
                    if (o) {
                        var a = t;
                        t = e, e = a, a = r, r = n, n = a
                    }
                    for (var i = Math.abs(r - t), u = Math.abs(n - e), s = -i / 2, d = t < r ? 1 : -1, l = e < n ? 1 : -1, c = 0, h = r + d, p = t, w = e; p !== h; p += d) {
                        var g = o ? w : p,
                            _ = o ? p : w;
                        if (1 === c === this.image.get(g, _)) {
                            if (2 === c) return f.default.distance(p, w, t, e);
                            c++
                        }
                        if (0 < (s += u)) {
                            if (w === n) break;
                            w += l, s -= i
                        }
                    }
                    return 2 === c ? f.default.distance(r + d, n, t, e) : NaN
                }, t.prototype.findAlignmentInRegion = function(t, e, r, n) {
                    var o = Math.floor(n * t),
                        a = Math.max(0, e - o),
                        i = Math.min(this.image.getWidth() - 1, e + o);
                    if (i - a < 3 * t) throw new c.default("Alignment top exceeds estimated module size.");
                    var u = Math.max(0, r - o),
                        f = Math.min(this.image.getHeight() - 1, r + o);
                    if (f - u < 3 * t) throw new c.default("Alignment bottom exceeds estimated module size.");
                    return new l.default(this.image, a, u, i - a, f - u, t, this.resultPointCallback).find()
                }, t
            }();
        e.default = h
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(4),
            o = r(3),
            a = r(84),
            i = r(85),
            u = r(0),
            f = function() {
                function t(t, e) {
                    this.image = t, this.resultPointCallback = e, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = e
                }
                return t.prototype.getImage = function() {
                    return this.image
                }, t.prototype.getPossibleCenters = function() {
                    return this.possibleCenters
                }, t.prototype.find = function(e) {
                    var r = null != e && void 0 !== e.get(n.default.TRY_HARDER),
                        a = null != e && void 0 !== e.get(n.default.PURE_BARCODE),
                        u = this.image,
                        f = u.getHeight(),
                        s = u.getWidth(),
                        d = Math.floor(3 * f / (4 * t.MAX_MODULES));
                    (d < t.MIN_SKIP || r) && (d = t.MIN_SKIP);
                    for (var l = !1, c = new Int32Array(5), h = d - 1; h < f && !l; h += d) {
                        c[0] = 0, c[1] = 0, c[2] = 0, c[3] = 0;
                        for (var p = c[4] = 0, w = 0; w < s; w++)
                            if (u.get(w, h)) 1 == (1 & p) && p++, c[p]++;
                            else if (0 == (1 & p))
                            if (4 === p)
                                if (t.foundPatternCross(c)) {
                                    if (!0 !== this.handlePossibleCenter(c, h, w, a)) {
                                        c[0] = c[2], c[1] = c[3], c[2] = c[4], c[3] = 1, c[4] = 0, p = 3;
                                        continue
                                    }
                                    if (d = 2, !0 === this.hasSkipped) l = this.haveMultiplyConfirmedCenters();
                                    else {
                                        var g = this.findRowSkip();
                                        g > c[2] && (h += g - c[2] - d, w = s - 1)
                                    }
                                    c[p = 0] = 0, c[1] = 0, c[2] = 0, c[3] = 0, c[4] = 0
                                } else c[0] = c[2], c[1] = c[3], c[2] = c[4], c[3] = 1, c[4] = 0, p = 3;
                        else c[++p]++;
                        else c[p]++;
                        t.foundPatternCross(c) && !0 === this.handlePossibleCenter(c, h, s, a) && (d = c[0], this.hasSkipped && (l = this.haveMultiplyConfirmedCenters()))
                    }
                    var _ = this.selectBestPatterns();
                    return o.default.orderBestPatterns(_), new i.default(_)
                }, t.centerFromEnd = function(t, e) {
                    return e - t[4] - t[3] - t[2] / 2
                }, t.foundPatternCross = function(t) {
                    for (var e = 0, r = 0; r < 5; r++) {
                        var n = t[r];
                        if (0 === n) return !1;
                        e += n
                    }
                    if (e < 7) return !1;
                    var o = e / 7,
                        a = o / 2;
                    return Math.abs(o - t[0]) < a && Math.abs(o - t[1]) < a && Math.abs(3 * o - t[2]) < 3 * a && Math.abs(o - t[3]) < a && Math.abs(o - t[4]) < a
                }, t.prototype.getCrossCheckStateCount = function() {
                    var t = this.crossCheckStateCount;
                    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t
                }, t.prototype.crossCheckDiagonal = function(e, r, n, o) {
                    for (var a = this.getCrossCheckStateCount(), i = 0, u = this.image; i <= e && i <= r && u.get(r - i, e - i);) a[2]++, i++;
                    if (e < i || r < i) return !1;
                    for (; i <= e && i <= r && !u.get(r - i, e - i) && a[1] <= n;) a[1]++, i++;
                    if (e < i || r < i || a[1] > n) return !1;
                    for (; i <= e && i <= r && u.get(r - i, e - i) && a[0] <= n;) a[0]++, i++;
                    if (a[0] > n) return !1;
                    var f = u.getHeight(),
                        s = u.getWidth();
                    for (i = 1; e + i < f && r + i < s && u.get(r + i, e + i);) a[2]++, i++;
                    if (f <= e + i || s <= r + i) return !1;
                    for (; e + i < f && r + i < s && !u.get(r + i, e + i) && a[3] < n;) a[3]++, i++;
                    if (f <= e + i || s <= r + i || a[3] >= n) return !1;
                    for (; e + i < f && r + i < s && u.get(r + i, e + i) && a[4] < n;) a[4]++, i++;
                    if (a[4] >= n) return !1;
                    var d = a[0] + a[1] + a[2] + a[3] + a[4];
                    return Math.abs(d - o) < 2 * o && t.foundPatternCross(a)
                }, t.prototype.crossCheckVertical = function(e, r, n, o) {
                    for (var a = this.image, i = a.getHeight(), u = this.getCrossCheckStateCount(), f = e; 0 <= f && a.get(r, f);) u[2]++, f--;
                    if (f < 0) return NaN;
                    for (; 0 <= f && !a.get(r, f) && u[1] <= n;) u[1]++, f--;
                    if (f < 0 || u[1] > n) return NaN;
                    for (; 0 <= f && a.get(r, f) && u[0] <= n;) u[0]++, f--;
                    if (u[0] > n) return NaN;
                    for (f = e + 1; f < i && a.get(r, f);) u[2]++, f++;
                    if (f === i) return NaN;
                    for (; f < i && !a.get(r, f) && u[3] < n;) u[3]++, f++;
                    if (f === i || u[3] >= n) return NaN;
                    for (; f < i && a.get(r, f) && u[4] < n;) u[4]++, f++;
                    if (u[4] >= n) return NaN;
                    var s = u[0] + u[1] + u[2] + u[3] + u[4];
                    return 5 * Math.abs(s - o) >= 2 * o ? NaN : t.foundPatternCross(u) ? t.centerFromEnd(u, f) : NaN
                }, t.prototype.crossCheckHorizontal = function(e, r, n, o) {
                    for (var a = this.image, i = a.getWidth(), u = this.getCrossCheckStateCount(), f = e; 0 <= f && a.get(f, r);) u[2]++, f--;
                    if (f < 0) return NaN;
                    for (; 0 <= f && !a.get(f, r) && u[1] <= n;) u[1]++, f--;
                    if (f < 0 || u[1] > n) return NaN;
                    for (; 0 <= f && a.get(f, r) && u[0] <= n;) u[0]++, f--;
                    if (u[0] > n) return NaN;
                    for (f = e + 1; f < i && a.get(f, r);) u[2]++, f++;
                    if (f === i) return NaN;
                    for (; f < i && !a.get(f, r) && u[3] < n;) u[3]++, f++;
                    if (f === i || u[3] >= n) return NaN;
                    for (; f < i && a.get(f, r) && u[4] < n;) u[4]++, f++;
                    if (u[4] >= n) return NaN;
                    var s = u[0] + u[1] + u[2] + u[3] + u[4];
                    return 5 * Math.abs(s - o) >= o ? NaN : t.foundPatternCross(u) ? t.centerFromEnd(u, f) : NaN
                }, t.prototype.handlePossibleCenter = function(e, r, n, o) {
                    var i = e[0] + e[1] + e[2] + e[3] + e[4],
                        u = t.centerFromEnd(e, n),
                        f = this.crossCheckVertical(r, Math.floor(u), e[2], i);
                    if (isNaN(f) || (u = this.crossCheckHorizontal(Math.floor(u), Math.floor(f), e[2], i), isNaN(u) || o && !this.crossCheckDiagonal(Math.floor(f), Math.floor(u), e[2], i))) return !1;
                    for (var s = i / 7, d = !1, l = this.possibleCenters, c = 0, h = l.length; c < h; c++) {
                        var p = l[c];
                        if (p.aboutEquals(s, f, u)) {
                            l[c] = p.combineEstimate(f, u, s), d = !0;
                            break
                        }
                    }
                    if (!d) {
                        var w = new a.default(u, f, s);
                        l.push(w), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(w)
                    }
                    return !0
                }, t.prototype.findRowSkip = function() {
                    if (this.possibleCenters.length <= 1) return 0;
                    for (var e = null, r = 0, n = this.possibleCenters; r < n.length; r++) {
                        var o = n[r];
                        if (o.getCount() >= t.CENTER_QUORUM) {
                            if (null != e) return this.hasSkipped = !0, Math.floor((Math.abs(e.getX() - o.getX()) - Math.abs(e.getY() - o.getY())) / 2);
                            e = o
                        }
                    }
                    return 0
                }, t.prototype.haveMultiplyConfirmedCenters = function() {
                    for (var e = 0, r = 0, n = this.possibleCenters.length, o = 0, a = this.possibleCenters; o < a.length; o++)(d = a[o]).getCount() >= t.CENTER_QUORUM && (e++, r += d.getEstimatedModuleSize());
                    if (e < 3) return !1;
                    for (var i = r / n, u = 0, f = 0, s = this.possibleCenters; f < s.length; f++) {
                        var d = s[f];
                        u += Math.abs(d.getEstimatedModuleSize() - i)
                    }
                    return u <= .05 * r
                }, t.prototype.selectBestPatterns = function() {
                    var t = this.possibleCenters.length;
                    if (t < 3) throw new u.default;
                    var e, r = this.possibleCenters;
                    if (3 < t) {
                        for (var n = 0, o = 0, a = 0, i = this.possibleCenters; a < i.length; a++) {
                            var f = i[a].getEstimatedModuleSize();
                            n += f, o += f * f
                        }
                        e = n / t;
                        var s = Math.sqrt(o / t - e * e);
                        r.sort(function(t, r) {
                            var n = Math.abs(r.getEstimatedModuleSize() - e),
                                o = Math.abs(t.getEstimatedModuleSize() - e);
                            return n < o ? -1 : o < n ? 1 : 0
                        });
                        for (var d = Math.max(.2 * e, s), l = 0; l < r.length && 3 < r.length; l++) {
                            var c = r[l];
                            Math.abs(c.getEstimatedModuleSize() - e) > d && (r.splice(l, 1), l--)
                        }
                    }
                    if (3 < r.length) {
                        n = 0;
                        for (var h = 0, p = r; h < p.length; h++) n += p[h].getEstimatedModuleSize();
                        e = n / r.length, r.sort(function(t, r) {
                            if (r.getCount() !== t.getCount()) return r.getCount() - t.getCount();
                            var n = Math.abs(r.getEstimatedModuleSize() - e),
                                o = Math.abs(t.getEstimatedModuleSize() - e);
                            return n < o ? 1 : o < n ? -1 : 0
                        }), r.splice(3)
                    }
                    return [r[0], r[1], r[2]]
                }, t.CENTER_QUORUM = 2, t.MIN_SKIP = 3, t.MAX_MODULES = 57, t
            }();
        e.default = f
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e(e, r, n, o) {
                var a = t.call(this, e, r) || this;
                return a.estimatedModuleSize = n, void 0 === (a.count = o) && (a.count = 1), a
            }
            return o(e, t), e.prototype.getEstimatedModuleSize = function() {
                return this.estimatedModuleSize
            }, e.prototype.getCount = function() {
                return this.count
            }, e.prototype.aboutEquals = function(t, e, r) {
                if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                    var n = Math.abs(t - this.estimatedModuleSize);
                    return n <= 1 || n <= this.estimatedModuleSize
                }
                return !1
            }, e.prototype.combineEstimate = function(t, r, n) {
                var o = this.count + 1;
                return new e((this.count * this.getX() + r) / o, (this.count * this.getY() + t) / o, (this.count * this.estimatedModuleSize + n) / o, o)
            }, e
        }(r(3).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                this.bottomLeft = t[0], this.topLeft = t[1], this.topRight = t[2]
            }
            return t.prototype.getBottomLeft = function() {
                return this.bottomLeft
            }, t.prototype.getTopLeft = function() {
                return this.topLeft
            }, t.prototype.getTopRight = function() {
                return this.topRight
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(87),
            o = r(0),
            a = function() {
                function t(t, e, r, n, o, a, i) {
                    this.image = t, this.startX = e, this.startY = r, this.width = n, this.height = o, this.moduleSize = a, this.resultPointCallback = i, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3)
                }
                return t.prototype.find = function() {
                    for (var t = this.startX, e = this.height, r = t + this.width, n = this.startY + e / 2, a = new Int32Array(3), i = this.image, u = 0; u < e; u++) {
                        var f = n + (0 == (1 & u) ? Math.floor((u + 1) / 2) : -Math.floor((u + 1) / 2));
                        a[0] = 0, a[1] = 0, a[2] = 0;
                        for (var s = t; s < r && !i.get(s, f);) s++;
                        for (var d = 0; s < r;) {
                            if (i.get(s, f))
                                if (1 === d) a[1]++;
                                else if (2 === d) {
                                var l;
                                if (this.foundPatternCross(a) && null !== (l = this.handlePossibleCenter(a, f, s))) return l;
                                a[0] = a[2], a[1] = 1, a[2] = 0, d = 1
                            } else a[++d]++;
                            else 1 === d && d++, a[d]++;
                            s++
                        }
                        if (this.foundPatternCross(a) && null !== (l = this.handlePossibleCenter(a, f, r))) return l
                    }
                    if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
                    throw new o.default
                }, t.centerFromEnd = function(t, e) {
                    return e - t[2] - t[1] / 2
                }, t.prototype.foundPatternCross = function(t) {
                    for (var e = this.moduleSize, r = e / 2, n = 0; n < 3; n++)
                        if (Math.abs(e - t[n]) >= r) return !1;
                    return !0
                }, t.prototype.crossCheckVertical = function(e, r, n, o) {
                    var a = this.image,
                        i = a.getHeight(),
                        u = this.crossCheckStateCount;
                    u[0] = 0, u[1] = 0, u[2] = 0;
                    for (var f = e; 0 <= f && a.get(r, f) && u[1] <= n;) u[1]++, f--;
                    if (f < 0 || u[1] > n) return NaN;
                    for (; 0 <= f && !a.get(r, f) && u[0] <= n;) u[0]++, f--;
                    if (u[0] > n) return NaN;
                    for (f = e + 1; f < i && a.get(r, f) && u[1] <= n;) u[1]++, f++;
                    if (f === i || u[1] > n) return NaN;
                    for (; f < i && !a.get(r, f) && u[2] <= n;) u[2]++, f++;
                    if (u[2] > n) return NaN;
                    var s = u[0] + u[1] + u[2];
                    return 5 * Math.abs(s - o) >= 2 * o ? NaN : this.foundPatternCross(u) ? t.centerFromEnd(u, f) : NaN
                }, t.prototype.handlePossibleCenter = function(e, r, o) {
                    var a = e[0] + e[1] + e[2],
                        i = t.centerFromEnd(e, o),
                        u = this.crossCheckVertical(r, i, 2 * e[1], a);
                    if (!isNaN(u)) {
                        for (var f = (e[0] + e[1] + e[2]) / 3, s = 0, d = this.possibleCenters; s < d.length; s++) {
                            var l = d[s];
                            if (l.aboutEquals(f, u, i)) return l.combineEstimate(u, i, f)
                        }
                        var c = new n.default(i, u, f);
                        this.possibleCenters.push(c), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(c)
                    }
                    return null
                }, t
            }();
        e.default = a
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e(e, r, n) {
                var o = t.call(this, e, r) || this;
                return o.estimatedModuleSize = n, o
            }
            return o(e, t), e.prototype.aboutEquals = function(t, e, r) {
                if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                    var n = Math.abs(t - this.estimatedModuleSize);
                    return n <= 1 || n <= this.estimatedModuleSize
                }
                return !1
            }, e.prototype.combineEstimate = function(t, r, n) {
                return new e((this.getX() + r) / 2, (this.getY() + t) / 2, (this.estimatedModuleSize + n) / 2)
            }, e
        }(r(3).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(17),
            i = r(39),
            u = function(t) {
                function e(e) {
                    return void 0 === e && (e = 500), t.call(this, new i.default, e) || this
                }
                return o(e, t), e
            }(a.BrowserCodeReader);
        e.BrowserDatamatrixCodeReader = u
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(31),
            o = r(16),
            a = r(90),
            i = r(92),
            u = r(93),
            f = r(12),
            s = function() {
                function t() {
                    this.rsDecoder = new n.default(o.default.DATA_MATRIX_FIELD_256)
                }
                return t.prototype.decode = function(t) {
                    for (var e = new a.default(t), r = e.getVersion(), n = e.readCodewords(), o = i.default.getDataBlocks(n, r), f = 0, s = 0, d = o; s < d.length; s++) f += d[s].getNumDataCodewords();
                    for (var l = new Uint8Array(f), c = o.length, h = 0; h < c; h++) {
                        var p = o[h],
                            w = p.getCodewords(),
                            g = p.getNumDataCodewords();
                        this.correctErrors(w, g);
                        for (var _ = 0; _ < g; _++) l[_ * c + h] = w[_]
                    }
                    return u.default.decode(l)
                }, t.prototype.correctErrors = function(t, e) {
                    t.length;
                    var r = new Int32Array(t);
                    try {
                        this.rsDecoder.decode(r, t.length - e)
                    } catch (t) {
                        throw new f.default
                    }
                    for (var n = 0; n < e; n++) t[n] = r[n]
                }, t
            }();
        e.default = s
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(8),
            o = r(91),
            a = r(5),
            i = r(1),
            u = function() {
                function t(e) {
                    var r = e.getHeight();
                    if (r < 8 || 144 < r || 0 != (1 & r)) throw new a.default;
                    this.version = t.readVersion(e), this.mappingBitMatrix = this.extractDataRegion(e), this.readMappingMatrix = new n.default(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight())
                }
                return t.prototype.getVersion = function() {
                    return this.version
                }, t.readVersion = function(t) {
                    var e = t.getHeight(),
                        r = t.getWidth();
                    return o.default.getVersionForDimensions(e, r)
                }, t.prototype.readCodewords = function() {
                    var t = new Int8Array(this.version.getTotalCodewords()),
                        e = 0,
                        r = 4,
                        n = 0,
                        o = this.mappingBitMatrix.getHeight(),
                        i = this.mappingBitMatrix.getWidth(),
                        u = !1,
                        f = !1,
                        s = !1,
                        d = !1;
                    do {
                        if (r !== o || 0 !== n || u)
                            if (r !== o - 2 || 0 !== n || 0 == (3 & i) || f)
                                if (r !== o + 4 || 2 !== n || 0 != (7 & i) || s)
                                    if (r !== o - 2 || 0 !== n || 4 != (7 & i) || d) {
                                        for (; r < o && 0 <= n && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, o, i)), n += 2, 0 <= (r -= 2) && n < i;);
                                        for (r += 1, n += 3; 0 <= r && n < i && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, o, i)), n -= 2, (r += 2) < o && 0 <= n;);
                                        r += 3, n += 1
                                    } else t[e++] = 255 & this.readCorner4(o, i), r -= 2, n += 2, d = !0;
                        else t[e++] = 255 & this.readCorner3(o, i), r -= 2, n += 2, s = !0;
                        else t[e++] = 255 & this.readCorner2(o, i), r -= 2, n += 2, f = !0;
                        else t[e++] = 255 & this.readCorner1(o, i), r -= 2, n += 2, u = !0
                    } while (r < o || n < i);
                    if (e !== this.version.getTotalCodewords()) throw new a.default;
                    return t
                }, t.prototype.readModule = function(t, e, r, n) {
                    return t < 0 && (t += r, e += 4 - (r + 4 & 7)), e < 0 && (e += n, t += 4 - (n + 4 & 7)), this.readMappingMatrix.set(e, t), this.mappingBitMatrix.get(e, t)
                }, t.prototype.readUtah = function(t, e, r, n) {
                    var o = 0;
                    return this.readModule(t - 2, e - 2, r, n) && (o |= 1), o <<= 1, this.readModule(t - 2, e - 1, r, n) && (o |= 1), o <<= 1, this.readModule(t - 1, e - 2, r, n) && (o |= 1), o <<= 1, this.readModule(t - 1, e - 1, r, n) && (o |= 1), o <<= 1, this.readModule(t - 1, e, r, n) && (o |= 1), o <<= 1, this.readModule(t, e - 2, r, n) && (o |= 1), o <<= 1, this.readModule(t, e - 1, r, n) && (o |= 1), o <<= 1, this.readModule(t, e, r, n) && (o |= 1), o
                }, t.prototype.readCorner1 = function(t, e) {
                    var r = 0;
                    return this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 1, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(2, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(3, e - 1, t, e) && (r |= 1), r
                }, t.prototype.readCorner2 = function(t, e) {
                    var r = 0;
                    return this.readModule(t - 3, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 4, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r
                }, t.prototype.readCorner3 = function(t, e) {
                    var r = 0;
                    return this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r
                }, t.prototype.readCorner4 = function(t, e) {
                    var r = 0;
                    return this.readModule(t - 3, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(2, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(3, e - 1, t, e) && (r |= 1), r
                }, t.prototype.extractDataRegion = function(t) {
                    var e = this.version.getSymbolSizeRows(),
                        r = this.version.getSymbolSizeColumns();
                    if (t.getHeight() !== e) throw new i.default("Dimension of bitMatrix must match the version size");
                    for (var o = this.version.getDataRegionSizeRows(), a = this.version.getDataRegionSizeColumns(), u = e / o | 0, f = r / a | 0, s = u * o, d = f * a, l = new n.default(d, s), c = 0; c < u; ++c)
                        for (var h = c * o, p = 0; p < f; ++p)
                            for (var w = p * a, g = 0; g < o; ++g)
                                for (var _ = c * (o + 2) + 1 + g, v = h + g, y = 0; y < a; ++y) {
                                    var E = p * (a + 2) + 1 + y;
                                    if (t.get(E, _)) {
                                        var A = w + y;
                                        l.set(A, v)
                                    }
                                }
                    return l
                }, t
            }();
        e.default = u
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(5),
            o = function() {
                function t(t, e, r) {
                    this.ecCodewords = t, this.ecBlocks = [e], r && this.ecBlocks.push(r)
                }
                return t.prototype.getECCodewords = function() {
                    return this.ecCodewords
                }, t.prototype.getECBlocks = function() {
                    return this.ecBlocks
                }, t
            }();
        e.ECBlocks = o;
        var a = function() {
            function t(t, e) {
                this.count = t, this.dataCodewords = e
            }
            return t.prototype.getCount = function() {
                return this.count
            }, t.prototype.getDataCodewords = function() {
                return this.dataCodewords
            }, t
        }();
        e.ECB = a;
        var i = function() {
            function t(t, e, r, n, o, a) {
                this.versionNumber = t, this.symbolSizeRows = e, this.symbolSizeColumns = r, this.dataRegionSizeRows = n, this.dataRegionSizeColumns = o;
                for (var i = 0, u = (this.ecBlocks = a).getECCodewords(), f = 0, s = a.getECBlocks(); f < s.length; f++) {
                    var d = s[f];
                    i += d.getCount() * (d.getDataCodewords() + u)
                }
                this.totalCodewords = i
            }
            return t.prototype.getVersionNumber = function() {
                return this.versionNumber
            }, t.prototype.getSymbolSizeRows = function() {
                return this.symbolSizeRows
            }, t.prototype.getSymbolSizeColumns = function() {
                return this.symbolSizeColumns
            }, t.prototype.getDataRegionSizeRows = function() {
                return this.dataRegionSizeRows
            }, t.prototype.getDataRegionSizeColumns = function() {
                return this.dataRegionSizeColumns
            }, t.prototype.getTotalCodewords = function() {
                return this.totalCodewords
            }, t.prototype.getECBlocks = function() {
                return this.ecBlocks
            }, t.getVersionForDimensions = function(e, r) {
                if (0 != (1 & e) || 0 != (1 & r)) throw new n.default;
                for (var o = 0, a = t.VERSIONS; o < a.length; o++) {
                    var i = a[o];
                    if (i.symbolSizeRows === e && i.symbolSizeColumns === r) return i
                }
                throw new n.default
            }, t.prototype.toString = function() {
                return "" + this.versionNumber
            }, t.buildVersions = function() {
                return [new t(1, 10, 10, 8, 8, new o(5, new a(1, 3))), new t(2, 12, 12, 10, 10, new o(7, new a(1, 5))), new t(3, 14, 14, 12, 12, new o(10, new a(1, 8))), new t(4, 16, 16, 14, 14, new o(12, new a(1, 12))), new t(5, 18, 18, 16, 16, new o(14, new a(1, 18))), new t(6, 20, 20, 18, 18, new o(18, new a(1, 22))), new t(7, 22, 22, 20, 20, new o(20, new a(1, 30))), new t(8, 24, 24, 22, 22, new o(24, new a(1, 36))), new t(9, 26, 26, 24, 24, new o(28, new a(1, 44))), new t(10, 32, 32, 14, 14, new o(36, new a(1, 62))), new t(11, 36, 36, 16, 16, new o(42, new a(1, 86))), new t(12, 40, 40, 18, 18, new o(48, new a(1, 114))), new t(13, 44, 44, 20, 20, new o(56, new a(1, 144))), new t(14, 48, 48, 22, 22, new o(68, new a(1, 174))), new t(15, 52, 52, 24, 24, new o(42, new a(2, 102))), new t(16, 64, 64, 14, 14, new o(56, new a(2, 140))), new t(17, 72, 72, 16, 16, new o(36, new a(4, 92))), new t(18, 80, 80, 18, 18, new o(48, new a(4, 114))), new t(19, 88, 88, 20, 20, new o(56, new a(4, 144))), new t(20, 96, 96, 22, 22, new o(68, new a(4, 174))), new t(21, 104, 104, 24, 24, new o(56, new a(6, 136))), new t(22, 120, 120, 18, 18, new o(68, new a(6, 175))), new t(23, 132, 132, 20, 20, new o(62, new a(8, 163))), new t(24, 144, 144, 22, 22, new o(62, new a(8, 156), new a(2, 155))), new t(25, 8, 18, 6, 16, new o(7, new a(1, 5))), new t(26, 8, 32, 6, 14, new o(11, new a(1, 10))), new t(27, 12, 26, 10, 24, new o(14, new a(1, 16))), new t(28, 12, 36, 10, 16, new o(18, new a(1, 22))), new t(29, 16, 36, 14, 16, new o(24, new a(1, 32))), new t(30, 16, 48, 14, 22, new o(28, new a(1, 49)))]
            }, t.VERSIONS = t.buildVersions(), t
        }();
        e.default = i
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            o = function() {
                function t(t, e) {
                    this.numDataCodewords = t, this.codewords = e
                }
                return t.getDataBlocks = function(e, r) {
                    for (var o = r.getECBlocks(), a = 0, i = o.getECBlocks(), u = 0, f = i; u < f.length; u++) a += (h = f[u]).getCount();
                    for (var s = new Array(a), d = 0, l = 0, c = i; l < c.length; l++)
                        for (var h = c[l], p = 0; p < h.getCount(); p++) {
                            var w = h.getDataCodewords(),
                                g = o.getECCodewords() + w;
                            s[d++] = new t(w, new Uint8Array(g))
                        }
                    var _ = s[0].codewords.length - o.getECCodewords(),
                        v = _ - 1,
                        y = 0;
                    for (p = 0; p < v; p++)
                        for (var E = 0; E < d; E++) s[E].codewords[p] = e[y++];
                    var A = 24 === r.getVersionNumber(),
                        C = A ? 8 : d;
                    for (E = 0; E < C; E++) s[E].codewords[_ - 1] = e[y++];
                    var m = s[0].codewords.length;
                    for (p = _; p < m; p++)
                        for (E = 0; E < d; E++) {
                            var S = A ? (E + 8) % d : E,
                                I = A && 7 < S ? p - 1 : p;
                            s[S].codewords[I] = e[y++]
                        }
                    if (y !== e.length) throw new n.default;
                    return s
                }, t.prototype.getNumDataCodewords = function() {
                    return this.numDataCodewords
                }, t.prototype.getCodewords = function() {
                    return this.codewords
                }, t
            }();
        e.default = o
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, o, a = r(34),
            i = r(33),
            u = r(11),
            f = r(35),
            s = r(44),
            d = r(5),
            l = r(20);
        (o = n || (n = {}))[o.PAD_ENCODE = 0] = "PAD_ENCODE", o[o.ASCII_ENCODE = 1] = "ASCII_ENCODE", o[o.C40_ENCODE = 2] = "C40_ENCODE", o[o.TEXT_ENCODE = 3] = "TEXT_ENCODE", o[o.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", o[o.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", o[o.BASE256_ENCODE = 6] = "BASE256_ENCODE";
        var c = function() {
            function t() {}
            return t.decode = function(t) {
                var e = new i.default(t),
                    r = new u.default,
                    o = new u.default,
                    f = new Array,
                    s = n.ASCII_ENCODE;
                do {
                    if (s === n.ASCII_ENCODE) s = this.decodeAsciiSegment(e, r, o);
                    else {
                        switch (s) {
                            case n.C40_ENCODE:
                                this.decodeC40Segment(e, r);
                                break;
                            case n.TEXT_ENCODE:
                                this.decodeTextSegment(e, r);
                                break;
                            case n.ANSIX12_ENCODE:
                                this.decodeAnsiX12Segment(e, r);
                                break;
                            case n.EDIFACT_ENCODE:
                                this.decodeEdifactSegment(e, r);
                                break;
                            case n.BASE256_ENCODE:
                                this.decodeBase256Segment(e, r, f);
                                break;
                            default:
                                throw new d.default
                        }
                        s = n.ASCII_ENCODE
                    }
                } while (s !== n.PAD_ENCODE && 0 < e.available());
                return 0 < o.length() && r.append(o.toString()), new a.default(t, r.toString(), 0 === f.length ? null : f, null)
            }, t.decodeAsciiSegment = function(t, e, r) {
                var o = !1;
                do {
                    var a = t.readBits(8);
                    if (0 === a) throw new d.default;
                    if (a <= 128) return o && (a += 128), e.append(String.fromCharCode(a - 1)), n.ASCII_ENCODE;
                    if (129 === a) return n.PAD_ENCODE;
                    if (a <= 229) {
                        var i = a - 130;
                        i < 10 && e.append("0"), e.append("" + i)
                    } else switch (a) {
                        case 230:
                            return n.C40_ENCODE;
                        case 231:
                            return n.BASE256_ENCODE;
                        case 232:
                            e.append(String.fromCharCode(29));
                            break;
                        case 233:
                        case 234:
                            break;
                        case 235:
                            o = !0;
                            break;
                        case 236:
                            e.append("[)>05"), r.insert(0, "");
                            break;
                        case 237:
                            e.append("[)>06"), r.insert(0, "");
                            break;
                        case 238:
                            return n.ANSIX12_ENCODE;
                        case 239:
                            return n.TEXT_ENCODE;
                        case 240:
                            return n.EDIFACT_ENCODE;
                        case 241:
                            break;
                        default:
                            if (254 !== a || 0 !== t.available()) throw new d.default
                    }
                } while (0 < t.available());
                return n.ASCII_ENCODE
            }, t.decodeC40Segment = function(t, e) {
                var r = !1,
                    n = [],
                    o = 0;
                do {
                    if (8 === t.available()) return;
                    var a = t.readBits(8);
                    if (254 === a) return;
                    this.parseTwoBytes(a, t.readBits(8), n);
                    for (var i = 0; i < 3; i++) {
                        var u = n[i];
                        switch (o) {
                            case 0:
                                if (u < 3) o = u + 1;
                                else {
                                    if (!(u < this.C40_BASIC_SET_CHARS.length)) throw new d.default;
                                    var f = this.C40_BASIC_SET_CHARS[u];
                                    r ? (e.append(String.fromCharCode(f.charCodeAt(0) + 128)), r = !1) : e.append(f)
                                }
                                break;
                            case 1:
                                r ? (e.append(String.fromCharCode(u + 128)), r = !1) : e.append(String.fromCharCode(u)), o = 0;
                                break;
                            case 2:
                                if (u < this.C40_SHIFT2_SET_CHARS.length) f = this.C40_SHIFT2_SET_CHARS[u], r ? (e.append(String.fromCharCode(f.charCodeAt(0) + 128)), r = !1) : e.append(f);
                                else switch (u) {
                                    case 27:
                                        e.append(String.fromCharCode(29));
                                        break;
                                    case 30:
                                        r = !0;
                                        break;
                                    default:
                                        throw new d.default
                                }
                                o = 0;
                                break;
                            case 3:
                                r ? (e.append(String.fromCharCode(u + 224)), r = !1) : e.append(String.fromCharCode(u + 96)), o = 0;
                                break;
                            default:
                                throw new d.default
                        }
                    }
                } while (0 < t.available())
            }, t.decodeTextSegment = function(t, e) {
                var r = !1,
                    n = [],
                    o = 0;
                do {
                    if (8 === t.available()) return;
                    var a = t.readBits(8);
                    if (254 === a) return;
                    this.parseTwoBytes(a, t.readBits(8), n);
                    for (var i = 0; i < 3; i++) {
                        var u = n[i];
                        switch (o) {
                            case 0:
                                if (u < 3) o = u + 1;
                                else {
                                    if (!(u < this.TEXT_BASIC_SET_CHARS.length)) throw new d.default;
                                    var f = this.TEXT_BASIC_SET_CHARS[u];
                                    r ? (e.append(String.fromCharCode(f.charCodeAt(0) + 128)), r = !1) : e.append(f)
                                }
                                break;
                            case 1:
                                r ? (e.append(String.fromCharCode(u + 128)), r = !1) : e.append(String.fromCharCode(u)), o = 0;
                                break;
                            case 2:
                                if (u < this.TEXT_SHIFT2_SET_CHARS.length) f = this.TEXT_SHIFT2_SET_CHARS[u], r ? (e.append(String.fromCharCode(f.charCodeAt(0) + 128)), r = !1) : e.append(f);
                                else switch (u) {
                                    case 27:
                                        e.append(String.fromCharCode(29));
                                        break;
                                    case 30:
                                        r = !0;
                                        break;
                                    default:
                                        throw new d.default
                                }
                                o = 0;
                                break;
                            case 3:
                                if (!(u < this.TEXT_SHIFT3_SET_CHARS.length)) throw new d.default;
                                f = this.TEXT_SHIFT3_SET_CHARS[u], r ? (e.append(String.fromCharCode(f.charCodeAt(0) + 128)), r = !1) : e.append(f), o = 0;
                                break;
                            default:
                                throw new d.default
                        }
                    }
                } while (0 < t.available())
            }, t.decodeAnsiX12Segment = function(t, e) {
                var r = [];
                do {
                    if (8 === t.available()) return;
                    var n = t.readBits(8);
                    if (254 === n) return;
                    this.parseTwoBytes(n, t.readBits(8), r);
                    for (var o = 0; o < 3; o++) {
                        var a = r[o];
                        switch (a) {
                            case 0:
                                e.append("\r");
                                break;
                            case 1:
                                e.append("*");
                                break;
                            case 2:
                                e.append(">");
                                break;
                            case 3:
                                e.append(" ");
                                break;
                            default:
                                if (a < 14) e.append(String.fromCharCode(a + 44));
                                else {
                                    if (!(a < 40)) throw new d.default;
                                    e.append(String.fromCharCode(a + 51))
                                }
                        }
                    }
                } while (0 < t.available())
            }, t.parseTwoBytes = function(t, e, r) {
                var n = (t << 8) + e - 1,
                    o = Math.floor(n / 1600);
                n -= 1600 * (r[0] = o), o = Math.floor(n / 40), r[1] = o, r[2] = n - 40 * o
            }, t.decodeEdifactSegment = function(t, e) {
                do {
                    if (t.available() <= 16) return;
                    for (var r = 0; r < 4; r++) {
                        var n = t.readBits(6);
                        if (31 === n) {
                            var o = 8 - t.getBitOffset();
                            return void(8 !== o && t.readBits(o))
                        }
                        0 == (32 & n) && (n |= 64), e.append(String.fromCharCode(n))
                    }
                } while (0 < t.available())
            }, t.decodeBase256Segment = function(t, e, r) {
                var n, o = 1 + t.getByteOffset(),
                    a = this.unrandomize255State(t.readBits(8), o++);
                if ((n = 0 === a ? t.available() / 8 | 0 : a < 250 ? a : 250 * (a - 249) + this.unrandomize255State(t.readBits(8), o++)) < 0) throw new d.default;
                for (var i = new Uint8Array(n), u = 0; u < n; u++) {
                    if (t.available() < 8) throw new d.default;
                    i[u] = this.unrandomize255State(t.readBits(8), o++)
                }
                r.push(i);
                try {
                    e.append(f.default.decode(i, s.StringUtils.ISO88591))
                } catch (t) {
                    throw new l.default("Platform does not support required encoding: " + t.message)
                }
            }, t.unrandomize255State = function(t, e) {
                var r = t - (149 * e % 255 + 1);
                return 0 <= r ? r : r + 256
            }, t.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], t.C40_SHIFT2_SET_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"], t.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], t.TEXT_SHIFT2_SET_CHARS = t.C40_SHIFT2_SET_CHARS, t.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", String.fromCharCode(127)], t
        }();
        e.default = c
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(3),
            o = r(36),
            a = r(37),
            i = r(13),
            u = r(59),
            f = r(0),
            s = function() {
                function t(t) {
                    this.image = t, this.rectangleDetector = new u.default(t)
                }
                return t.prototype.detect = function() {
                    var e = this.rectangleDetector.detect(),
                        r = e[0],
                        a = e[1],
                        i = e[2],
                        u = e[3],
                        s = [];
                    s.push(this.transitionsBetween(r, a)), s.push(this.transitionsBetween(r, i)), s.push(this.transitionsBetween(a, u)), s.push(this.transitionsBetween(i, u)), s.sort(d.resultPointsAndTransitionsComparator);
                    var l = s[0],
                        c = s[1],
                        h = new Map;
                    t.increment(h, l.getFrom()), t.increment(h, l.getTo()), t.increment(h, c.getFrom()), t.increment(h, c.getTo());
                    for (var p = null, w = null, g = null, _ = 0, v = Array.from(h.entries()); _ < v.length; _++) {
                        var y = v[_],
                            E = y[0];
                        2 === y[1] ? w = E : null == p ? p = E : g = E
                    }
                    if (null == p || null == w || null == g) throw new f.default;
                    var A = [p, w, g];
                    n.default.orderBestPatterns(A);
                    var C = A[0];
                    w = A[1];
                    var m, S = A[2];
                    m = h.has(r) ? h.has(a) ? h.has(i) ? u : i : a : r;
                    var I, O, T = this.transitionsBetween(S, m).getTransitions(),
                        M = this.transitionsBetween(C, m).getTransitions();
                    if (1 == (1 & T) && T++, 1 == (1 & M) && M++, 7 * (M += 2) <= 4 * (T += 2) || 7 * T <= 4 * M) null == (O = this.correctTopRightRectangular(w, C, S, m, T, M)) && (O = m), 1 == (1 & (T = this.transitionsBetween(S, O).getTransitions())) && T++, 1 == (1 & (M = this.transitionsBetween(C, O).getTransitions())) && M++, I = t.sampleGrid(this.image, S, w, C, O, T, M);
                    else {
                        var b = Math.min(M, T);
                        null == (O = this.correctTopRight(w, C, S, m, b)) && (O = m);
                        var N = Math.max(this.transitionsBetween(S, O).getTransitions(), this.transitionsBetween(C, O).getTransitions());
                        1 == (1 & ++N) && N++, I = t.sampleGrid(this.image, S, w, C, O, N, N)
                    }
                    return new o.default(I, [S, w, C, O])
                }, t.prototype.correctTopRightRectangular = function(e, r, o, a, i, u) {
                    var f = t.distance(e, r) / i,
                        s = t.distance(o, a),
                        d = (a.getX() - o.getX()) / s,
                        l = (a.getY() - o.getY()) / s,
                        c = new n.default(a.getX() + f * d, a.getY() + f * l);
                    f = t.distance(e, o) / u, s = t.distance(r, a), d = (a.getX() - r.getX()) / s, l = (a.getY() - r.getY()) / s;
                    var h = new n.default(a.getX() + f * d, a.getY() + f * l);
                    return this.isValid(c) ? this.isValid(h) ? Math.abs(i - this.transitionsBetween(o, c).getTransitions()) + Math.abs(u - this.transitionsBetween(r, c).getTransitions()) <= Math.abs(i - this.transitionsBetween(o, h).getTransitions()) + Math.abs(u - this.transitionsBetween(r, h).getTransitions()) ? c : h : c : this.isValid(h) ? h : null
                }, t.prototype.correctTopRight = function(e, r, o, a, i) {
                    var u = t.distance(e, r) / i,
                        f = t.distance(o, a),
                        s = (a.getX() - o.getX()) / f,
                        d = (a.getY() - o.getY()) / f,
                        l = new n.default(a.getX() + u * s, a.getY() + u * d);
                    u = t.distance(e, o) / i, f = t.distance(r, a), s = (a.getX() - r.getX()) / f, d = (a.getY() - r.getY()) / f;
                    var c = new n.default(a.getX() + u * s, a.getY() + u * d);
                    return this.isValid(l) ? this.isValid(c) ? Math.abs(this.transitionsBetween(o, l).getTransitions() - this.transitionsBetween(r, l).getTransitions()) <= Math.abs(this.transitionsBetween(o, c).getTransitions() - this.transitionsBetween(r, c).getTransitions()) ? l : c : l : this.isValid(c) ? c : null
                }, t.prototype.isValid = function(t) {
                    return 0 <= t.getX() && t.getX() < this.image.getWidth() && 0 < t.getY() && t.getY() < this.image.getHeight()
                }, t.distance = function(t, e) {
                    return i.default.round(n.default.distance(t, e))
                }, t.increment = function(t, e) {
                    var r = t.get(e);
                    t.set(e, null == r ? 1 : r + 1)
                }, t.sampleGrid = function(t, e, r, n, o, i, u) {
                    return a.default.getInstance().sampleGrid(t, i, u, .5, .5, i - .5, .5, i - .5, u - .5, .5, u - .5, e.getX(), e.getY(), o.getX(), o.getY(), n.getX(), n.getY(), r.getX(), r.getY())
                }, t.prototype.transitionsBetween = function(t, e) {
                    var r = 0 | t.getX(),
                        n = 0 | t.getY(),
                        o = 0 | e.getX(),
                        a = 0 | e.getY(),
                        i = Math.abs(a - n) > Math.abs(o - r);
                    if (i) {
                        var u = r;
                        r = n, n = u, u = o, o = a, a = u
                    }
                    for (var f = Math.abs(o - r), s = Math.abs(a - n), l = -f / 2, c = n < a ? 1 : -1, h = r < o ? 1 : -1, p = 0, w = this.image.get(i ? n : r, i ? r : n), g = r, _ = n; g !== o; g += h) {
                        var v = this.image.get(i ? _ : g, i ? g : _);
                        if (v !== w && (p++, w = v), 0 < (l += s)) {
                            if (_ === a) break;
                            _ += c, l -= f
                        }
                    }
                    return new d(t, e, p)
                }, t
            }();
        e.default = s;
        var d = function() {
            function t(t, e, r) {
                this.from = t, this.to = e, this.transitions = r
            }
            return t.prototype.getFrom = function() {
                return this.from
            }, t.prototype.getTo = function() {
                return this.to
            }, t.prototype.getTransitions = function() {
                return this.transitions
            }, t.prototype.toString = function() {
                return this.from + "/" + this.to + "/" + this.transitions
            }, t.resultPointsAndTransitionsComparator = function(t, e) {
                return t.getTransitions() - e.getTransitions()
            }, t
        }()
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(26),
            o = r(40),
            a = r(25),
            i = r(1),
            u = r(20),
            f = function() {
                function t() {}
                return t.prototype.write = function(e, r, u, f) {
                    if (void 0 === f && (f = null), 0 === e.length) throw new i.default("Found empty contents");
                    if (r < 0 || u < 0) throw new i.default("Requested dimensions are too small: " + r + "x" + u);
                    var s = a.default.L,
                        d = t.QUIET_ZONE_SIZE;
                    null !== f && (void 0 !== f.get(n.default.ERROR_CORRECTION) && (s = a.default.fromString(f.get(n.default.ERROR_CORRECTION).toString())), void 0 !== f.get(n.default.MARGIN) && (d = Number.parseInt(f.get(n.default.MARGIN).toString(), 10)));
                    var l = o.default.encode(e, s, f);
                    return this.renderResult(l, r, u, d)
                }, t.prototype.writeToDom = function(t, e, r, n, o) {
                    void 0 === o && (o = null), "string" == typeof t && (t = document.querySelector(t));
                    var a = this.write(e, r, n, o);
                    t && t.appendChild(a)
                }, t.prototype.renderResult = function(t, e, r, n) {
                    var o = t.getMatrix();
                    if (null === o) throw new u.default;
                    for (var a = o.getWidth(), i = o.getHeight(), f = a + 2 * n, s = i + 2 * n, d = Math.max(e, f), l = Math.max(r, s), c = Math.min(Math.floor(d / f), Math.floor(l / s)), h = Math.floor((d - a * c) / 2), p = Math.floor((l - i * c) / 2), w = this.createSVGElement(d, l), g = 0, _ = p; g < i; g++, _ += c)
                        for (var v = 0, y = h; v < a; v++, y += c)
                            if (1 === o.get(v, g)) {
                                var E = this.createSvgRectElement(y, _, c, c);
                                w.appendChild(E)
                            }
                    return w
                }, t.prototype.createSVGElement = function(e, r) {
                    var n = document.createElementNS(t.SVG_NS, "svg");
                    return n.setAttributeNS(null, "height", e.toString()), n.setAttributeNS(null, "width", r.toString()), n
                }, t.prototype.createSvgRectElement = function(e, r, n, o) {
                    var a = document.createElementNS(t.SVG_NS, "rect");
                    return a.setAttributeNS(null, "x", e.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "height", n.toString()), a.setAttributeNS(null, "width", o.toString()), a.setAttributeNS(null, "fill", "#000000"), a
                }, t.QUIET_ZONE_SIZE = 4, t.SVG_NS = "http://www.w3.org/2000/svg", t
            }();
        e.BrowserQRCodeSvgWriter = f
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(28),
            o = r(11),
            a = function() {
                function t(t, e) {
                    this.width = t, this.height = e;
                    for (var r = new Array(e), n = 0; n !== e; n++) r[n] = new Uint8Array(t);
                    this.bytes = r
                }
                return t.prototype.getHeight = function() {
                    return this.height
                }, t.prototype.getWidth = function() {
                    return this.width
                }, t.prototype.get = function(t, e) {
                    return this.bytes[e][t]
                }, t.prototype.getArray = function() {
                    return this.bytes
                }, t.prototype.setNumber = function(t, e, r) {
                    this.bytes[e][t] = r
                }, t.prototype.setBoolean = function(t, e, r) {
                    this.bytes[e][t] = r ? 1 : 0
                }, t.prototype.clear = function(t) {
                    for (var e = 0, r = this.bytes; e < r.length; e++) {
                        var o = r[e];
                        n.default.fillUint8Array(o, t)
                    }
                }, t.prototype.equals = function(e) {
                    if (!(e instanceof t)) return !1;
                    var r = e;
                    if (this.width !== r.width) return !1;
                    if (this.height !== r.height) return !1;
                    for (var n = 0, o = this.height; n < o; ++n)
                        for (var a = this.bytes[n], i = r.bytes[n], u = 0, f = this.width; u < f; ++u)
                            if (a[u] !== i[u]) return !1;
                    return !0
                }, t.prototype.toString = function() {
                    for (var t = new o.default, e = 0, r = this.height; e < r; ++e) {
                        for (var n = this.bytes[e], a = 0, i = this.width; a < i; ++a) switch (n[a]) {
                            case 0:
                                t.append(" 0");
                                break;
                            case 1:
                                t.append(" 1");
                                break;
                            default:
                                t.append("  ")
                        }
                        t.append("\n")
                    }
                    return t.toString()
                }, t
            }();
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(15),
            o = r(23),
            a = r(41),
            i = r(61),
            u = r(42),
            f = r(1),
            s = function() {
                function t() {}
                return t.clearMatrix = function(t) {
                    t.clear(255)
                }, t.buildMatrix = function(e, r, n, o, a) {
                    t.clearMatrix(a), t.embedBasicPatterns(n, a), t.embedTypeInfo(r, o, a), t.maybeEmbedVersionInfo(n, a), t.embedDataBits(e, o, a)
                }, t.embedBasicPatterns = function(e, r) {
                    t.embedPositionDetectionPatternsAndSeparators(r), t.embedDarkDotAtLeftBottomCorner(r), t.maybeEmbedPositionAdjustmentPatterns(e, r), t.embedTimingPatterns(r)
                }, t.embedTypeInfo = function(e, r, o) {
                    var a = new n.default;
                    t.makeTypeInfoBits(e, r, a);
                    for (var i = 0, u = a.getSize(); i < u; ++i) {
                        var f = a.get(a.getSize() - 1 - i),
                            s = t.TYPE_INFO_COORDINATES[i],
                            d = s[0],
                            l = s[1];
                        if (o.setBoolean(d, l, f), i < 8) {
                            var c = o.getWidth() - i - 1,
                                h = 8;
                            o.setBoolean(c, h, f)
                        } else c = 8, h = o.getHeight() - 7 + (i - 8), o.setBoolean(c, h, f)
                    }
                }, t.maybeEmbedVersionInfo = function(e, r) {
                    if (!(e.getVersionNumber() < 7)) {
                        var o = new n.default;
                        t.makeVersionInfoBits(e, o);
                        for (var a = 17, i = 0; i < 6; ++i)
                            for (var u = 0; u < 3; ++u) {
                                var f = o.get(a);
                                a--, r.setBoolean(i, r.getHeight() - 11 + u, f), r.setBoolean(r.getHeight() - 11 + u, i, f)
                            }
                    }
                }, t.embedDataBits = function(e, r, n) {
                    for (var o = 0, a = -1, f = n.getWidth() - 1, s = n.getHeight() - 1; 0 < f;) {
                        for (6 === f && (f -= 1); 0 <= s && s < n.getHeight();) {
                            for (var d = 0; d < 2; ++d) {
                                var l = f - d;
                                if (t.isEmpty(n.get(l, s))) {
                                    var c = void 0;
                                    o < e.getSize() ? (c = e.get(o), ++o) : c = !1, 255 !== r && i.default.getDataMaskBit(r, l, s) && (c = !c), n.setBoolean(l, s, c)
                                }
                            }
                            s += a
                        }
                        s += a = -a, f -= 2
                    }
                    if (o !== e.getSize()) throw new u.default("Not all bits consumed: " + o + "/" + e.getSize())
                }, t.findMSBSet = function(t) {
                    return 32 - o.default.numberOfLeadingZeros(t)
                }, t.calculateBCHCode = function(e, r) {
                    if (0 === r) throw new f.default("0 polynomial");
                    var n = t.findMSBSet(r);
                    for (e <<= n - 1; t.findMSBSet(e) >= n;) e ^= r << t.findMSBSet(e) - n;
                    return e
                }, t.makeTypeInfoBits = function(e, r, o) {
                    if (!a.default.isValidMaskPattern(r)) throw new u.default("Invalid mask pattern");
                    var i = e.getBits() << 3 | r;
                    o.appendBits(i, 5);
                    var f = t.calculateBCHCode(i, t.TYPE_INFO_POLY);
                    o.appendBits(f, 10);
                    var s = new n.default;
                    if (s.appendBits(t.TYPE_INFO_MASK_PATTERN, 15), o.xor(s), 15 !== o.getSize()) throw new u.default("should not happen but we got: " + o.getSize())
                }, t.makeVersionInfoBits = function(e, r) {
                    r.appendBits(e.getVersionNumber(), 6);
                    var n = t.calculateBCHCode(e.getVersionNumber(), t.VERSION_INFO_POLY);
                    if (r.appendBits(n, 12), 18 !== r.getSize()) throw new u.default("should not happen but we got: " + r.getSize())
                }, t.isEmpty = function(t) {
                    return 255 === t
                }, t.embedTimingPatterns = function(e) {
                    for (var r = 8; r < e.getWidth() - 8; ++r) {
                        var n = (r + 1) % 2;
                        t.isEmpty(e.get(r, 6)) && e.setNumber(r, 6, n), t.isEmpty(e.get(6, r)) && e.setNumber(6, r, n)
                    }
                }, t.embedDarkDotAtLeftBottomCorner = function(t) {
                    if (0 === t.get(8, t.getHeight() - 8)) throw new u.default;
                    t.setNumber(8, t.getHeight() - 8, 1)
                }, t.embedHorizontalSeparationPattern = function(e, r, n) {
                    for (var o = 0; o < 8; ++o) {
                        if (!t.isEmpty(n.get(e + o, r))) throw new u.default;
                        n.setNumber(e + o, r, 0)
                    }
                }, t.embedVerticalSeparationPattern = function(e, r, n) {
                    for (var o = 0; o < 7; ++o) {
                        if (!t.isEmpty(n.get(e, r + o))) throw new u.default;
                        n.setNumber(e, r + o, 0)
                    }
                }, t.embedPositionAdjustmentPattern = function(e, r, n) {
                    for (var o = 0; o < 5; ++o)
                        for (var a = t.POSITION_ADJUSTMENT_PATTERN[o], i = 0; i < 5; ++i) n.setNumber(e + i, r + o, a[i])
                }, t.embedPositionDetectionPattern = function(e, r, n) {
                    for (var o = 0; o < 7; ++o)
                        for (var a = t.POSITION_DETECTION_PATTERN[o], i = 0; i < 7; ++i) n.setNumber(e + i, r + o, a[i])
                }, t.embedPositionDetectionPatternsAndSeparators = function(e) {
                    var r = t.POSITION_DETECTION_PATTERN[0].length;
                    t.embedPositionDetectionPattern(0, 0, e), t.embedPositionDetectionPattern(e.getWidth() - r, 0, e), t.embedPositionDetectionPattern(0, e.getWidth() - r, e), t.embedHorizontalSeparationPattern(0, 7, e), t.embedHorizontalSeparationPattern(e.getWidth() - 8, 7, e), t.embedHorizontalSeparationPattern(0, e.getWidth() - 8, e), t.embedVerticalSeparationPattern(7, 0, e), t.embedVerticalSeparationPattern(e.getHeight() - 7 - 1, 0, e), t.embedVerticalSeparationPattern(7, e.getHeight() - 7, e)
                }, t.maybeEmbedPositionAdjustmentPatterns = function(e, r) {
                    if (!(e.getVersionNumber() < 2))
                        for (var n = e.getVersionNumber() - 1, o = t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[n], a = 0, i = o.length; a !== i; a++) {
                            var u = o[a];
                            if (0 <= u)
                                for (var f = 0; f !== i; f++) {
                                    var s = o[f];
                                    0 <= s && t.isEmpty(r.get(s, u)) && t.embedPositionAdjustmentPattern(s - 2, u - 2, r)
                                }
                        }
                }, t.POSITION_DETECTION_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])]), t.POSITION_ADJUSTMENT_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])]), t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50, 76, 102, 128, 154]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54, 82, 110, 138, 166]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])]), t.TYPE_INFO_COORDINATES = Array.from([Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])]), t.VERSION_INFO_POLY = 7973, t.TYPE_INFO_POLY = 1335, t.TYPE_INFO_MASK_PATTERN = 21522, t
            }();
        e.default = s
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                this.dataBytes = t, this.errorCorrectionBytes = e
            }
            return t.prototype.getDataBytes = function() {
                return this.dataBytes
            }, t.prototype.getErrorCorrectionBytes = function() {
                return this.errorCorrectionBytes
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(17),
            i = r(43),
            u = function(t) {
                function e(e, r) {
                    return void 0 === e && (e = 500), t.call(this, new i.default(r), e, r) || this
                }
                return o(e, t), e
            }(a.BrowserCodeReader);
        e.BrowserBarcodeReader = u
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(10),
            i = r(0),
            u = r(13),
            f = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.decodeFinderCounters = new Array(4), e.dataCharacterCounters = new Array(8), e.oddRoundingErrors = new Array(4), e.evenRoundingErrors = new Array(4), e.oddCounts = new Array(e.dataCharacterCounters.length / 2), e.evenCounts = new Array(e.dataCharacterCounters.length / 2), e
                }
                return o(e, t), e.prototype.getDecodeFinderCounters = function() {
                    return this.decodeFinderCounters
                }, e.prototype.getDataCharacterCounters = function() {
                    return this.dataCharacterCounters
                }, e.prototype.getOddRoundingErrors = function() {
                    return this.oddRoundingErrors
                }, e.prototype.getEvenRoundingErrors = function() {
                    return this.evenRoundingErrors
                }, e.prototype.getOddCounts = function() {
                    return this.oddCounts
                }, e.prototype.getEvenCounts = function() {
                    return this.evenCounts
                }, e.prototype.parseFinderValue = function(t, r) {
                    for (var n = 0; n < r.length; n++)
                        if (a.default.patternMatchVariance(t, r[n], e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) return n;
                    throw new i.default
                }, e.count = function(t) {
                    return u.default.sum(new Int32Array(t))
                }, e.increment = function(t, e) {
                    for (var r = 0, n = e[0], o = 1; o < t.length; o++) e[o] > n && (n = e[o], r = o);
                    t[r]++
                }, e.decrement = function(t, e) {
                    for (var r = 0, n = e[0], o = 1; o < t.length; o++) e[o] < n && (n = e[o], r = o);
                    t[r]--
                }, e.isFinderPattern = function(t) {
                    var r = t[0] + t[1],
                        n = r / (r + t[2] + t[3]);
                    if (e.MIN_FINDER_PATTERN_RATIO <= n && n <= e.MAX_FINDER_PATTERN_RATIO) {
                        for (var o = Number.MAX_SAFE_INTEGER, a = Number.MIN_SAFE_INTEGER, i = 0, u = t; i < u.length; i++) {
                            var f = u[i];
                            a < f && (a = f), f < o && (o = f)
                        }
                        return a < 10 * o
                    }
                    return !1
                }, e.MAX_AVG_VARIANCE = .2, e.MAX_INDIVIDUAL_VARIANCE = .45, e.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, e.MAX_FINDER_PATTERN_RATIO = 12.5 / 14, e
            }(a.default);
        e.default = f
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function e(e, r, n) {
                var o = t.call(this, e, r) || this;
                return o.count = 0, o.finderPattern = n, o
            }
            return o(e, t), e.prototype.getFinderPattern = function() {
                return this.finderPattern
            }, e.prototype.getCount = function() {
                return this.count
            }, e.prototype.incrementCount = function() {
                this.count++
            }, e
        }(r(65).default);
        e.default = a
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(3),
            o = function() {
                function t(t, e, r, o, a) {
                    this.value = t, this.startEnd = e, this.value = t, this.startEnd = e, this.resultPoints = new Array, this.resultPoints.push(new n.default(r, a)), this.resultPoints.push(new n.default(o, a))
                }
                return t.prototype.getValue = function() {
                    return this.value
                }, t.prototype.getStartEnd = function() {
                    return this.startEnd
                }, t.prototype.getResultPoints = function() {
                    return this.resultPoints
                }, t.prototype.equals = function(e) {
                    if (!(e instanceof t)) return !1;
                    var r = e;
                    return this.value === r.value
                }, t.prototype.hashCode = function() {
                    return this.value
                }, t
            }();
        e.default = o
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.prototype.RSSUtils = function() {}, t.getRSSvalue = function(e, r, n) {
                for (var o = 0, a = 0, i = e; a < i.length; a++) o += i[a];
                for (var u = 0, f = 0, s = e.length, d = 0; d < s - 1; d++) {
                    var l = void 0;
                    for (f |= (l = 1) << d; l < e[d]; l++, f &= ~(1 << d)) {
                        var c = t.combins(o - l - 1, s - d - 2);
                        if (n && 0 === f && s - d - 1 <= o - l - (s - d - 1) && (c -= t.combins(o - l - (s - d), s - d - 2)), 1 < s - d - 1) {
                            for (var h = 0, p = o - l - (s - d - 2); r < p; p--) h += t.combins(o - l - p - 1, s - d - 3);
                            c -= h * (s - 1 - d)
                        } else r < o - l && c--;
                        u += c
                    }
                    o -= l
                }
                return u
            }, t.combins = function(t, e) {
                var r, n;
                r = e < t - e ? t - (n = e) : (n = t - e, e);
                for (var o = 1, a = 1, i = t; r < i; i--) o *= i, a <= n && (o /= a, a++);
                for (; a <= n;) o /= a, a++;
                return o
            }, t
        }();
        e.default = n
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(2),
            i = r(4),
            u = r(10),
            f = r(67),
            s = r(108),
            d = r(0),
            l = function(t) {
                function e(e) {
                    var r = t.call(this) || this,
                        n = null == e ? null : e.get(i.default.POSSIBLE_FORMATS),
                        o = [];
                    return null != n && (-1 < n.indexOf(a.default.EAN_13) && o.push(new f.default), -1 < n.indexOf(a.default.EAN_8) && o.push(new s.default)), 0 === o.length && (o.push(new f.default), o.push(new s.default)), r.readers = o, r
                }
                return o(e, t), e.prototype.decodeRow = function(t, e, r) {
                    for (var n = 0, o = this.readers; n < o.length; n++) {
                        var a = o[n];
                        try {
                            return a.decodeRow(t, e, r)
                        } catch (t) {}
                    }
                    throw new d.default
                }, e.prototype.reset = function() {
                    for (var t = 0, e = this.readers; t < e.length; t++) e[t].reset()
                }, e
            }(u.default);
        e.default = l
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(22),
            o = r(106),
            a = r(107),
            i = function() {
                function t() {}
                return t.decodeRow = function(t, e, r) {
                    var i = n.default.findGuardPattern(e, r, !1, this.EXTENSION_START_PATTERN, new Array(this.EXTENSION_START_PATTERN.length).fill(0));
                    try {
                        return (new o.default).decodeRow(t, e, i)
                    } catch (r) {
                        return (new a.default).decodeRow(t, e, i)
                    }
                }, t.EXTENSION_START_PATTERN = [1, 1, 2], t
            }();
        e.default = i
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(2),
            o = r(22),
            a = r(9),
            i = r(3),
            u = r(14),
            f = r(0),
            s = function() {
                function t() {
                    this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = [0, 0, 0, 0], this.decodeRowStringBuffer = ""
                }
                return t.prototype.decodeRow = function(e, r, o) {
                    var u = this.decodeRowStringBuffer,
                        f = this.decodeMiddle(r, o, u),
                        s = u.toString(),
                        d = t.parseExtensionString(s),
                        l = [new i.default((o[0] + o[1]) / 2, e), new i.default(f, e)],
                        c = new a.default(s, null, 0, l, n.default.UPC_EAN_EXTENSION, (new Date).getTime());
                    return null != d && c.putAllMetadata(d), c
                }, t.prototype.decodeMiddle = function(e, r, n) {
                    var a = this.decodeMiddleCounters;
                    a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0;
                    for (var i = e.getSize(), u = r[1], s = 0, d = 0; d < 5 && u < i; d++) {
                        var l = o.default.decodeDigit(e, a, u, o.default.L_AND_G_PATTERNS);
                        n += String.fromCharCode("0".charCodeAt(0) + l % 10);
                        for (var c = 0, h = a; c < h.length; c++) u += h[c];
                        10 <= l && (s |= 1 << 4 - d), 4 !== d && (u = e.getNextSet(u), u = e.getNextUnset(u))
                    }
                    if (5 !== n.length) throw new f.default;
                    var p = this.determineCheckDigit(s);
                    if (t.extensionChecksum(n.toString()) !== p) throw new f.default;
                    return u
                }, t.extensionChecksum = function(t) {
                    for (var e = t.length, r = 0, n = e - 2; 0 <= n; n -= 2) r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                    for (r *= 3, n = e - 1; 0 <= n; n -= 2) r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                    return (r *= 3) % 10
                }, t.prototype.determineCheckDigit = function(t) {
                    for (var e = 0; e < 10; e++)
                        if (t === this.CHECK_DIGIT_ENCODINGS[e]) return e;
                    throw new f.default
                }, t.parseExtensionString = function(e) {
                    if (5 !== e.length) return null;
                    var r = t.parseExtension5String(e);
                    return null == r ? null : new Map([
                        [u.default.SUGGESTED_PRICE, r]
                    ])
                }, t.parseExtension5String = function(t) {
                    var e;
                    switch (t.charAt(0)) {
                        case "0":
                            e = "??";
                            break;
                        case "5":
                            e = "$";
                            break;
                        case "9":
                            switch (t) {
                                case "90000":
                                    return null;
                                case "99991":
                                    return "0.00";
                                case "99990":
                                    return "Used"
                            }
                            e = "";
                            break;
                        default:
                            e = ""
                    }
                    var r = parseInt(t.substring(1)),
                        n = r % 100;
                    return e + (r / 100).toString() + "." + (n < 10 ? "0" + n : n.toString())
                }, t
            }();
        e.default = s
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(2),
            o = r(22),
            a = r(9),
            i = r(3),
            u = r(14),
            f = r(0),
            s = function() {
                function t() {
                    this.decodeMiddleCounters = [0, 0, 0, 0], this.decodeRowStringBuffer = ""
                }
                return t.prototype.decodeRow = function(e, r, o) {
                    var u = this.decodeRowStringBuffer,
                        f = this.decodeMiddle(r, o, u),
                        s = u.toString(),
                        d = t.parseExtensionString(s),
                        l = [new i.default((o[0] + o[1]) / 2, e), new i.default(f, e)],
                        c = new a.default(s, null, 0, l, n.default.UPC_EAN_EXTENSION, (new Date).getTime());
                    return null != d && c.putAllMetadata(d), c
                }, t.prototype.decodeMiddle = function(t, e, r) {
                    var n = this.decodeMiddleCounters;
                    n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                    for (var a = t.getSize(), i = e[1], u = 0, s = 0; s < 2 && i < a; s++) {
                        var d = o.default.decodeDigit(t, n, i, o.default.L_AND_G_PATTERNS);
                        r += String.fromCharCode("0".charCodeAt(0) + d % 10);
                        for (var l = 0, c = n; l < c.length; l++) i += c[l];
                        10 <= d && (u |= 1 << 1 - s), 1 !== s && (i = t.getNextSet(i), i = t.getNextUnset(i))
                    }
                    if (2 !== r.length) throw new f.default;
                    if (parseInt(r.toString()) % 4 !== u) throw new f.default;
                    return i
                }, t.parseExtensionString = function(t) {
                    return 2 !== t.length ? null : new Map([
                        [u.default.ISSUE_NUMBER, parseInt(t)]
                    ])
                }, t
            }();
        e.default = s
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(2),
            i = r(22),
            u = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.decodeMiddleCounters = [0, 0, 0, 0], e
                }
                return o(e, t), e.prototype.decodeMiddle = function(t, e, r) {
                    var n = this.decodeMiddleCounters;
                    n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                    for (var o = t.getSize(), a = e[1], u = 0; u < 4 && a < o; u++) {
                        var f = i.default.decodeDigit(t, n, a, i.default.L_PATTERNS);
                        r += String.fromCharCode("0".charCodeAt(0) + f);
                        for (var s = 0, d = n; s < d.length; s++) a += d[s]
                    }
                    for (a = i.default.findGuardPattern(t, a, !0, i.default.MIDDLE_PATTERN, new Array(i.default.MIDDLE_PATTERN.length).fill(0))[1], u = 0; u < 4 && a < o; u++) {
                        f = i.default.decodeDigit(t, n, a, i.default.L_PATTERNS), r += String.fromCharCode("0".charCodeAt(0) + f);
                        for (var l = 0, c = n; l < c.length; l++) a += c[l]
                    }
                    return {
                        rowOffset: a,
                        resultString: r
                    }
                }, e.prototype.getBarcodeFormat = function() {
                    return a.default.EAN_8
                }, e
            }(i.default);
        e.default = u
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(17),
            i = r(68),
            u = function(t) {
                function e(e, r) {
                    void 0 === e && (e = null), void 0 === r && (r = 500);
                    var n = new i.default;
                    return n.setHints(e), t.call(this, n, r) || this
                }
                return o(e, t), e.prototype.decodeBitmap = function(t) {
                    return this.reader.decodeWithState(t)
                }, e
            }(a.BrowserCodeReader);
        e.BrowserMultiFormatReader = u
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(70),
            o = r(2),
            a = r(1),
            i = function() {
                function t() {}
                return t.prototype.encode = function(t, e, r, i, u) {
                    var f;
                    switch (e) {
                        case o.default.QR_CODE:
                            f = new n.default;
                            break;
                        default:
                            throw new a.default("No encoder available for format " + e)
                    }
                    return f.encode(t, e, r, i, u)
                }, t
            }();
        e.default = i
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(7),
            i = r(19),
            u = r(18),
            f = r(1),
            s = function(t) {
                function e(e, r, n, o, a, i, u, s) {
                    var d = t.call(this, i, u) || this;
                    if (d.yuvData = e, d.dataWidth = r, d.dataHeight = n, d.left = o, d.top = a, r < o + i || n < a + u) throw new f.default("Crop rectangle does not fit within image data.");
                    return s && d.reverseHorizontal(i, u), d
                }
                return o(e, t), e.prototype.getRow = function(t, e) {
                    if (t < 0 || t >= this.getHeight()) throw new f.default("Requested row is outside the image: " + t);
                    var r = this.getWidth();
                    (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
                    var n = (t + this.top) * this.dataWidth + this.left;
                    return a.default.arraycopy(this.yuvData, n, e, 0, r), e
                }, e.prototype.getMatrix = function() {
                    var t = this.getWidth(),
                        e = this.getHeight();
                    if (t === this.dataWidth && e === this.dataHeight) return this.yuvData;
                    var r = t * e,
                        n = new Uint8ClampedArray(r),
                        o = this.top * this.dataWidth + this.left;
                    if (t === this.dataWidth) return a.default.arraycopy(this.yuvData, o, n, 0, r), n;
                    for (var i = 0; i < e; i++) {
                        var u = i * t;
                        a.default.arraycopy(this.yuvData, o, n, u, t), o += this.dataWidth
                    }
                    return n
                }, e.prototype.isCropSupported = function() {
                    return !0
                }, e.prototype.crop = function(t, r, n, o) {
                    return new e(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + r, n, o, !1)
                }, e.prototype.renderThumbnail = function() {
                    for (var t = this.getWidth() / e.THUMBNAIL_SCALE_FACTOR, r = this.getHeight() / e.THUMBNAIL_SCALE_FACTOR, n = new Int32Array(t * r), o = this.yuvData, a = this.top * this.dataWidth + this.left, i = 0; i < r; i++) {
                        for (var u = i * t, f = 0; f < t; f++) {
                            var s = 255 & o[a + f * e.THUMBNAIL_SCALE_FACTOR];
                            n[u + f] = 4278190080 | 65793 * s
                        }
                        a += this.dataWidth * e.THUMBNAIL_SCALE_FACTOR
                    }
                    return n
                }, e.prototype.getThumbnailWidth = function() {
                    return this.getWidth() / e.THUMBNAIL_SCALE_FACTOR
                }, e.prototype.getThumbnailHeight = function() {
                    return this.getHeight() / e.THUMBNAIL_SCALE_FACTOR
                }, e.prototype.reverseHorizontal = function(t, e) {
                    for (var r = this.yuvData, n = 0, o = this.top * this.dataWidth + this.left; n < e; n++, o += this.dataWidth)
                        for (var a = o + t / 2, i = o, u = o + t - 1; i < a; i++, u--) {
                            var f = r[i];
                            r[i] = r[u], r[u] = f
                        }
                }, e.prototype.invert = function() {
                    return new u.default(this)
                }, e.THUMBNAIL_SCALE_FACTOR = 2, e
            }(i.default);
        e.default = s
    }, function(t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), r(18);
        var a = r(18),
            i = r(19),
            u = r(7),
            f = r(1),
            s = function(t) {
                function e(e, r, n, o, a, i, u) {
                    var s = t.call(this, r, n) || this;
                    if (s.dataWidth = o, s.dataHeight = a, s.left = i, s.top = u, 4 === e.BYTES_PER_ELEMENT) {
                        for (var d = r * n, l = new Uint8ClampedArray(d), c = 0; c < d; c++) {
                            var h = e[c],
                                p = h >> 16 & 255,
                                w = h >> 7 & 510,
                                g = 255 & h;
                            l[c] = (p + w + g) / 4 & 255
                        }
                        s.luminances = l
                    } else s.luminances = e;
                    if (void 0 === o && (s.dataWidth = r), void 0 === a && (s.dataHeight = n), void 0 === i && (s.left = 0), void 0 === u && (s.top = 0), s.left + r > s.dataWidth || s.top + n > s.dataHeight) throw new f.default("Crop rectangle does not fit within image data.");
                    return s
                }
                return o(e, t), e.prototype.getRow = function(t, e) {
                    if (t < 0 || t >= this.getHeight()) throw new f.default("Requested row is outside the image: " + t);
                    var r = this.getWidth();
                    (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
                    var n = (t + this.top) * this.dataWidth + this.left;
                    return u.default.arraycopy(this.luminances, n, e, 0, r), e
                }, e.prototype.getMatrix = function() {
                    var t = this.getWidth(),
                        e = this.getHeight();
                    if (t === this.dataWidth && e === this.dataHeight) return this.luminances;
                    var r = t * e,
                        n = new Uint8ClampedArray(r),
                        o = this.top * this.dataWidth + this.left;
                    if (t === this.dataWidth) return u.default.arraycopy(this.luminances, o, n, 0, r), n;
                    for (var a = 0; a < e; a++) {
                        var i = a * t;
                        u.default.arraycopy(this.luminances, o, n, i, t), o += this.dataWidth
                    }
                    return n
                }, e.prototype.isCropSupported = function() {
                    return !0
                }, e.prototype.crop = function(t, r, n, o) {
                    return new e(this.luminances, n, o, this.dataWidth, this.dataHeight, this.left + t, this.top + r)
                }, e.prototype.invert = function() {
                    return new a.default(this)
                }, e
            }(i.default);
        e.default = s
    }])
});
//# sourceMappingURL=index.min.js.map