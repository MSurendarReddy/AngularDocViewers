import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  // pdfSrc = "http://localhost:4200/assets/angular7_tutorial.pdf"
   pdfSrc = "http://localhost:4200/assets/pdf/pdf1.pdf"
  // constructor() { }

  // ngOnInit(): void {
  // }
  // callBackFn(event) {
  //   // alert("event")
  // }
  // pageRendered(event) {
  //   // alert("called for eventy page")
  // }

  // onFileSelected() {
  //   let $img: any = document.querySelector('#file');
  
  //   if (typeof (FileReader) !== 'undefined') {
  //     let reader = new FileReader();
  
  //     reader.onload = (e: any) => {
  //       this.pdfSrc = e.target.result;
  //     };
  
  //     reader.readAsArrayBuffer($img.files[0]);
  //   }
  // }
  download(){
    const blob = this.pdfSrc;
    // saveAs(blob, 'test1.pdf');
    // console.log(blob)
    // FileSaver.default(blob,  'test1.pdf');
    let filepdf = 'data:application/pdf,' + blob;
    let a = document.createElement('a');
    a.href = filepdf;
    a.download = 'downloadPdf';
    a.click();
  }


  
  // pdfSrc = '../../assets/images/dhilip.pdf';
  zoom:number;
  rotation:number;
  move:string;

  constructor() { }

  ngOnInit() {
    // this.zoom=0.5;
    this.zoom=1;
    this.rotation=0;
    this.move='';
  }

  zoomin()
  {
    if(this.zoom < 2.0)
    {
    this.zoom += 0.2;
    }
  }
  zoomout()
  {
    if(this.zoom > 0.5)
    {
    this.zoom -= 0.2;
    }
  }

  ritRotate()
  {
    this.rotation += 90;
  }
  leftRotate()
  {
    this.rotation += -90;
  }

  movetoTop()
  {
    this.move='top';
  }

}
