Header component.ts

(above page search function)

 ClickinPagination(pagination)
  {
    const pagenumbercheck =parseInt(pagination.target.value)
    this.parentFun.emit({ operation: "pagination", Pagination : pagenumbercheck });
  }


Header component.html

page box

<input type="text" [(ngModel)]="page" (keyup.enter)="pageSearch($event)" (keyup)="ClickinPagination($event)" style="width: 10%;text-align: center;"  pattern="-?[0-9]*(\.[0-9]+)?" /> / <input type="text"
                         [(ngModel)]="totalPages"  style="width: 10%;text-align: center;background-color:grey;border:none;" readonly />
             


PDF compnent.ts

showsinglepage:boolean;


ngOnInit(): void {
    this.showsinglepage=true;
  }


case 'pagination':
        this.PaginationNocheck(type.Pagination);
         break;
      

incrementPage(amount: number) {
    this.showsinglepage= false;
    this.page += amount;
    if(this.page<=1){
      this.page = 1;
      this.showsinglepage= true;
    }
  }
  PaginationNocheck(pagenumbercheck)
  {
    if(pagenumbercheck===1)
    {
      this.showsinglepage= true;
    }
    if(pagenumbercheck>1)
    {
      this.showsinglepage= false;
    }
  }
  

PDF component.ts

.pdf_headerarea
{
  display:block;
  position:fixed;
  z-index: 999;
  width:80.8%;
  top:0;
}

PDF component.html

<pdf-viewer #pdfComp [src]="pdfSrc" [show-all]="showsinglepage" [zoom]="zoom" [rotation]="rotation" [(page)]="page"
                [render-text]="true" (on-progress)="onProgress($event)"
                (after-load-complete)="afterLoadComplete($event)" style="display: block;">
            </pdf-viewer>

