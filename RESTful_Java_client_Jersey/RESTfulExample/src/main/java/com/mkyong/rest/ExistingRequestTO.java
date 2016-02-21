package com.mkyong.rest;

public class ExistingRequestTO {
	String contractNumber;
	String domicileState;
	String pricingPlatform;
	String wrapId;
	String planName;
	String wrapLevel;
	
	public String getContractNumber() {
		return contractNumber;
	}
	public void setContractNumber(String contractNumber) {
		this.contractNumber = contractNumber;
	}
	public String getDomicileState() {
		return domicileState;
	}
	public void setDomicileState(String domicileState) {
		this.domicileState = domicileState;
	}
	public String getPricingPlatform() {
		return pricingPlatform;
	}
	public void setPricingPlatform(String pricingPlatform) {
		this.pricingPlatform = pricingPlatform;
	}
	public String getWrapId() {
		return wrapId;
	}
	public void setWrapId(String wrapId) {
		this.wrapId = wrapId;
	}
	public String getPlanName() {
		return planName;
	}
	public void setPlanName(String planName) {
		this.planName = planName;
	}
	public String getWrapLevel() {
		return wrapLevel;
	}
	public void setWrapLevel(String wrapLevel) {
		this.wrapLevel = wrapLevel;
	}
 
}
