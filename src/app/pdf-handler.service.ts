import {Injectable} from '@angular/core';
declare let PDFJS: any;


@Injectable()
export class PdfHandlerService {
  url: String;
  pdfDoc: any = {};
  pageObjectPromise: any = {};

  constructor() { }

  setPdfDocObjects(data) {
    let self = this;
    let docId = data.docId;
    return new Promise((resolve, reject) => {
      self.url = '/assets/' + data.url;
      PDFJS.getDocument(this.url)
        .then( (_pdfDoc)=> {
            self.pdfDoc[docId] = _pdfDoc;
            resolve(_pdfDoc);
          },
           (error) => {
            reject(error);
          });
    });

  }

  generateThumbnail(page,data){

  }

}
