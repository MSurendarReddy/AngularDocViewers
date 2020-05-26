import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.component.html',
  styleUrls: ['./docviewer.component.css']
})
export class DocviewerComponent implements OnInit {
  url = `${getbaseUrl()}/assets/ppt1.ppt`
  constructor() { }

  ngOnInit(): void {
  }


}

export const getbaseUrl = (): string => {
  alert("test")
  const pathArray = window.location.href.split('/');
  const protocol = pathArray[0];
  const host = pathArray[2];
  return protocol + '//' + host;
};
