import { Component, OnInit } from '@angular/core';
import * as jexcel from "jexcel";

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    jexcel(document.getElementById("spreadsheet"), {
      data: [
        ['Jazz', 'Honda', '2019-02-12', '', true, '$ 2.000,00', '#777700'],
        ['Civic', 'Honda', '2018-07-11', '', true, '$ 4.000,01', '#007777']
      ],
     columns: [
        { type: 'text', title: 'Car', width: 120 },
        { type: 'dropdown', title: 'Make', width: 200, source: ["Alfa Romeo", "Audi", "Bmw","Honda"] },
        { type: 'calendar', title: 'Available', width: 200 },
        { type: 'image', title: 'Photo', width: 120 },
        { type: 'checkbox', title: 'Stock', width: 80 },
        { type: 'numeric', title: 'Price', width: 100, mask: '$ #.##,00', decimal: ',' },
        { type: 'color', width: 100, render: 'square', }
      ],

      minDimensions: [10, 10]
    });
  }

}
