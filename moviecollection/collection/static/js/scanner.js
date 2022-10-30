function log() {
    alert(JSON.stringify(arguments))
}

let codeReader = new ZXing.BrowserBarcodeReader('video');

/*function scanBarcode($event) {
    let filelist = $event.target.files
    if(filelist.length > 0) {
        fileObjectURL = URL.createObjectURL($event.target.files[0]);
        let image = new Image()
        image.addEventListener("load", function() {
            codeReader.decodeFromImage(image).then((result) => {
                alert(result.text)
            }).catch((err) => {
                alert("Error")
            });
        })
        image.src = fileObjectURL
    }
}*/

function stopBarcodeScanner() {
    codeReader.stopStreams()
}

function startBarcodeScanner($event) {
    $('#exampleModal').on("hide.bs.modal", stopBarcodeScanner).modal("show")

    codeReader.decodeFromInputVideoDevice(undefined, 'video').then((result) => {
        $('#exampleModal').modal("hide")
        $($($event.target).data("target")).val(result.text)
    }).catch((err) => {
        alert(err)
    })
}

function readBarcode($event) {
    let filelist = $event.target.files
    if(filelist.length > 0) {
        fileObjectURL = URL.createObjectURL($event.target.files[0]);
        let image = new Image()
        image.addEventListener("load", function() {
            codeReader.decodeFromImage(image).then((result) => {
                $($($event.target).parent().data("target")).val(result.text)
            }).catch((err) => {
                alert("Error")
            });
        })
        image.src = fileObjectURL
    }
}

function initBarcodeScanner() {
    codeReader.getVideoInputDevices().then((videoInputDevices) => {
        if(videoInputDevices.length > 0) {
            $('.barcodescanner input').remove()
            $('.barcodescanner').on("click", startBarcodeScanner)
        } else {
            $('.barcodescanner input').on("change", readBarcode)
        }
        
    })
    .catch((err) => {
        console.error(err)
    })
    
}

$(document).ready(initBarcodeScanner)

