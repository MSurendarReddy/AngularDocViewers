# AngularDocViewers

npm install iv-viewer --save
npm install ng2-image-viewer --save
npm install ng2-pdf-viewer --save
npm install tiff.js --save
ng generate library DocViewerLib


package.json  
    "browser": {
    "crypto": false,
    "fs": false,
    "path":false
  }
  
angular.json  
    "node_modules/ng2-image-viewer/imageviewer.scss"
	
tsconfig.json 
    "angularCompilerOptions": {
        "enableIvy": false,
	}


index.html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	
angular.json  script
     "node_modules/ng2-image-viewer/imageviewer.scss"
	 
