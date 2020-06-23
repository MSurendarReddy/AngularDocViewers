footer-icon {
  font-size: xx-large;
  margin-top:0px !important;
}

.viewer-tooltip {
  position: relative;
  display: inline-block;
  z-index: 1000;
}

.viewer-tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 40%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.viewer-tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.viewer-tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
.viewer-header {
  width: 100%;
}

.viewer-icon{
  z-index:1000;
}

.options-viewer{
  visibility:inherit;
 }

.pdf_icons_with_search
{
  position:absolute;
  right:10px;
  top:10px;
}

.footer-nav
{
   color:white;
   font-size:20px;
   font-weight:bold;
   cursor:pointer;
}

.search_box
{
 display:inline-block;
 width:450px;
 margin-top:5px;
 margin-bottom:5px;
 margin-left:10px;
}
.searchbox-header 
{
  border: 1px;
  padding: 8px;
  border-radius:5px;
  background-color: white;
  width:80%;
}
.search_box .up
{
  position:absolute;
  margin-left:-45px;
  margin-top:8px;
  cursor:pointer;
}
.search_box .down
{
  position:absolute;
  margin-left:-25px;
  margin-top:8px;
  cursor:pointer;
}

.pagination_nav
{
  display:inline-block;
  position:absolute;
  top:10px;
}

input:focus
{
  outline:none;
}



div id="{{idContainer}}" class="viewer-header">
    <div class="viewer-icon" [ngStyle]="{'background-color':HeaderColor}">
        <div *ngIf="showOptions" class="options-viewer">
            <div class="search_box">  
                    <!-- *ngIf="type=='pdf'" -->
                    <input #queryInp type="text" id="searchbox-header" name="searchbox" class="searchbox-header"
                        placeholder="Search..." [value]="pdfQuery" (input)="searchInPDF($event.target.value)"
                        (keyup.enter)="searchInPDF(queryInp.value)" autocomplete="off"/>
                        <span *ngIf="(queryInp.value!='')">
                        <i class="material-icons up" (click)="searchPreviousInPDF(queryInp.value)">keyboard_arrow_up</i>
                        <i class="material-icons down" (click)="searchInPDF(queryInp.value)">keyboard_arrow_down</i> 
                       </span>                
            </div>
            <div *ngIf="type=='pdf'" class="pagination_nav">
                <a class="viewer-tooltip" *ngIf="zoomInButton" (click)="incrementPage(-1)">
                    <span *ngIf="enableTooltip" class="tooltiptext">Previous</span>
                    <i class="material-icons footer-nav">navigate_before</i>
                </a>
                <!-- <span style="color:white;">1 /: 20</span>  value="20" -->
                <span style="color:white;">
                    <input type="text" [(ngModel)]="page" (keyup)="pageSearch($event)" style="width: 10%;text-align: center;"  pattern="-?[0-9]*(\.[0-9]+)?" /> / <input type="text"
                         [(ngModel)]="totalPages"  style="width: 10%;text-align: center;background-color:grey;border:none;" readonly />
                </span>

                <a class="viewer-tooltip" *ngIf="zoomInButton" (click)="incrementPage(1)">
                    <span *ngIf="enableTooltip" class="tooltiptext">Next</span>
                    <i class="material-icons footer-nav">navigate_next</i>
                </a>
            </div>
            <div class="pdf_icons_with_search">
                <a class="viewer-tooltip" *ngIf="zoomInButton" (click)="zoomIn()">
                    <span *ngIf="enableTooltip" class="tooltiptext">{{zoomInTooltipLabel}}</span>
                    <i class="material-icons footer-icon ">zoom_in</i>
                </a>
                <a class="viewer-tooltip" *ngIf="zoomOutButton" (click)="zoomOut()">
                    <span *ngIf="enableTooltip" class="tooltiptext">{{zoomOutTooltipLabel}}</span>
                    <i class="material-icons footer-icon">zoom_out</i>
                </a>
                <a class="viewer-tooltip" *ngIf="rotate" (click)="roteteRight()">
                    <span *ngIf="enableTooltip" class="tooltiptext">{{rotateRightTooltipLabel}}</span>
                    <i class="material-icons footer-icon">rotate_right</i>
                </a>
                <a class="viewer-tooltip" *ngIf="rotate" (click)="roteteLeft()">
                    <span *ngIf="enableTooltip" class="tooltiptext">{{rotateLeftTooltipLabel}}</span>
                    <i class="material-icons footer-icon">rotate_left</i>
                </a>
                <a class="viewer-tooltip" *ngIf="resetZoom" (click)="resetimageZoom()">
                    <span *ngIf="enableTooltip" class="tooltiptext">{{resetZoomTooltipLabel}}</span>
                    <i class="material-icons footer-icon">fullscreen_exit</i>
                </a>

                <a class="viewer-tooltip" (click)="fullScreen()">
                    <span *ngIf="enableTooltip" class="tooltiptext">{{fullscreenTooltipLabel}}</span>
                    <i class="material-icons footer-icon">fullscreen</i>
                </a>

                <a class="viewer-tooltip" *ngIf="download" (click)="downloadFile()">
                    <span *ngIf="enableTooltip" class="tooltiptext">{{downloadTooltipLabel}}</span>
                    <i class="material-icons footer-icon">file_download</i>
                </a>
                <a class="viewer-tooltip" *ngIf="print" (click)="printFile()">
                    <span *ngIf="enableTooltip" class="tooltiptext">{{printTooltipLabel}}</span>
                    <i class="material-icons footer-icon">print</i>
                </a>
            </div>
    </div>
</div>



 ngOnInit(): void {
    this.zoom = 1;
    this.rotation = 0;
    this.headercolor="#999999";
  }



<div class="container">
    <lib-header [type]="'image'" (parentFun)="parentFun($event)" [HeaderColor]="headercolor">
    </lib-header>
    <div style="margin-top:-60px;">
    <app-image-viewer [images]="images" [idContainer]="'idOnHTML'" [download]="true" [downloadTooltipLabel]="'Download'"
        [defaultDownloadName]="'image'" [showPDFOnlyOption]="false" [fullscreen]="true" [loadOnInit]="true"
        [showOptions]="false">
    </app-image-viewer>
</div>
</div>
