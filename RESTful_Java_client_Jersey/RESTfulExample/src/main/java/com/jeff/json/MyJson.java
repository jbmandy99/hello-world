package com.jeff.json;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.SerializationConfig;

public class MyJson {
//http://www.mkyong.com/java/how-to-convert-java-object-to-from-json-jackson/
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MyJson json = new MyJson();
		try {
			json.convertJsonToObject();
			json.convertObjectToJson();
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void convertJsonToObject() throws JsonParseException, JsonMappingException, IOException{
		ObjectMapper mapper = new ObjectMapper();
		 

			// Convert JSON string from file to Object
//			User user = mapper.readValue(new File("G:\\user.json"), User.class);
//			System.out.println(user);

			// Convert JSON string to Object
			String jsonInString = "{\"age\":33,\"messages\":[\"msg 1\",\"msg 2\"],\"name\":\"mkyong\"}";
			User user = mapper.readValue(jsonInString, User.class);
		 
			System.out.println(user.getName() + " " + user.getAge() + " " + user.getMessages());
			//User [name=mkyong, age=33, messages=[msg 1, msg 2]]
	}
	public void convertObjectToJson() throws JsonGenerationException, JsonMappingException, IOException{
		ObjectMapper mapper = new ObjectMapper();
		String jsonInString = mapper.writeValueAsString(createDummyUser());
		System.out.println(jsonInString);
	}
	
	
	 
	
	public static User createDummyUser(){
		
		User user = new User();
		
		user.setName("mkyong");
		user.setAge(33);

		List<String> msg = new ArrayList<>();
		msg.add("hello jackson 1");
		msg.add("hello jackson 2");
		msg.add("hello jackson 3");

		user.setMessages(msg);
		
		return user;
		
	}
	
	public void notWorkingView(){
		ObjectMapper mapper = new ObjectMapper();
		//By default all fields without explicit view definition are included, disable this
		mapper.configure(SerializationConfig.Feature.DEFAULT_VIEW_INCLUSION, false);
		 
		//For testing
		User user = createDummyUser();
		
			//display name only
//			String jsonInString = mapper.writerWithView(Views.NameOnly.class).writeValueAsString(user);
//			System.out.println(jsonInString);
//			
//			//display namd ana age
//			jsonInString = mapper.writerWithView(Views.AgeAndName.class).writeValueAsString(user);
//			System.out.println(jsonInString);
			
	}
	
}
