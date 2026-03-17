package day4;

import java.io.FileWriter;

public class FileWriteExample {
	public static void main(String[] args) throws Exception {
		FileWriter writer= new FileWriter("output.txt");
		writer.write("Hello Java IO File");
		writer.close();
		
	}

}

