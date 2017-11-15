import { Component, OnInit } from '@angular/core';
declare var $ :any;

import { fileData } from '../fileList';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  view:String;
  allFiles: any;

  constructor() { }

  ngOnInit() {
    this.view = 'pdf';
    this.allFiles = fileData.docList;
  }

}
