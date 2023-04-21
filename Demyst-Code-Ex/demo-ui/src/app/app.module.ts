import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PreviewDetailComponent } from "./preview-detail/preview-detail.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataService } from "./data.service";
import { HttpClientModule } from "@angular/common/http";
import { Base } from "./base.model";
import { AckDetailsComponent } from './ack-details/ack-details.component';

@NgModule({
  declarations: [AppComponent, PreviewDetailComponent, CustomerDetailComponent, AckDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DataService, Base],
  bootstrap: [AppComponent],
})
export class AppModule {}
