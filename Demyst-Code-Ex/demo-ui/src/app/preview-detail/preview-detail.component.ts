import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { from } from "rxjs";
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { Base } from "../base.model";

@Component({
  selector: "app-preview-detail",
  templateUrl: "./preview-detail.component.html",
  styleUrls: ["./preview-detail.component.scss"],
})
export class PreviewDetailComponent implements OnInit {
  rForm: FormGroup;
  formData: any;
  loanAmount: string;
  loanTenure: number;
  interestRate = 30;
  customerName: string;
  appliedYear: string;
  profitOrLoss: string;
  assetValue: string;
  accountingProviders: any;
  emi = null;
  responseData: [];
  preAssessment: any;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private baseRequest: Base
  ) {
    this.rForm = fb.group({
      loanAmount: [null, Validators.required],
      loanTenure: [null, Validators.required],
      tenureType: ["Month", Validators.required],
    });
  }

  ngOnInit() {
    //this.responseData = localStorage.getItem("data");
    this.customerName = localStorage.getItem("name");
    this.appliedYear = localStorage.getItem("appliedYear");
    this.loanAmount = localStorage.getItem("loanAmount");
    this.accountingProviders = localStorage.getItem("accountingProviders");
    this.profitOrLoss = localStorage.getItem("profitOrLoss");
    this.assetValue = localStorage.getItem("assetValue");
    this.responseData = JSON.parse(localStorage.getItem("balanceSheetList"));
  }

  submitDetails(data) {
    this.baseRequest = new Base();
    this.baseRequest.customerName = this.customerName;
    this.baseRequest.appliedYear = this.appliedYear;
    this.baseRequest.loanAmount = this.loanAmount;
    this.baseRequest.profitOrLoss = this.profitOrLoss;
    this.baseRequest.assetValue = this.assetValue;
    this.baseRequest.accountingProviders = this.accountingProviders;    
    this.dataService
      .submitBusinessDetails(this.baseRequest)
      .subscribe((resp) => {
        this.preAssessment = resp;
        localStorage.setItem("preAssessment", this.preAssessment);
        this.router.navigate(["ack"]);
      });
  }

  /** Getters */
  getLoanAmount() {
    return this.rForm.get("loanAmount");
  }

  getLoanTenure() {
    return this.rForm.get("loanTenure");
  }

  getTenureType() {
    return this.rForm.get("tenureType");
  }
}
