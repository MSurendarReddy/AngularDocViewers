import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-DocViewerLib',
  template: `
    <p>
      <lib-common-doc-viewer   [(fileSrc)]="fileSrc" [fileType]="fileType" (print)="printFunction($event)"></lib-common-doc-viewer>
    </p>
  `,
  styles: [
  ]
})
export class DocViewerLibComponent implements OnInit {

  @Input() public fileSrc: string;
  @Input() public fileType: string;

  @Output('print') print : EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log("DocViewerLibComponent");
  }

  ngOnInit(): void {
    console.log("DocViewerLibComponent fileSrc = ",this.fileSrc);
    console.log("print  ngOnInit ",print)
  }
  
  
  import { NgModule } from '@angular/core';
import { DocViewerLibComponent } from './doc-viewer-lib.component';
import { CommonDocViewerComponent } from './components/common-doc-viewer/common-doc-viewer.component';
import { CommonDocViewerModule } from './components/common-doc-viewer/common-doc-viewer.module';



@NgModule({
  declarations: [DocViewerLibComponent, CommonDocViewerComponent],
  imports: [
    CommonDocViewerModule
  ],
  exports: [DocViewerLibComponent]
})
export class DocViewerLibModule { }

  
  printFunction(e){
    console.log("-----------printFunction-- DocViewerLibComponent--------");
    this.print.emit("test print");
  }
}
