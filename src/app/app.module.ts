import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {HtmlViewComponent} from './main/html-view/html-view.component';
import {PdfViewComponent} from './main/pdf-view/pdf-view.component';
import {AppRoutingModule} from './/app-routing.module';

import {PdfHandlerService} from './pdf-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HtmlViewComponent,
    PdfViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PdfHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
