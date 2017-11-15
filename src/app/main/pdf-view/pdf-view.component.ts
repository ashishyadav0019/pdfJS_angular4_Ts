import {Component, OnInit, Input} from '@angular/core';
import {PdfHandlerService} from '../../pdf-handler.service';




@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent implements OnInit {
  @Input() viewData;
  totalPages: number;
  pageNumber: number = 1;

  pdf: any;

  constructor(private pdfHandlerService: PdfHandlerService) {
  }

  ngOnInit() {
    this.setInitialProof();
  }

  setInitialProof() {
    this.pdfHandlerService.setPdfDocObjects(this.viewData[0]).then((pdf) => {
      this.pdf = pdf;
      this.totalPages = this.pdf.pdfInfo.numPages;
      this.generateView(this.pageNumber);
    });

  }

  generateView(pageNumber) {
    this.pdf.getPage(pageNumber).then((page) => {
      let scale = 1;
      let viewport = page.getViewport(scale);
      let textLayerDiv: any = document.getElementById("page_1");
      let canvas: any = document.getElementById('main-canvas');
      let context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      let renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);

      page.getTextContent().then(function (textContent) {

        // let textLayer = new TextLayerBuilder({
        //   textLayerDiv: textLayerDiv,
        //   pageIndex: pageNumber - 1,
        //   viewport: viewport
        // });
        // textLayer.setTextContent(textContent);
        // textLayer.render(20);
      });
    });
  }

  changePagePrevious() {
    this.pageNumber = this.pageNumber - 1;
    if (this.pageNumber == 0) {
      alert("firstPage");
      this.pageNumber = 1;
    }
    else {
      this.generateView(this.pageNumber)
    }
  }

  changePageNext() {
    this.pageNumber = this.pageNumber + 1;

    if (this.pageNumber >= this.totalPages) {
      alert("LastPage");
      this.pageNumber = 641;
    }
    else {
      this.generateView(this.pageNumber)
    }
  }

}
