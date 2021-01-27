import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreatComponent } from './views/product/creat/creat.component';
import { ReportComponent } from './views/product/report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
