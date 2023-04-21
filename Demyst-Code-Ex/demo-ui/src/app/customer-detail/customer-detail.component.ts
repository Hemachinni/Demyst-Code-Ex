import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Subscription, from } from "rxjs";
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { Base } from "../base.model";
import { BalanceSheet } from "../balance-sheet.model";

@Component({
  selector: "app-customer-detail",
  templateUrl: "./customer-detail.component.html",
  styleUrls: ["./customer-detail.component.scss"],
})
export class CustomerDetailComponent implements OnInit {
  subscriptions = new Subscription();
  baseModel: Base;
  cusForm: FormGroup;
  customerName: string;
  loanAmount: string;
  appliedYear: string;
  profitOrLoss: string;
  accountingProviders: any;
  assetValue: string;
  submitted = false;
  resObj = [];
  res: any;
  dataList: Array<BalanceSheet>;
  dataObj: BalanceSheet;
  constructor(
    public fb: FormBuilder,
    public dataService: DataService,
    public router: Router
  ) {
    this.cusForm = fb.group({
      customerName: [null, Validators.required],
      accountingProviders: [null],
      appliedYear: [null],
      profitOrLoss: [null],
      assetValue: [null],
      loanAmount: [null, Validators.required],
      loanTenure: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.accountingProviders = [{ name: "Xero" }, { name: "MYOB" }];
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * Sending form data to the provided email address
   *
   * @param data
   */
  submitLoanApplication(data) {
    this.customerName = data.customerName;
    this.accountingProviders = data.accountingProviders;
    this.appliedYear = data.appliedYear;
    this.loanAmount = data.loanAmount;
    this.profitOrLoss = data.profitOrLoss;
    this.assetValue = data.assetValue;
    this.baseModel = new Base();
    this.baseModel.customerName = data.customerName;
    this.baseModel.accountingProviders = data.accountingProviders;
    this.baseModel.appliedYear = data.appliedYear;
    this.baseModel.loanAmount = data.loanAmount;
    this.baseModel.profitOrLoss = data.profitOrLoss;
    this.baseModel.assetValue = data.assetValue;
    localStorage.setItem("name", this.baseModel.customerName);
    localStorage.setItem(
      "accountingProviders",
      this.baseModel.accountingProviders
    );
    localStorage.setItem("appliedYear", this.baseModel.appliedYear);
    localStorage.setItem("loanAmount", this.baseModel.loanAmount);
    localStorage.setItem("profitOrLoss", this.baseModel.profitOrLoss);
    localStorage.setItem("assetValue", this.baseModel.assetValue);
    this.subscriptions.add(
      this.dataService.fetchBalanceSheet().subscribe((response: any) => {
        localStorage.setItem("data", response);
        localStorage.setItem("balanceSheetList", JSON.stringify(response));
        this.router.navigate(["preview"]);
      })
    );
  }

  /** Getters */

  get f() {
    return this.cusForm.controls;
  }

  getCustomerName() {
    return this.cusForm.get("customerName");
  }

  getCustomerMobileNumber() {
    return this.cusForm.get("customerMobileNumber");
  }

  getCustomerPanNumber() {
    return this.cusForm.get("customerPanNumber");
  }

  getCustomerEmailId() {
    return this.cusForm.get("customerEmailId");
  }

  getCustomerSalary() {
    return this.cusForm.get("customerSalary");
  }

  getCustomerAddress() {
    return this.cusForm.get("customerAddress");
  }

  getLoanAmount() {
    return this.cusForm.get("loanAmount");
  }

  getLoanTenure() {
    return this.cusForm.get("loanTenure");
  }

  getTenureType() {
    return this.cusForm.get("tenureType");
  }
}
