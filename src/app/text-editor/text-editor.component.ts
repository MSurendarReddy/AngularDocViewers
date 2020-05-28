import { Component, OnInit, ViewChild } from '@angular/core';
// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import CKEDITOR from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  @ViewChild('ckeditor', { static: true }) public ckeditorComponent: CKEditorComponent;
  public Editor = ClassicEditor;
  // public Editor = ClassicEditorWithAutosave

  constructor() { }

  ngOnInit(): void {
  }

  fileContent: any = `<p>Hello, world! test</p>`;

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function (x) {
      self.fileContent = fileReader.result;
      // alert(self.fileContent)
      // console.log(self.fileContent);
    }

    fileReader.readAsText(file);
  }


  public CEditor = CKEDITOR.ClassicEditor;
  loader: any;
  // public editorConfig = {
  //   extraPlugins: []
  // };
  public onReady(editor) {

    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      // Configure the URL to the upload script in your back-end here!
      return this.imageUploadAdapter(loader);
    };

  }
  imageUploadAdapter(loader: any) {
    this.loader = loader;

    const uploadInterface = {
      upload: () => { return this.uploadImage(this); },
      abort: () => { return this.abortImageUpload(this); }
    };

    return uploadInterface;
  }
  uploadImage(that: any) {
    return that.loader.file
      .then(file => new Promise((resolve, reject) => {
        console.log('UPloading..');
      }));
  }

  abortImageUpload(that: any) {
    console.log('Abort image upload.')
  }
  public getEditor() {
    // Warning: This may return "undefined" if the editor is hidden behind the `*ngIf` directive or
    // if the editor is not fully initialised yet.
    return this.ckeditorComponent.editorInstance;
}

}
