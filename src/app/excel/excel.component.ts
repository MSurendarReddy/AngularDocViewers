import { Component, OnInit } from '@angular/core';
import * as jexcel from "jexcel";
import { saveAs } from 'file-saver';
// require("jexcel/dist/jexcel.css");

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {
  mySpreadsheet: any
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // jexcel(document.getElementById("spreadsheet"), {
    //   data: [
    //     ['Figo', 'Ford', '2019-02-12', '', true, '$ 4.000,00', '#777700'],
    //     ['Figo-dx', 'Ford', '2018-07-11', '', true, '$ 6.000,01', '#007777']
    //   ],
    //  columns: [
    //     { type: 'text', title: 'Car', width: 120 },
    //     { type: 'dropdown', title: 'Make', width: 200, source: ["Ford", "Audi", "Bmw","Honda"] },
    //     { type: 'calendar', title: 'Available', width: 200 },
    //     { type: 'image', title: 'Photo', width: 120 },
    //     { type: 'checkbox', title: 'Stock', width: 80 },
    //     { type: 'numeric', title: 'Price', width: 100, mask: '$ #.##,00', decimal: ',' },
    //     { type: 'color', width: 100, render: 'square', }
    //   ],

    //   minDimensions: [10, 10] 
    // });


    this.mySpreadsheet = jexcel(document.getElementById('spreadsheet'), {
      csv: 'http://localhost:4200/assets/excel/jexcel.csv',
      // csv: './assets/excel/jexcel.csv',
      csvDelimiter: ',',
      csvHeaders: true,
      tableOverflow: true,
      search: true,
      pagination: 10,
      paginationOptions: [10, 20, 40],
      paginationWheel: true,
      // loadingSpin: true,
      // lazyLoading:true,
      parseFormulas: true,
      autoCastings: true,
      minDimensions: [10, 20],
      defaultColWidth: 100,
      tableWidth: "100%",
      columnDrag: true,
      columnResize: true,
      minSpareRows: 0,
      persistance: './assets/excel/save',
      columns: [
        { type: 'text', width: 300 },
        { type: 'text', width: 80 },
        { type: 'dropdown', width: 120, source: ['England', 'Wales', 'Northern Ireland', 'Scotland'] },
        { type: 'text', width: 120 },
        { type: 'text', width: 120 },
      ],
      updateTable: function (el, cell, x, y, source, value, id) {
        if (x == 2 && y == 2) {
          cell.classList.add('readonly');
          // alert("test")
        }
      },
      onbeforepaste: function (instance, data, x, y) {
        return false;
      },
      onsave: function (instance, obj, data) {
        alert(data)
      },
      toolbar: [
        {
          type: 'i',
          content: 'undo',
          onclick: function () {
            this.mySpreadsheet.undo();
          }
        },
        {
          type: 'i',
          content: 'redo',
          onclick: function () {
            this.mySpreadsheet.redo();
          }
        },
        {
          type: 'i',
          content: 'save',
          // method:this.save()
          onclick: function () {
            alert("test")
            // this.mySpreadsheet.download();
            // this.downloadExcel();
          }
        },
        {
          type: 'select',
          k: 'font-family',
          v: ['Arial', 'Verdana']
        },
        {
          type: 'select',
          k: 'font-size',
          v: ['9px', '10px', '11px', '12px', '13px', '14px', '15px', '16px', '17px', '18px', '19px', '20px']
        },
        {
          type: 'i',
          content: 'format_align_left',
          k: 'text-align',
          v: 'left'
        },
        {
          type: 'i',
          content: 'format_align_center',
          k: 'text-align',
          v: 'center'
        },
        {
          type: 'i',
          content: 'format_align_right',
          k: 'text-align',
          v: 'right'
        },
        {
          type: 'i',
          content: 'format_bold',
          k: 'font-weight',
          v: 'bold'
        },
        {
          type: 'color',
          content: 'format_color_text',
          k: 'color'
        },
        {
          type: 'color',
          content: 'format_color_fill',
          k: 'background-color'
        },
      ]
    });



    // onevent: function () {
    //   // alert(arguments)
    //   console.log(arguments);
    // },

    //  footers: [['Total','=SUMCOL(TABLE(), COLUMN())','=SUMCOL(TABLE(), COLUMN())','=SUMCOL(TABLE(), COLUMN())']],


    // jexcel.fromSpreadsheet('./assets/excel/SampleData.xlsx', function(result) {
    //   if (! result.length) {
    //       console.error('JEXCEL: Something went wrong.');
    //   } else {
    //       if (result.length == 1) {
    //           jexcel(document.getElementById('spreadsheet'), result[0]);
    //       } else {
    //           jexcel.createTabs(document.getElementById('spreadsheet'), result);
    //       }
    //   }
    // });

  }
  save() {
    this.mySpreadsheet.download();
  }
  downloadExcel() {
    this.mySpreadsheet.download();
  }

  tableOperations(op) {
    if (op == 1) {
      this.mySpreadsheet.insertColumn();
    }
  }
  saveExcel() {
    // let FileSaver = require('file-saver');
    // let blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
    // var file = new File([ this.mySpreadsheet.getData()], "excelData.csv", {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"});
    // var file = new File([this.mySpreadsheet.getData().slice()], "excelData.csv", { type: "text/csv" });
    // FileSaver.saveAs(file);
    // console.log(this.mySpreadsheet.getData().slice(1, 5))

    this.mySpreadsheet.save('./assets/excel/jexcel1.csv', this.mySpreadsheet.getData().slice(1, 5));
    // FileSaver.saveAs('./assets/excel/jexcel.csv', "excelData.csv");
  }

}



// onchange: changed,
// onbeforechange: beforeChange,
// oninsertrow: insertedRow,
// oninsertcolumn: insertedColumn,
// ondeleterow: deletedRow,
// ondeletecolumn: deletedColumn,
// onselection: selectionActive,
// onsort: sort,
// onresizerow: resizeRow,
// onresizecolumn: resizeColumn,
// onmoverow: moveRow,
// onmovecolumn: moveColumn,
// onload: loaded,
// onblur: blur,
// onfocus: focus,
// onpaste: paste,
// https://bossanova.uk/jexcel/v4/examples/events



let SUMCOL = function (instance, columnId) {
  var total = 0;
  for (var j = 0; j < instance.options.data.length; j++) {
    if (Number(instance.records[j][columnId - 1].innerHTML)) {
      total += Number(instance.records[j][columnId - 1].innerHTML);
    }
  }
  return total;

}
