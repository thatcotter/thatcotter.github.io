
$(document).ready(function(){

	console.log("ready")

	var sketchEditor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        matchBrackets: true,
        lineWrapping: true,
        mode: "text/x-csrc"
      });

	sketchEditor.setOption("theme", "solarized");

})