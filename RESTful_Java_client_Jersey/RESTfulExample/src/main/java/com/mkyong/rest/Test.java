package com.mkyong.rest;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.text.DecimalFormat;
import java.text.NumberFormat;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
        Test t = new Test();
        try {
			t.xx();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	
	
	
	
	
	
	
	
	
	
	
	
	

	  
	 
	    public static void xx() throws IOException {
	        File file = new File("c://bdlog.txt");
	 
	        
	 
	        //System.out.println(file.exists() + "!!");
	        //InputStream in = resource.openStream();
	        ByteArrayOutputStream bos = new ByteArrayOutputStream();
	        byte[] buf = new byte[1024];
	        try {
	        	FileInputStream fis  = new FileInputStream(file);
	            for (int readNum; (readNum = fis.read(buf)) != -1;) {
	                bos.write(buf, 0, readNum); //no doubt here is 0
	                //Writes len bytes from the specified byte array starting at offset off to this byte array output stream.
	                System.out.println("read " + readNum + " bytes,");
	            }
	        } catch (IOException ex) {
	            //Logger.getLogger(genJpeg.class.getName()).log(Level.SEVERE, null, ex);
	        }
	        byte[] bytes = bos.toByteArray();
	 
	        //below is the different part
	        File someFile = new File("c://workspace/java3.pdf");
	        FileOutputStream fos = new FileOutputStream(someFile);
	        fos.write(bytes);
	        fos.flush();
	        fos.close();
	    }
 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
