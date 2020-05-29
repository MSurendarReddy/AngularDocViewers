import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { ImageComponent } from './image/image.component';

 import { ImageViewerModule } from 'ng2-image-viewer';
import { PdfComponent } from './pdf/pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { DocviewerComponent } from './docviewer/docviewer.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { CKEditorModule } from 'ng2-ckeditor';
import {  TextEditorComponent1 } from './text-editor/text-editor.component';
import { ExcelComponent } from './excel/excel.component';
import { FormsModule } from '@angular/forms';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import { DetailspostComponent } from './detailspost/detailspost.component';


 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LeftmenuComponent,
    ImageComponent,
    PdfComponent,
    DocviewerComponent,
    TextEditorComponent1,
    TexteditorComponent,
    ExcelComponent,
    TexteditorComponent,
    PagecontentComponent,
    DetailspostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ImageViewerModule,
    PdfViewerModule,
    NgxDocViewerModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
