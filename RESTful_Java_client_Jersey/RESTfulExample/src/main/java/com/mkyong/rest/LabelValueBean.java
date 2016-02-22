package com.mkyong.rest;

import java.io.Serializable;

public class LabelValueBean implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -1697955985471108103L;
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	
	public LabelValueBean(String a, String b){
		label=a;
		value =b;
	}
	private String label="";
	private String value="";
}
