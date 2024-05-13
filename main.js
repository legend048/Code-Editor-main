let htmlCode = `<!DOCTYPE html>
<html>
<head>
    <title>Sample Page</title>            <!--        this is sample code. replace it with your code        -->
</head>
<body>
    <h1 contenteditable=true >Hello, World!</h1>
</body>
</html>`

const editor = ace.edit("editor", {
  theme: "ace/theme/cobalt",
  mode: "ace/mode/html",
});

editor.setValue(htmlCode,1);

let iframeWebPreview;
var iframeDoc; 
window.onload = (e) =>{
iframeWebPreview = document.getElementById('web-plage-preview-iframe')
iframeWebPreview.contentDocument.write(htmlCode);
iframeDoc = iframeWebPreview.contentDocument || iframeWebPreview.contentWindow.document;
}

function updateCode(){
  const html_code = editor.getValue();
  iframeDoc.open();
  iframeDoc .write(html_code);
  iframeDoc.close();
}