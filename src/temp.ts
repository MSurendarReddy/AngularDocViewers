import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter } from '@angular/core';
import * as Tiff from 'tiff.js'
@Component({
  selector: 'lib-common-doc-viewer',
  templateUrl: './common-doc-viewer.component.html',
  styleUrls: ['./common-doc-viewer.component.scss']
})
export class CommonDocViewerComponent implements OnInit {

  @Input() public fileSrc: string;
  @Input() public fileType: string;

  @Output('print') print: EventEmitter<any> = new EventEmitter();
  @Output('download') download: EventEmitter<any> = new EventEmitter();

  @ViewChild('componentPlaceholder', { read: ViewContainerRef, static: true }) public componentPlaceholder: ViewContainerRef;

  public extension: string;
  public base64Data: string
  public images: any[];

  public pdfCompRef: any
  public imageCompRef: any

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  
  }
  ngAfterViewInit() {
    if (this.fileType == "pdf") {
      this.enrichPdfComponent()
    } else {
      this.enrichImageComponent()
    }
  }

  enrichImageComponent() {
    if (this.isURlImage()) {
      console.log("------------isURlImage------------");
      this.extension = this.isFileExtenstion();
      if (this.extension == "TIF" || this.extension == "tiff") {
        this.convertTiffImageToPng(this.fileSrc);
        console.log("this.fileSrc base64Data", this.fileSrc);
        setTimeout(() => {
          this.loadImageComponent();
        }, 1000);
      } else {
        this.loadImageComponent()
      }
    } else {
      this.loadImageComponent()
    }
  }

  loadImageComponent() {
    this.componentPlaceholder.clear();
    import('../image/image.module').then(({ ImageModule }) => {
      const MyComponent = ImageModule.getMyComponent();
      const factory = this.componentFactoryResolver.resolveComponentFactory(MyComponent);
      this.imageCompRef = this.componentPlaceholder.createComponent(factory);
      console.log("this.fileSrc in loadImageComponent", this.fileSrc)
      if (this.extension == "TIF" || this.extension == "tiff") {
        this.images = [this.base64Data.replace(`data:image/png;base64,`, '')]
      } else {
        this.images = [this.fileSrc.replace(`data:image/png;base64,`, '')]
      }

      this.imageCompRef.instance.images = this.images;

      this.imageCompRef.instance.print.subscribe((e) => {
        this.printCommon(e);
      });
      this.imageCompRef.instance.download.subscribe((e) => {
        this.downloadCommon(e);
      });

    });

  }
 

  enrichPdfComponent() {
    this.loadPdfComponent()
  }

  loadPdfComponent() {
    this.componentPlaceholder.clear();
    import('../pdf/pdf.module').then(({ PdfModule }) => {

      const MyComponent = PdfModule.getMyComponent();
      const factory = this.componentFactoryResolver.resolveComponentFactory(MyComponent);
      this.pdfCompRef = this.componentPlaceholder.createComponent(factory);
      this.pdfCompRef.instance.pdfSrc = this.fileSrc
      // console.log('pdfCompRef', this.pdfCompRef)

    });
    // import('../pdf/pdf.module').then(({ PdfModule }) => {
     
    // });
    // import('../pdf/pdf.component').then(({ PdfComponent }) => {

    //   // const MyComponent = PdfModule.getMyComponent();
    //   const factory = this.componentFactoryResolver.resolveComponentFactory(PdfComponent);
    //   this.pdfCompRef = this.componentPlaceholder.createComponent(factory);
    //   this.pdfCompRef.instance.pdfSrc = this.fileSrc
    //   // console.log('pdfCompRef', this.pdfCompRef)

    // });
  }


  isURlImage() {
    return this.fileSrc.match(new RegExp(/^(https|http|www\.)/g));
  }
  isFileExtenstion() {
    return this.fileSrc.match(new RegExp('[^.]+$'))[0];
  }
  convertTiffImageToPng(filename) {
    // var base64DataTemp: string
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'arraybuffer';
    xhr.open('GET', filename);
    // xhr.addEventListener('loadend', this.handleEvent);
    xhr.onload = (e) => {
      var tiff = new Tiff({ buffer: xhr.response });
      var width = tiff.width();
      var height = tiff.height();
      var canvas = tiff.toCanvas();
      if (canvas) {
        canvas.setAttribute('style', 'width:' + (width * 0.3) +
          'px; height: ' + (height * 0.3) + 'px ;display:none');
        var elem = document.createElement("div");
        document.body.append(elem);
        document.body.append(canvas);
        this.base64Data = canvas.toDataURL("image/png");
        console.log("====", this.base64Data);
        // this.base64Data = base64DataTemp
      }
    };
    xhr.send();
  }

  ngOnDestroy() {
    if (this.pdfCompRef) {
      this.pdfCompRef.destroy();
    }
    if (this.imageCompRef) {
      this.imageCompRef.destroy();
    }
  }

  printCommon(e) {
    console.log("--------------printCommon---------------------", e)
    this.print.emit(e)
  }
  downloadCommon(e) {
    console.log("--------------downloadCommon---------------------", e)
    this.download.emit(e)
  }

}



import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfComponent } from '../pdf/pdf.component';
import { ImageComponent } from '../image/image.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  entryComponents: [PdfComponent,ImageComponent]
  // exports:[HeaderModule,HeaderComponent]
})
export class CommonDocViewerModule { 

 

}
