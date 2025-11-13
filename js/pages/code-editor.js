//------------- code-ediotr.js -------------//
var codeEditor = function () {

    return {

        //code miror
        codeMiror : function () {
            //mixed mode
            var mixedMode = {
                name: "htmlmixed",
                scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
                   mode: null},
                  {matches: /(text|application)\/(x-)?vb(a|script)/i,
                   mode: "vbscript"}]
            };
            var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
                lineNumbers: true,
                styleActiveLine: true,
                matchBrackets: true,
                theme: 'monokai',
                mode: mixedMode
            });

            //javascript example
            var editor1 = CodeMirror.fromTextArea(document.getElementById("code1"), {
                lineNumbers: true,
                matchBrackets: true,
                theme: 'monokai',
                mode:  "javascript"
            });
            
            editor1.setSize('auto', '100%');

            //css example
            var editor2 = CodeMirror.fromTextArea(document.getElementById("code2"), {
                lineNumbers: true,
                matchBrackets: true,
                theme: 'monokai',
                mode:  "css"
            });

        }
        
    }

}();

$(document).ready(function() {    
    codeEditor.codeMiror(); //Activate codemiror plugin
}); 