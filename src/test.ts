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




}
