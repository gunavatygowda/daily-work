package day4;

import java.io.*;

public class CheckedExample {
	public static void main(String[] args) {
		try {
			readfile();
		}
		catch(FileNotFoundException e) {
			System.out.println("File not found");
		}
	}

	private static void readfile() throws FileNotFoundException {
		// TODO Auto-generated method stub
		FileReader file = new FileReader("data.txt");
		
	}

}
