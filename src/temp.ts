import { Component, OnInit,ViewChild,EventEmitter, Output, Input } from '@angular/core';
import { ImageViewerComponent } from 'ng2-image-viewer';

@Component({
  selector: 'lib-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @ViewChild(ImageViewerComponent, { static: false }) private imageComponent: ImageViewerComponent;
  
  @Output('print') print : EventEmitter<any> = new EventEmitter();
  @Output('download') download : EventEmitter<any> = new EventEmitter();
  @Input() public images: any[];

  page = 1;
  zoom: number;
  rotation: number;

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
        console.log("zoom in")
        this.imageComponent.zoomIn();
        // this.zoomIn();
        break;
      case 'zoomOut':
        // this.zoomOut();
        this.imageComponent.zoomOut();
        break;
      case 'roteteRight':
        this.imageComponent.rotacionarDireita();
        break;
      case 'roteteLeft':
        this.imageComponent.rotacionarEsquerda();
        break;
      case 'resetimageZoom':
        this.imageComponent.resetarZoom();
        break;
      case 'downloadFile':
        this.downloadFile();
        break;
      case 'searchInPDF':
        // this.searchInPDF(type.newQuery);
        break;
      case 'incrementPage':
        // this.incrementPage(type.amount);
        break;
      case 'fullScreen':
        this.imageComponent.mostrarFullscreen();
        break;
      case 'printFile':
        this.printFile();
        break;
      default:
        alert("invalid operation");
        alert(type.operation)

    }
  }

  downloadFile() {

    var link = document.createElement('a');
    link.href = '' + this.images[0];
    link.download = 'Download.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.download.emit('download')
  }
  printFile() {
    window.print();
    this.print.emit('print file');
  }

}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { ImageViewerModule } from 'ng2-image-viewer';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [ImageComponent],
  imports: [
    CommonModule,
    ImageViewerModule,
    HeaderModule
  ]
  // entryComponents: [ImageComponent]
})
export class ImageModule {
  static getMyComponent() {
    return ImageComponent
  }
}
