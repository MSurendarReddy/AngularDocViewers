
Header component.html 

(below print icon)

<a class="viewer-tooltip" [(ngClass)]='pinToHeader' (click)="pintoHeader()">
                    <span *ngIf="enableTooltip" class="tooltiptext">Pin to Header</span>
                    <i class="material-icons footer-icon">push_pin</i>
                </a>

                <a class="viewer-tooltip" [(ngClass)]='showpin' (click)="showPin()">
                        <span *ngIf="enableTooltip" class="tooltiptext">Undo</span>
                        <i class="material-icons footer-icon">undo</i>
                    </a>

Header.component.css

(below input:focus)

.pinheader
{
  display:inline-block;
}
.removeheader
{
  display:none;
}
.displaypin
{
  display:none;
}
.hidepin
{
  display:inline-block;
}

Header compontent.ts

pinToHeader:string;
  showpin:string;


ngOnInit(): void {
    this.pinToHeader='pinheader';
    this.showpin='displaypin';
  }


pintoHeader()
  {
     this.pinToHeader='removeheader';
     this.showpin='hidepin';
     this.parentFun.emit({ operation: "pinToHeader" });
  }

  showPin()
  {
    this.showpin='displaypin';
    this.pinToHeader='pinheader';
    this.parentFun.emit({ operation: "showPin" });
  }



Pdf.component.html

<div class="container top-buffer">      
    <div class="row">
        <div class="col-12">
          <div [ngClass]="display_header">
            <lib-header [(page)]='page' [totalPages]='totalPages' [showAll]='true' [type]="'pdf'"
                (parentFun)="parentFun($event)" [HeaderColor]='headercolor'>
            </lib-header>
          </div>
        </div>
    </div>


pdf component.css

.top-buffer 
{
  border:1px solid #999999; 
}
.col-12
{
    padding:0px;
}

.no_pdf_headerarea
{
  display:none; 
}

.top-buffer:hover .no_pdf_headerarea
{
  display:block;
  z-index: 2;
  position:absolute;
  width:100%;
  top:0px;
}

.pdf_headerarea
{
  display:block;
  width:100%;
  top:0px;
}



pdf component.ts

display_header:string;


ngOnInit(): void {
    this.display_header='no_pdf_headerarea';
  }


case 'pinToHeader':
        this.pinToHeader();
      break;
      case 'showPin':
        this.showPin();
      break;
      

pinToHeader()
  {
    this.display_header='pdf_headerarea';
  }
  showPin()
  {
    this.display_header='no_pdf_headerarea';
  }



Image component.html

<div class="container top-buffer">
        <div >
            <div [ngClass]="display_header">
                <lib-header [type]="'image'" (parentFun)="parentFun($event)" [HeaderColor]="headercolor">
                </lib-header>
        </div>
    </div>
    <div style="margin-top:-60px;">
        <app-image-viewer [images]="images" [idContainer]="'idOnHTML'" [download]="true"
            [downloadTooltipLabel]="'Download'" [defaultDownloadName]="'image'" [showPDFOnlyOption]="false"
            [fullscreen]="true" [loadOnInit]="true" [showOptions]="false">
        </app-image-viewer>
    </div>
</div>

image component.scss

.no_img_headerarea
{
  display:none; 
}

.top-buffer:hover .no_img_headerarea
{
  display:block;
  z-index: 2;
  position:absolute;
  width:79.8%;
  top:0px;
}

.img_headerarea
{
  display:block;
  width:100%;
  top:0px;
}



imge component.ts


display_header:string;


ngOnInit(): void {
    this.display_header='no_pdf_headerarea';
  }


case 'pinToHeader':
        this.pinToHeader();
      break;
      case 'showPin':
        this.showPin();
      break;
     

pinToHeader()
  {
    this.display_header='img_headerarea';
  }
  showPin()
  {
    this.display_header='no_img_headerarea';
  }


