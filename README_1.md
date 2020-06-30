npm install print-js --save
import * as printJS2 from 'print-js';


    printJS2({
      printable: '' + this.images[0],
      type: "image",
      style: ".result {visibility: visible;font-size: 30px;color: green;}",
      css: "src/style.css"
    });
	
	
    printJS2({
      printable: '' + this.pdfSrc,
      type: "pdf",
      style: ".result {visibility: visible;font-size: 30px;color: green;}",
      css: "src/style.css"
    });
