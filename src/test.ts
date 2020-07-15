import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from '../text-editor/text-editor.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http :HttpClient) { }

  retrieveAllModelData(){
        return this.http.get<any>('http://localhost:3000/model');
  }

  retrieveAllModelDataById(id){
    console.log(" retrieveAllModelDataById ",id);
    return this.http.get<Model>(`http://localhost:3000/model/${id}`);
}

  
  postFormData(model){
          return this.http.post<any>('http://localhost:3000/model',model);
  }

}







<div class="container fluid ml-1">

  <!-- <input type="file" (change)="onFileUpload($event.target.files)">
  <br> -->
  <form (ngSubmit)="onSubmit()" #demoForm="ngForm">
    <!-- <h3>User profile form</h3> -->

    <!-- <div class="form-group">
      <label for="name" class="control-label">Name</label>
      <input [(ngModel)]="model.name" type="text" name="name" id="name" class="form-control">
    </div>

    <div class="form-group">
      <label for="surname" class="control-label">Surname</label>
      <input [(ngModel)]="model.surname" type="text" name="surname" id="surname" class="form-control">
    </div> -->

    <label for="description">Description</label>
    <ckeditor [(ngModel)]="model.description" [editor]="Editor" id="description" name="description">
    </ckeditor>

    <!-- <p *ngIf="description && description.dirty" class="alert">Description is "dirty".</p>
  <p *ngIf="description && description.touched" class="alert">Description has been "touched".</p> -->

    <p><button type="reset" (click)="reset()" class="btn btn-primary">Reset</button>
      <button type="submit" class="btn btn-primary">Submit</button></p>
  </form>

  <!-- <p>
  Editor data preview (readable and writable)
  Note that it's only a prove of concept of using the `ngModel`.
	It allows editing, but the editor instantly strips out unknown tags and autoparagraphs text outside of block elements.
</p> -->
  <!-- <textarea [(ngModel)]="model.description" style="width: 100%; height: 40px"></textarea> -->

  <!-- <h5>Form data preview</h5>
<pre>{{ formDataPreview }}</pre> -->


  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Details</th>
        <th scope="col">Temp</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let data1 of res">
        <th scope="row">{{data1.id}}</th>
        <td>{{data1.name}}</td>
        <td>{{data1.surname}}</td>
        <!-- <td>{{data1.description}}</td> -->
        <td> <button (click)="GetcontentById(data1.id)" type="submit" class="btn btn-info">Details</button></td>
      </tr>
    </tbody>
  </table>

</div>







import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CommonService } from '../service/common.service';
// import * as CKSource from '../../../ckeditor/build/cksource';
// const ClassicEditor = CKSource.ClassicEditor;
export class Model {
  constructor(
    name: String,
    surname: String,
    description: String) {

  }
}

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})

export class TextEditorComponent implements AfterViewInit {
  @ViewChild('demoForm', { static: true }) public demoForm?: NgForm;
  // model: Model
  res: any[];
  constructor(private commonService: CommonService) {

  }

  public Editor = ClassicEditor;
  public model = {
    name: 'Reddy',
    surname: 'M',
    description: '<p>A <b>really</b> nice fellow.</p>'
  };

  ngOnInit() {
    // this.model = new Model('John', 'Doe', '<p>A <b>really</b> nice fellow.</p>')
    this.getAllData() ;
  }

  public formDataPreview?: string;

  public get description() {
    return this.demoForm!.controls.description;
  }

  public ngAfterViewInit() {
    this.demoForm!.control.valueChanges.subscribe(values => {
      this.formDataPreview = JSON.stringify(values);
    });
  }

  public onSubmit() {
    console.log('Form submit, model', this.model);
     this.commonService.postFormData(this.model).subscribe (
      data => {
        console.log(data)
        // this.router.navigate(['todos'])
      }
    )

    this.getAllData() ;
  }
  public getAllData() {
    console.log('getAllData, model', this.model);
    this.commonService.retrieveAllModelData().subscribe((data:any)=>{  
      this.res=data;  
      // this.= this.res[1].name;  
      // this.cont= this.res[1].surname;  
      console.log(this.res);  
    })  
  }

  public GetcontentById(id){
    console.log("GetcontentById ");
    this.commonService.retrieveAllModelDataById(id).subscribe((data:any)=>{  
      console.log('GetcontentById, data', data);
      // this.res=data;  
      this.model=data
      console.log(this.model);  
    }) 
  }

  public reset() {
    this.demoForm!.reset();
  }


  public onFileUpload(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function (x) {
      self.model ={ name: 'John',
      surname: 'Doe',
      description: fileReader.result.toString() }
      
      // alert(self.fileContent)
      // console.log(self.fileContent);
    }

    fileReader.readAsText(file);
  }

  
  
  [
  {
    "name": "John",
    "surname": "Doe",
    "description": "<p>The Rich Text Editor triggers events based on its actions. </p><p> The events can be used as an extension point to perform custom operations.</p><ul>\r\n        <li>created - Triggers when the component is rendered.</li>\r\n        <li>change - Triggers only when RTE is blurred and changes are done to the content.</li>\r\n        <li>focus - Triggers when RTE is focused in.</li>\r\n        <li>blur - Triggers when RTE is focused out.</li>\r\n        <li>actionBegin - Triggers before command execution using toolbar items or executeCommand method.</li>\r\n        <li>actionComplete - Triggers after command execution using toolbar items or executeCommand method.</li>\r\n        <li>destroyed – Triggers when the component is destroyed.</li>\r\n    </ul>",
    "id": 3
  },
  {
    "name": "Reddy",
    "surname": "M",
    "description": "<p>A <strong>really</strong> nice fellow.</p><p>&nbsp;</p><figure class=\"image\"><img src=\"https://ckeditor.com/assets/images/bg/volcano-8967c4575e.jpg\" alt=\"Three Monks walking on ancient temple.\"></figure>",
    "id": 4
  },
  {
    "name": "Reddy",
    "surname": "M",
    "description": "<p>A <b>really</b> nice fellow.</p>",
    "id": 5
  },
  {
    "name": "Reddy",
    "surname": "M",
    "description": "<p>A <b>really</b> nice fellow.</p>",
    "id": 6
  },
  {
    "name": "Reddy",
    "surname": "M",
    "description": "<p><strong>Bold Texdt</strong></p><p>&nbsp;</p><ul><li><strong>&nbsp; &nbsp;Tet</strong></li><li><strong>setsetse</strong></li><li><strong>set</strong></li></ul><ol><li><strong>&nbsp; &nbsp; fdf</strong></li><li><strong>sdfsdf</strong></li><li><strong>sdf</strong></li></ol>",
    "id": 7
  },
  {
    "name": "Reddy",
    "surname": "M",
    "description": "<p>A <strong>really</strong> nice fellow.</p><p>data:image/jpeg;base64,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</p>",
    "id": 8
  }
]



}
