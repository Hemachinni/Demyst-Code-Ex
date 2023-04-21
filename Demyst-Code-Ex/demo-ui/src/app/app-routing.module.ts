import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import { PreviewDetailComponent } from "./preview-detail/preview-detail.component";
import { AckDetailsComponent } from "./ack-details/ack-details.component";

const routes: Routes = [
  {
    path: "",
    component: CustomerDetailComponent,
  },
  {
    path: "preview",
    component: PreviewDetailComponent,
  },
  {
    path: "ack",
    component: AckDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
