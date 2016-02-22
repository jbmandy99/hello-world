package com.mkyong.rest;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import com.jeff.json.MyJson;
import com.jeff.json.User;
import com.mkyong.Track;
import com.mkyong.Track2;

@Path("/metallica")
public class JSONService {

	@GET
	@Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
	public Track getTrackInJSON() {

		Track track = new Track();
		track.setTitle("Enter Sandman");
		track.setSinger("Metallica");

		return track;

	}

	@POST
	@Path("/post")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createTrackInJSON(Track track) {

		String result = "Track saved : " + track;
		return Response.status(201).entity(result).build();

	}
	
	@POST
	@Path("/postJson")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createTrackInJSONx(Track2 track) {


		return Response.status(201).entity(track).build();

	}
	

	@POST
	@Path("/getPerformanceSummaryTO/{contractNumber}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getPerformanceSummaryTO(@PathParam("contractNumber") String contractNumber) {

		Track track = new Track();

		List<LabelValueBean> list = new ArrayList<>();
		list.add(new LabelValueBean("11/01", "11/01/" + 2016));
		list.add(new LabelValueBean("10/01", "10/01/" + 2016));
		list.add(new LabelValueBean("09/01", "09/01/" + 2016));
		track.setPerformanceMonthDayList(list);
		track.setPerformanceDate("10/01/2016");
		track.setContractNumber(contractNumber);

		// try {
		// Thread.sleep(3000); //1000 milliseconds is one second.
		// } catch(InterruptedException ex) {
		// Thread.currentThread().interrupt();
		// }

		return Response.status(200).entity(track).build();
		// return Response.status(500).entity(null).build();

	}

	@POST
	@Path("/getPerformanceDateList/{year}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getPerformanceDateList(@PathParam("year") String year) {
		Track track = new Track();
		List<LabelValueBean> list = new ArrayList<>();
		list.add(new LabelValueBean("12/01", "12/01/" + year));
		list.add(new LabelValueBean("11/01", "11/01/" + year));
		list.add(new LabelValueBean("10/01", "10/01/" + year));
		list.add(new LabelValueBean("09/01", "09/01/" + year));
		track.setPerformanceMonthDayList(list);

		track.setPerformanceDate("2016".equals(year) ? "11/01/2016" : "10/01/2015");
		System.out.println(year);
		System.out.println(track.getPerformanceDate());
		return Response.status(200).entity(track).build();

	}

	@GET
	@Path("/getPdfDocument/{param}")
	@Produces("application/pdf")
	public Response getPdfDocumentx(@PathParam("param") String year) {
		System.out.println(year);
		String filename = "jefftest.pdf";
		// this will also create a docx in the back
		byte inBytes[] = year.getBytes();

		// File file = new File(FILE_PATH); Content-Disposition: attachment;
		// filename=foo.pdf

		ResponseBuilder response = Response.ok((Object) inBytes);
		response.header("Content-Disposition", "attachment; filename=foo.pdf");
		return response.build();

	}

	private static final String FILE_PATH = "C://Users/jeff/Downloads/OPPDbill_20160107.pdf";

	@GET
	@Path("/getJeffPdf")
	@Produces("application/pdf")
	public Response getFile() {

		File file = new File(FILE_PATH);
		ResponseBuilder response = Response.ok((Object) file);
		response.header("Content-Disposition", "attachment; filename=new-android-book.pdf");
		return response.build();

	}

	@GET
	@Path("/getJeffByte")
	@Produces("application/pdf")
	public Response getPdf() {
		File file = new File("c://bdlog.txt");
		FileInputStream fileInputStream = null;
		try {
			fileInputStream = new FileInputStream(file);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return Response.ok((Object) fileInputStream).header("Content-Disposition", "attachment; filename=abc.pdf") // optional
				.build();
	}

	  

	public static byte[] getByteArray(String fileNamePath) {

		File file = new File(fileNamePath);

		byte[] b = new byte[(int) file.length()];
		try {
			FileInputStream fileInputStream = new FileInputStream(file);
			fileInputStream.read(b);
			for (int i = 0; i < b.length; i++) {
				System.out.print((char) b[i]);
			}
		} catch (FileNotFoundException e) {
			System.out.println("File Not Found.");
			e.printStackTrace();
		} catch (IOException e1) {
			System.out.println("Error Reading The File.");
			e1.printStackTrace();
		}
		return b;

	}

	public void WriteByteArrayToFile(String strFilePath) {

		try {
			FileOutputStream fos = new FileOutputStream(strFilePath);
			String strContent = "Write File using Java ";

			fos.write(strContent.getBytes());
			fos.close();
		} catch (FileNotFoundException ex) {
			System.out.println("FileNotFoundException : " + ex);
		} catch (IOException ioe) {
			System.out.println("IOException : " + ioe);
		}

	}

	@GET
	@Path("/getJeffPdfDynamic")
	@Produces("application/pdf")
	public Response getFileDynamic() {

		//
		byte[] bytearray = getByteArray(FILE_PATH);
		
		//
		
		
		File file = new File(FILE_PATH);
		FileInputStream fileInputStream = null;
		//or
		ByteArrayInputStream fileInputStreamx=null;
		try {
			fileInputStream = new FileInputStream(file);
			fileInputStreamx = new ByteArrayInputStream(bytearray);

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//		return Response.ok((Object) fileInputStreamx).header("Content-Disposition", "attachment; filename=abc.pdf") // optional
		return Response.ok((Object) fileInputStreamx).header("Content-Disposition", "attachment; filename=abc.pdf") // optional
				.build();
	}

	/*******************/
	@POST
	@Path("/passObject")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	//http://www.mkyong.com/webservices/jax-rs/json-example-with-jersey-jackson/
	public Response passObject(User test) {
	   System.out.println(test);
	
 		return Response.status(201).entity(MyJson.createDummyUser()).build();

	}

}