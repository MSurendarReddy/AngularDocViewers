import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { PdfComponent } from './pdf/pdf.component';
import { DocviewerComponent } from './docviewer/docviewer.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { ExcelComponent } from './excel/excel.component';


const routes: Routes = [
  {path:'image',component:ImageComponent},
  {path:'pdf',component:PdfComponent},
  {path:'doc',component:DocviewerComponent},
  {path:'text',component:TextEditorComponent},
  {path:'excel',component:ExcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
