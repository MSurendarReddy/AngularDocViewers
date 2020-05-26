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


 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LeftmenuComponent,
    ImageComponent,
    PdfComponent,
    DocviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageViewerModule,
    PdfViewerModule,
    NgxDocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
