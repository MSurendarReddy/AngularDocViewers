import { Component, OnInit } from '@angular/core';  
import { Router, ActivatedRoute, Params } from '@angular/router';  
import { ContentService } from '../content.service';  

@Component({  
  selector: 'app-detailspost',  
  templateUrl: './detailspost.component.html',  
  styleUrls: ['./detailspost.component.css']  
})  
export class DetailspostComponent implements OnInit {  
  res: any;  
  Title: any;  
  content: any;  

  constructor( private route: ActivatedRoute,private contentservice:ContentService) { }  

  ngOnInit() {  
    let Id = this.route.snapshot.queryParams["Id"]  
   this.GetcontentById(Id);  
  }  
  GetcontentById(Id:string)  
  {  
    //  this.contentservice.GetcontentById(Id).subscribe((data: any)=>{  
    //    this.res=data;  
    //    this.Title=this.res.Title  
    //    this.content=this.res.Content  
    //    console.log(this.res);  
    // });  
  }  
}  