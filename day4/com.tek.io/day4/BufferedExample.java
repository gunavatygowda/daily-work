package day4;

import java.io.FileReader;
import java.io.BufferedReader;

public class BufferedExample {

	public static void main(String[] args)throws Exception {
		// TODO Auto-generated method stub
		BufferedReader reader = new BufferedReader(new FileReader("data.txt"));
		String line;
		while((line = reader.readLine())!= null){
			System.out.println(line);
		}
		reader.close();

	}

}
