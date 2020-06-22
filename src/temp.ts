import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfComponent } from './pdf.component';
import { HeaderModule } from '../header/header.module';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [PdfComponent],
  imports: [
    CommonModule,
    PdfViewerModule,
    HeaderModule
  ]
  // entryComponents: [PdfComponent]
})
export class PdfModule {
  constructor() {
    console.log("PdfModule constructor")
  }
  public static getMyComponent() {
    return PdfComponent
  }
}





import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PdfViewerComponent, PDFProgressData, PDFSource, PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'lib-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  @ViewChild(PdfViewerComponent, { static: false }) private pdfComponent: PdfViewerComponent;
  @Input() pdfSrc: string | Uint8Array | PDFSource;

  zoom: number;
  rotation: number;
  pdfQuery = '';
  page = 1;
  totalPages = 1;
  pdf: any;
  outline: any[];
  progressData: PDFProgressData;
  isLoaded = false;
  error: any;

  constructor() { }

  ngOnInit(): void {
    this.zoom = 1;
    this.rotation = 0;
  }

  parentFun(type) {
    // alert(type.operation);
    // console.log("type", type.operation)
    switch (type.operation) {
      case 'zoomIn':
        this.zoomIn();
        break;
      case 'zoomOut':
        this.zoomOut();
        break;
      case 'roteteRight':
        this.roteteRight();
        break;
      case 'roteteLeft':
        this.roteteLeft();
        break;
      case 'resetimageZoom':
        this.resetimageZoom();
        break;
      case 'downloadFile':
        this.downloadFile();
        break;
      case 'searchInPDF':
        this.searchInPDF(type.newQuery);
        break;
      case 'incrementPage':
        this.incrementPage(type.amount);
        break;
      case 'pageSearch':
        this.pageSearch(type.pageNumber);
        break;
      case 'printFile':
        this.printFile();
        break;
      default:
        alert("invalid operation");
        alert(type.operation)
    }
  }
  public zoomIn() {
    if (this.zoom < 2.0) {
      this.zoom += 0.2;
    }
  }
  zoomOut() {
    if (this.zoom > 0.5) {
      this.zoom -= 0.2;
    }
  }
  roteteRight() {
    this.rotation += 90;
  }
  roteteLeft() {
    this.rotation += -90;
  }
  resetimageZoom() {
    this.zoom = 1;
  }
  fullImagescreen() {

  }
  incrementPage(amount: number) {
    this.page += amount;
  }
  pageSearch(pageNumber: number) {
    this.page = pageNumber
  }

  searchInPDF(newQuery: string) {
    if (newQuery !== this.pdfQuery) {
      this.pdfQuery = newQuery;
      this.pdfComponent.pdfFindController.executeCommand('find', {
        query: this.pdfQuery,
        highlightAll: true,
        phraseSearch: true,
        findPrevious: undefined
      });
    } else {
      this.pdfComponent.pdfFindController.executeCommand('findagain', {
        query: this.pdfQuery,
        highlightAll: true,
        phraseSearch: true,
        findPrevious: undefined,
      });
    }
  }

  downloadFile() {
    const blob = this.pdfSrc;
    let filepdf = 'data:application/pdf,' + blob;
    let a = document.createElement('a');
    a.href = filepdf;
    a.download = 'downloadPdf';
    a.click();
  }
  printFile() {
    console.log("printFile")
    // window.print();
  }
  /**
   * Get pdf information after it's loaded
   * @param pdf
   */
  afterLoadComplete(pdf: PDFDocumentProxy) {
    // console.log("after loaded")
    this.pdf = pdf;
    this.loadOutline();
    this.totalPages = pdf.numPages;
  }
  /**
* Get outline
*/
  loadOutline() {
    this.pdf.getOutline().then((outline: any[]) => {
      this.outline = outline;
    });
  }
  /**
   * Pdf loading progress callback
   * @param {PDFProgressData} progressData
   */
  onProgress(progressData: PDFProgressData) {
    // console.log(progressData);
    this.progressData = progressData;

    this.isLoaded = progressData.loaded >= progressData.total;
    this.error = null; // clear error
  }
  /**
   * Page rendered callback, which is called when a page is rendered (called multiple times)
   *
   * @param {CustomEvent} e
   */
  pageRendered(e: CustomEvent) {
    // console.log('(page-rendered)', e);
  }

  /**
   * Handle error callback
   *
   * @param error
   */
  onError(error: any) {
    this.error = error; // set error

    if (error.name === 'PasswordException') {
      const password = prompt(
        'This document is password protected. Enter the password:'
      );

      if (password) {
        this.error = null;
        this.setPassword(password);
      }
    }
  }
  setPassword(password: string) {
    let newSrc;

    if (this.pdfSrc instanceof ArrayBuffer) {
      newSrc = { data: this.pdfSrc };
    } else if (typeof this.pdfSrc === 'string') {
      newSrc = { url: this.pdfSrc };
    } else {
      newSrc = { ...this.pdfSrc };
    }

    newSrc.password = password;

    this.pdfSrc = newSrc;
  }

}
