import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {
  left = 0 ;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(menuId){
    this.left=menuId;
  }

}
