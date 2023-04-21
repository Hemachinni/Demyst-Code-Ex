package com.sb.example.demo.controllers;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DemoController {

	@GetMapping(path = "/fetchBalanceSheet")
	public List<BalanceSheetBean> fetchBalanceSheet() {
		List<BalanceSheetBean> listBalanceSheetBean = getBlanceSheet();
		return listBalanceSheetBean;
	}
	
	@PostMapping(path = "/submitBusinessDetails")
	public String submitForPreAssessment(@RequestBody Base businessDetailBean) {
		
		String preAssessment = null;
		int profitOrLoss= Integer.parseInt(businessDetailBean.getProfitOrLoss());
		int assertValue = Integer.parseInt(businessDetailBean.getAssetValue());
		int loanAmount = Integer.parseInt(businessDetailBean.getLoanAmount());		
		long months = ChronoUnit.MONTHS.between(LocalDate.parse(businessDetailBean.getAppliedYear()),
	    		   (java.time.LocalDate.now()));		   

			if (months <= 12) {
				if (assertValue > profitOrLoss ) {					
					preAssessment = "20";
				} else if (profitOrLoss > assertValue) {
					if (assertValue >= loanAmount) {
						preAssessment = "100";
					} else {
						preAssessment = "60";
					}
				}else {
					preAssessment = "20";
				}
			}else {
				preAssessment = "20";
			}
		
		return preAssessment;
	}

	private List<BalanceSheetBean> getBlanceSheet() {
		List<BalanceSheetBean> listBalanceSheetBean = new ArrayList<>();
		BalanceSheetBean balanceSheetBean1 = new BalanceSheetBean();
		balanceSheetBean1.setYear("2020");
		balanceSheetBean1.setMonth("12");
		balanceSheetBean1.setProfitOrLoss("250000");
		balanceSheetBean1.setAssetsValue("1234");
		BalanceSheetBean balanceSheetBean2 = new BalanceSheetBean();
		balanceSheetBean2.setYear("2020");
		balanceSheetBean2.setMonth("11");
		balanceSheetBean2.setProfitOrLoss("1150");
		balanceSheetBean2.setAssetsValue("5789");

		BalanceSheetBean balanceSheetBean3 = new BalanceSheetBean();
		balanceSheetBean3.setYear("2020");
		balanceSheetBean3.setMonth("10");
		balanceSheetBean3.setProfitOrLoss("2500");
		balanceSheetBean3.setAssetsValue("22345");

		BalanceSheetBean balanceSheetBean4 = new BalanceSheetBean();
		balanceSheetBean4.setYear("2020");
		balanceSheetBean4.setMonth("9");
		balanceSheetBean4.setProfitOrLoss("-187000");
		balanceSheetBean4.setAssetsValue("223452");
		listBalanceSheetBean.add(balanceSheetBean1);
		listBalanceSheetBean.add(balanceSheetBean2);
		listBalanceSheetBean.add(balanceSheetBean3);
		listBalanceSheetBean.add(balanceSheetBean4);
		return listBalanceSheetBean;
	}
	
}
