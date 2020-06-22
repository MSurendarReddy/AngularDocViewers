import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public images: any[];
  public pdfs: any[];
  constructor() { }

  ngOnInit(): void {
    this.images = [
      { name: "bmp1.BMP", type: 'image' },
      { name: "bmp2.BMP", type: 'image' },
      { name: "ImageTiff1.TIF", type: 'image' },
      { name: "ImageTiff2.tiff", type: 'image' },
      { name: "jpeg1.jpg", type: 'image' },
      { name: "jpeg2.jpg", type: 'image' },
    ];

    this.pdfs = [
      { name: "java_tutorial.pdf", type: 'pdf' },
      { name: "java8_tutorial.pdf", type: 'pdf' }
    ];
  }
  renderImage(image) {
    console.log("image", image.name);
  }

}



<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>

<body>
    <div>
        <table class="table table-hover">
            <tbody>
                <tr *ngFor="let image of images">
                    <td>
                        <a routerLink="images/{{image.type}}/{{image.name}}/">{{image.name}}</a>
                        <!-- <a href="/images/{{image.type}}/{{image.name}}/">{{image.name}}</a> -->
                    </td>
                </tr>
                <tr *ngFor="let pdf of pdfs">
                    <td>
                        <a routerLink="pdf/{{pdf.type}}/{{pdf.name}}/">{{pdf.name}}</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</body>

</html>
