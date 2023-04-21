package com.sb.example.demo.controllers;

import java.util.List;

public class Base {
	private String customerName;
	private String  loanAmount;
	private String  appliedYear;
	private String  profitOrLoss;
	private String  accountingProviders;
	private String assetValue;
	
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getLoanAmount() {
		return loanAmount;
	}
	public void setLoanAmount(String loanAmount) {
		this.loanAmount = loanAmount;
	}
	public String getAppliedYear() {
		return appliedYear;
	}
	public void setAppliedYear(String appliedYear) {
		this.appliedYear = appliedYear;
	}
	public String getProfitOrLoss() {
		return profitOrLoss;
	}
	public void setProfitOrLoss(String profitOrLoss) {
		this.profitOrLoss = profitOrLoss;
	}
	public String getAccountingProviders() {
		return accountingProviders;
	}
	public void setAccountingProviders(String accountingProviders) {
		this.accountingProviders = accountingProviders;
	}
	public String getAssetValue() {
		return assetValue;
	}
	public void setAssetValue(String assetValue) {
		this.assetValue = assetValue;
	}
	
}
