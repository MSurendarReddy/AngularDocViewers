<div style="width:90%">
  <input type="file" id="file" (change)="handleFileInput($event.target.files)">


  <!-- <ckeditor [editor]="Editor" [(ngModel)]="model.editorData" [config]="config"
    (ready)="onReady($event)"></ckeditor> -->

  <ckeditor #editor1 [disabled]="isDisabled" [editor]="Editor" [(ngModel)]="model.editorData" [config]="config"
    (ready)="onReady($event)"></ckeditor>

  <button (click)="toggleDisabled()">
    {{ isDisabled ? 'Enable editor' : 'Disable editor' }}
  </button>

  <button (click)="togglePlugin()">
    Enable plugin
  </button>
  <!-- <textarea name="content" id="editor">
    <p>Here goes the initial content of the editor.</p>
   </textarea> -->

  <button value="send" (click)="postData($event)">send</button>
</div>



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



:host ::ng-deep .ck-editor__editable_inline {
    min-height: 500px;
}

body
{
   word-wrap:break-word;
}






import { Component, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import plainTextToHtml from '@ckeditor/ckeditor5-clipboard/src/utils/plaintexttohtml';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
// import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';
// import { CKEditorComponent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public Editor = ClassicEditor;

  // public editorComponent: CKEditorComponent; // no error
  @ViewChild('editor1') editorComponent: any;

  public isDisabled = false;

  public model = {
    editorData: 'Hello, world!'
  };

  config = {
    extraPlugins: [this.MyCustomUploadAdapterPlugin1],
    'pasteFromWordRemoveStyles': false,
    'pasteFromWordRemoveFontStyles': false,
    disableNativeSpellChecker: true,
    contentsCss: './app.component.scss'
  }
 
  public getEditor() {
    // Warning: This may return "undefined" if the editor is hidden behind the `*ngIf` directive or
    // if the editor is not fully initialised yet.
    return this.editorComponent.editorInstance;
  }

 
  toggleDisabled() {
    this.isDisabled = !this.isDisabled
  }

  postData(event) {
    // console.log(" event data", event);
    // console.log(this.model.editorData);
    // console.log(this.editorComponent.editorInstance);
    // console.log(this.editorComponent.elementRef);
    console.log("HTML Text=>", this.editorComponent.editorInstance.getData());
    console.log("Plain Text =>", this.editorComponent.elementRef.nativeElement.innerText);
    // console.log("Plain Text =>",);
    // ClassicEditor.builtinPlugins.map(Plugin => console.log(Plugin.pluginName))

    console.log("Clipboard ====>", this.editorComponent.editorInstance.plugins.get('Clipboard'))
    console.log("Clipboard ====>", this.editorComponent.editorInstance.editing.view)
    const editingView = this.editorComponent.editorInstance.editing.view;
    // console.log(this.editorComponent.editorInstance.getText());
    // this.Editor.getText()
  }

  transferContent(data) {
    data = data
      // Encode <>.
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // Creates paragraphs for every line breaks.
      .replace(/\n/g, '</p><p>')
      // Preserve trailing spaces (only the first and last one – the rest is handled below).
      .replace(/^\s/, '&nbsp;')
      .replace(/\s$/, '&nbsp;')
      // Preserve other subsequent spaces now.
      .replace(/\s\s/g, ' &nbsp;');

    if (data.indexOf('</p><p>') > -1) {
      // If we created paragraphs above, add the trailing ones.
      data = `<p>${data}</p>`;
    }

    // this.model.editorData = data;
    return data;
  }

  handleFileInput(files: FileList) {

    let file = files.item(0);
    console.log("file ",file.type)
    console.log("file ",file)
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = () => {
      if(file.type =="text/html"){
        self.model.editorData = fileReader.result.toString()
      }else{
        self.model.editorData =   this.transferContent(fileReader.result.toString())
      }
      console.log("self.model.editorData -> \n", self.model.editorData)
      // this.editorComponent.elementRef.nativeElement.innerText = self.model.editorData;
    }
    fileReader.readAsText(file)
  }

  data: string
  ngOnInit(): void {
    //console.log(Base64UploadAdapter);
    this.data = 'Data binding is the core concept of Angular 8 and used to define the communication between a component and the DOM. It is a technique to link your data to your view layer. In simple words, you can say that data binding is a communication between your typescript code of your component and your template which user sees. It makes easy to define interactive applications without worrying about pushing and pulling data'
    'Data binding can be either one-way data binding or two-way data binding.'
  }

  public onReady(editor) {
    //console.log(editor);
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }


  MyCustomUploadAdapterPlugin1(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader, editor.t);
    };
  }


}


class MyUploadAdapter {
  loader;  // your adapter communicates to CKEditor through this
  url;
  reader: any
  constructor(loader, url) {
    this.loader = loader;
    this.url = url;
    console.log('Upload Adapter Constructor', this.loader, this.url);
  }

  upload() {
    // return new Promise((resolve, reject) => {
    //   console.log('UploadAdapter upload called', this.loader, this.url);
    //   console.log('the file we got was', this.loader.file);
    //   resolve({ default: 'http://localhost:4201/assets' });
    // });

    return new Promise((resolve, reject) => {
      const reader = this.reader = new FileReader();

      reader.onload = function () {
        resolve({ default: reader.result });
        // console.log(" reader.result ", reader.result)
      };

      reader.onerror = function (error) {
        reject(error);
      };

      reader.onabort = function () {
        reject();
      };

      //console.log(this.loader.file);
      this.loader.file
        .then(file => new Promise((resolve, reject) => {
          reader.readAsDataURL(file);

          // this._initRequest();
          // this._initListeners( resolve, reject, file );
          // this._sendRequest( file );
        }));

      //reader.readAsDataURL( this.loader.file );
    });

  }


  // public onChange({ editor }: ChangeEvent) {
  //   // const data = editor.getData();
  //   // console.log(data);
  // }

  abort() {
    console.log('UploadAdapter abort');
  }
}
