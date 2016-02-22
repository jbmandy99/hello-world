package com.jeff.json;

import java.util.List;
import org.codehaus.jackson.map.annotate.JsonView;
public class User {

	@JsonView(Views.NameOnly.class)
	private String name;

	@JsonView(Views.AgeAndName.class)
	private int age;
	private List<String> messages;
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the age
	 */
	public int getAge() {
		return age;
	}
	/**
	 * @param age the age to set
	 */
	public void setAge(int age) {
		this.age = age;
	}
	/**
	 * @return the messages
	 */
	public List<String> getMessages() {
		return messages;
	}
	/**
	 * @param messages the messages to set
	 */
	public void setMessages(List<String> messages) {
		this.messages = messages;
	}

	//getters and setters
}