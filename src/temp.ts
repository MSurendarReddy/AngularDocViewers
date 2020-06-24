
    

searchPreviousInPDF(newQuery:string) {
if (newQuery!==this.pdfQuery) {
this.pdfQuery=newQuery;
this.pdfComponent.pdfFindController.executeCommand('find', {
query:this.pdfQuery,
highlightAll:true,
phraseSearch:true,
findPrevious:undefined
 });
 } else {
this.pdfComponent.pdfFindController.executeCommand('findagain', {
query:this.pdfQuery,
highlightAll:true,
phraseSearch:true,
findPrevious:true
 });
 }
 }

