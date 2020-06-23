

BodyComponent.ts
   
   
    public moduleType: string
    public configObj: any
  
  
     this.configObj = {
          "Img": [{ "imgSrc": this.fileSrc, "imgType": this.fileType, "width": "100px", "height": "100px",
          "fileName": name, "headerBackgroudColour": "", "bodyBackgroudColour": "",
          "downloadCallBackRequired": false, "printCallBackRequired": false }]
        }
        this.moduleType = "Image";
		
		
		
		
		 this.configObj = {
          "Pdf": [{
            "pdfSrc": this.fileSrc, "pdfType": this.fileType, "width": "100px", "height": "100px",
            "fileName": name, "headerBackgroudColour": "", "bodyBackgroudColour": "",
            "downloadCallBackRequired": false, "printCallBackRequired": false
          }]
        };

        this.moduleType = "Pdf";
		
		
		
		
<lib-DocViewerLib [configObj]='configObj' [moduleType]="moduleType">
</lib-DocViewerLib>


DocViewerLibComponent.ts
     @Input() public configObj: any;
  @Input() public moduleType: any;
  
  
  <lib-common-doc-viewer   
      [configObj]='configObj' [moduleType]="moduleType" ></lib-common-doc-viewer>
	  
	  
	  
	  
	  CommonDocViewerComponent.ts
	  
	       // @Input() public fileSrc: string;
  // @Input() public fileType: string;
  @Input() public configObj: any;
  @Input() public moduleType: any;
  
    public pdfConfig: any
  public imgConfig: any
  public fileSrc: string;
  
  
   ngAfterViewInit() {
      
  console.log("this.pdfConfig ", this.pdfConfig)
  console.log("this.imgConfig ", this.imgConfig)

    if (this.moduleType == "Pdf") {
      this.pdfConfig = this.configObj.Pdf
      console.log("-------this.pdfConfig",this.pdfConfig)
      console.log("-------this.configObj",this.configObj.Pdf[0].pdfSrc)
      this.fileSrc = this.configObj.Pdf[0].pdfSrc
      this.enrichPdfComponent()
    } else {
      this.imgConfig = this.configObj.Img
      console.log("-------this.configObj",this.configObj)
      console.log("-------this.configObj",this.configObj.Img[0].imgSrc)
      this.fileSrc = this.configObj.Img[0].imgSrc
      this.enrichImageComponent()
      
    }
  }
  
