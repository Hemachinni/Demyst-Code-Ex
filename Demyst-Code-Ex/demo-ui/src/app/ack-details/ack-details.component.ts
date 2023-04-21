import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ack-details",
  templateUrl: "./ack-details.component.html",
  styleUrls: ["./ack-details.component.scss"],
})
export class AckDetailsComponent implements OnInit {
  preAssessment: any;
  constructor() {}

  ngOnInit() {
    this.preAssessment = localStorage.getItem("preAssessment");
  }
}
