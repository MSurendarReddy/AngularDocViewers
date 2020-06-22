import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  public fileSrc = ""
  public fileType = ""

  private paramsSub: Subscription;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsSub = this.activatedRouter.params.subscribe(params => {
      var name = params["name"];
      this.fileType = params["type"];
      // var ext = this.getExtension(name);
      if (this.fileType == "image") {
        this.fileSrc = `http://localhost:4200/assets/images/${name}`;
      } else {
        this.fileSrc = `http://localhost:4200/assets/pdf/${name}`;
      }
    });
  }

  getExtension(filename) {
    let ext = filename.split('.').pop();
    console.log("ext", ext);
    return ext;
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
  printCallbackFromHostApplication(event){
   console.log("--------------printCallbackFromHostApplication----------------",event);
  }
}
