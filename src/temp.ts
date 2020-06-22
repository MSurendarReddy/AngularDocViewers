import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();
  @Input() page = 1;
  @Input() totalPages = 1;
  @Input() showAll = 1;
  @Input() type = "";

  idContainer = "header"
  rotate = true;
  download = true;
  fullscreen = true;
  resetZoom = true;
  loadOnInit = false;
  showOptions = true;
  zoomInButton = true;
  zoomOutButton = true;
  print = true;
  enableTooltip = true;
  showPDFOnlyOption = true;

  primaryColor = '#0176bd';
  buttonsColor = 'white';
  buttonsHover = '#333333';
  defaultDownloadName = 'File';
  rotateRightTooltipLabel = 'Rotate right';
  rotateLeftTooltipLabel = 'Rotate left';
  resetZoomTooltipLabel = 'Reset zoom';
  fullscreenTooltipLabel = 'Fullscreen';
  zoomInTooltipLabel = 'Zoom In';
  zoomOutTooltipLabel = 'Zoom Out';
  downloadTooltipLabel = 'Download';
  showPDFOnlyLabel = 'Show only PDF';
  openInNewTabTooltipLabel = 'Open in new tab';
  printTooltipLabel = 'Print'
  pdfQuery = ""

  constructor() { 
    console.log("--------------HeaderComponent constructor--------------");
  }

  ngOnInit(): void {
  }

  zoomIn() {
    this.parentFun.emit({ operation: "zoomIn" });
  }
  zoomOut() {
    this.parentFun.emit({ operation: "zoomOut" });
  }
  roteteRight() {
    this.parentFun.emit({ operation: "roteteRight" });
  }
  roteteLeft() {
    this.parentFun.emit({ operation: "roteteLeft" });
  }
  resetimageZoom() {
    this.parentFun.emit({ operation: "resetimageZoom" });
  }
  fullImagescreen() {

  }
  fullScreen() {
    this.parentFun.emit({ operation: "fullScreen" });
  }
  searchInPDF(newQuery: string) {
    console.log(newQuery)
    this.parentFun.emit({ operation: "searchInPDF", newQuery: newQuery });
  }
  incrementPage(amount: number) {
    console.log("incrementPage")
    this.parentFun.emit({ operation: "incrementPage", amount: amount });
  }

  downloadFile() {
    console.log("downloadFile")
    this.notifyGrandParent.emit('event')
    this.parentFun.emit({ operation: "downloadFile" });
  }
  printFile() {
    console.log("printFile")
    this.notifyGrandParent.emit('event')
    this.parentFun.emit({ operation: "printFile" });
  }
  pageSearch(event) {
    console.log("pageSearch", event.target.value)
    this.parentFun.emit({ operation: "pageSearch", pageNumber: event.target.value });
  }

  @Output("hostFun") notifyGrandParent = new EventEmitter();
  childEvent(event) {
    console.log("test notify ")
    this.notifyGrandParent.emit('event')
  }

}
