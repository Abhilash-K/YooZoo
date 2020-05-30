/**
 * Created by Abhilash K on 3/15/2017.
 */
function download(strData, strFileName, strMimeType)
{
    var D = document,
        A = arguments,
        a = D.createElement("a"),
        d = A[0],
        n = A[1],
        t = A[2] || "text/plain";

//build download link:
a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);


if (window.MSBlobBuilder) { // IE10
    var bb = new MSBlobBuilder();
    bb.append(strData);
    return navigator.msSaveBlob(bb, strFileName);
} /* end if(window.MSBlobBuilder) */



if ('download' in a) { //FF20, CH19
    a.setAttribute("download",n);
    a.innerHTML = "downloading...";
    D.body.appendChild(a);
    setTimeout(function() {
        /*var e = D.createEvent("MouseEvents");
        e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);*/
        var e = new MouseEvent("click",{bubbles: true,
            cancelable: true,
            view: window});
        a.dispatchEvent(e);
        D.body.removeChild(a);
    }, 66);
    return true;
}; /* end if('download' in a) */



//do iframe dataURL download: (older W3)
var f = D.createElement("iframe");
D.body.appendChild(f);
f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
setTimeout(function() {
    D.body.removeChild(f);
}, 333);
return true;
}

function downloadClicked(fileName)
{
    var data = new FormData();
    var fileNameofOutFile = fileName;
    var outputTextField = document.getElementById("OutputText");
    var inputText = outputTextField.value;
    data.append("data" , inputText);
    data.append("fileName", fileNameofOutFile);
    var xhr = new XMLHttpRequest();
    xhr.open( 'post', 'writeFile.php', true );
    xhr.onreadystatechange = function ()
    {
        if(xhr.readyState === 4)
        {
            if(xhr.status === 200 || xhr.status == 0)
            {
                alert("Done!!!");
            }
        }
    }
    xhr.send(data);
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var inputTextField = document.getElementById("InputText");
                inputTextField.innerHTML = "<pre>"+allText+"</pre>" ;
                takeRawinput(inputTextField.textContent);
            }
        }
    }
    rawFile.send(null);
}




