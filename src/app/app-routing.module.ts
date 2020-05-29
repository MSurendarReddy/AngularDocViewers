import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { PdfComponent } from './pdf/pdf.component';
import { DocviewerComponent } from './docviewer/docviewer.component';
import { TextEditorComponent1 } from './text-editor/text-editor.component';
import { ExcelComponent } from './excel/excel.component';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import { DetailspostComponent } from './detailspost/detailspost.component';
import { TexteditorComponent } from './texteditor/texteditor.component';


const routes: Routes = [
  { path: 'image', component: ImageComponent },
  { path: 'pdf', component: PdfComponent },
  { path: 'doc', component: DocviewerComponent },
  { path: 'text', component: TextEditorComponent1 },
  { path: 'excel', component: ExcelComponent },
  { path: 'ng2text', component: TexteditorComponent },
  { path: 'Post', component: PagecontentComponent },
  { path: 'Details', component: DetailspostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
