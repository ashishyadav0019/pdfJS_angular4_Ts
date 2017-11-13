import { Component, OnInit, Input } from '@angular/core';
import { PdfHandlerService } from '../../pdf-handler.service'

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent implements OnInit {
  @Input() viewData;
  pdf:any;
  constructor(private pdfHandlerService : PdfHandlerService ) { }

  ngOnInit() {
   this.setInitialProof();
  }

  setInitialProof() {
    this.pdfHandlerService.setPdfDocObjects(this.viewData[0]).then((pdf)=>{
      this.pdf = pdf;
      this.pdf.getPage(6).then((page)=> {
       let scale = 1.5;
       let viewport = page.getViewport(scale);
       let canvas : any = document.getElementById('main-canvas');
       let context= canvas.getContext('2d');
       canvas.height = viewport.height;
       canvas.width = viewport.width;
       let renderContext = {
         canvasContext: context,
         viewport: viewport
       };
       page.render(renderContext);
     })
    });

  }


}
