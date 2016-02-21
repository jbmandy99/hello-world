package com.mkyong;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.List;

import com.mkyong.rest.ExistingRequestTO;
import com.mkyong.rest.LabelValueBean;

public class Track {

	String title;
	String singer;
	
	
 
    private String domicileState;
    private List<LabelValueBean> stateList = new ArrayList<>();
    private List<LabelValueBean> pricingPlatformList = new ArrayList<>();
    private List<LabelValueBean> wrapList = new ArrayList<>();
    private String pricingPlatform;
    private String wrap;
    private String planName;
    private String planTypeDB;
    private List<LabelValueBean> performanceYearList = new ArrayList<>();
    private List<LabelValueBean> performanceMonthDayList = new ArrayList<>();
    private String selectedFundsOnly;
    private String contractNumber;
    private String planNumber;
    private String performanceYear;
    private String performanceDate;

    public Track(){
    	loadDecodes();
    }

    public void setPerformanceSummaryFromTO(ExistingRequestTO to) {
        setContractNumber(to.getContractNumber());
        setDomicileState(to.getDomicileState());
        setPricingPlatform(to.getPricingPlatform());
        setWrap(to.getWrapLevel());
        setPlanName(to.getPlanName());

         
    }

    public void loadDecodes() {

        this.stateList= new ArrayList<>();
        stateList.add(new LabelValueBean("NE","NE"));
        stateList.add(new LabelValueBean("NY","NY"));
        this.wrapList.add(new LabelValueBean( "0.00","c0"));
        this.wrapList.add(new LabelValueBean( "0.15","c15"));
        this.wrapList.add(new LabelValueBean( "0.25","c25"));
        this.wrapList.add(new LabelValueBean( "0.05","c5"));
        this.wrapList.add(new LabelValueBean( "0.15","c15"));
        this.wrapList.add(new LabelValueBean( "0.25","c25"));
        this.pricingPlatformList.add(new LabelValueBean("Legacy","L"));
        this.pricingPlatformList.add(new LabelValueBean("Neutral","N"));
        this.pricingPlatformList.add(new LabelValueBean("Large Plan","P"));
        this.performanceYearList.add(new LabelValueBean("2015","2015"));
        this.performanceYearList.add(new LabelValueBean("2016","2016"));

            setPerformanceYear("2016");
            setPlanTypeDB("No");
            setDomicileState("NY");
            NumberFormat nfm = new DecimalFormat("#0.00");
            setWrap(nfm.format(0));
            setPlanName("Jeff Plan");
            setPricingPlatform("N");
            setSelectedFundsOnly("N");
            setPlanTypeDB("No");
            setPlanNumber("123456");
 
    }

	
	

	 

	@Override
	public String toString() {
		return "Track [title=" + title + ", singer=" + singer + "]";
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSinger() {
		return singer;
	}

	public void setSinger(String singer) {
		this.singer = singer;
	}

	public String getDomicileState() {
		return domicileState;
	}

	public void setDomicileState(String domicileState) {
		this.domicileState = domicileState;
	}

	public List<LabelValueBean> getStateList() {
		return stateList;
	}

	public void setStateList(List<LabelValueBean> stateList) {
		this.stateList = stateList;
	}

	public List<LabelValueBean> getPricingPlatformList() {
		return pricingPlatformList;
	}

	public void setPricingPlatformList(List<LabelValueBean> pricingPlatformList) {
		this.pricingPlatformList = pricingPlatformList;
	}

	public List<LabelValueBean> getWrapList() {
		return wrapList;
	}

	public void setWrapList(List<LabelValueBean> wrapList) {
		this.wrapList = wrapList;
	}

	public String getPricingPlatform() {
		return pricingPlatform;
	}

	public void setPricingPlatform(String pricingPlatform) {
		this.pricingPlatform = pricingPlatform;
	}

	public String getWrap() {
		return wrap;
	}

	public void setWrap(String wrap) {
		this.wrap = wrap;
	}

	public String getPlanName() {
		return planName;
	}

	public void setPlanName(String planName) {
		this.planName = planName;
	}

	public String getPlanTypeDB() {
		return planTypeDB;
	}

	public void setPlanTypeDB(String planTypeDB) {
		this.planTypeDB = planTypeDB;
	}

	public List<LabelValueBean> getPerformanceYearList() {
		return performanceYearList;
	}

	public void setPerformanceYearList(List<LabelValueBean> performanceYearList) {
		this.performanceYearList = performanceYearList;
	}

	public List<LabelValueBean> getPerformanceMonthDayList() {
		return performanceMonthDayList;
	}

	public void setPerformanceMonthDayList(List<LabelValueBean> performanceMonthDayList) {
		this.performanceMonthDayList = performanceMonthDayList;
	}

	public String getSelectedFundsOnly() {
		return selectedFundsOnly;
	}

	public void setSelectedFundsOnly(String selectedFundsOnly) {
		this.selectedFundsOnly = selectedFundsOnly;
	}

	public String getContractNumber() {
		return contractNumber;
	}

	public void setContractNumber(String contractNumber) {
		this.contractNumber = contractNumber;
	}

	public String getPlanNumber() {
		return planNumber;
	}

	public void setPlanNumber(String planNumber) {
		this.planNumber = planNumber;
	}

	public String getPerformanceYear() {
		return performanceYear;
	}

	public void setPerformanceYear(String performanceYear) {
		this.performanceYear = performanceYear;
	}

	public String getPerformanceDate() {
		return performanceDate;
	}

	public void setPerformanceDate(String performanceDate) {
		this.performanceDate = performanceDate;
	}

	 
}
