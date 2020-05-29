import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentService } from '../content.service';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { Content } from "../content";  

export class Content {  
  Id:number;  
  Title:string;  
  Content:string;  
}  

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.css']
})
export class TexteditorComponent implements OnInit {
  public Editor: ClassicEditor;
  name = 'ng2-ckeditor';    
  ckeConfig: any;    
   mycontent: string;    
  log: string   
  @ViewChild('PageContent') PageContent: any;    
  res: any;    

  constructor(private contentservice:ContentService,private router: Router) { }    
  contentdata=new Content();    

  ngOnInit() {    
    this.Getcontent()    
    this.ckeConfig = {    
      allowedContent: false,    
      extraPlugins: 'divarea',    
      forcePasteAsPlainText: true    
    };    
  }    
  onSubmit()    
  {    
    debugger;    
    debugger;    
    // this.contentservice.AddUpdateContent(this.contentdata).subscribe((data : any) => {    
    //   debugger;    
    //   alert("Data saved Successfully");    
    //   this.router.navigate(['/Post']);    

    // })    
  }    
  Getcontent()    
  {    
    // this.contentservice.Getcontent().subscribe((data:any)=>{    
    //   this.res=data;    
    //   console.log(this.res);    
    // })    
  }  
 
}

