package day4;
import java.io.FileReader;

public class FileReadExample {
	public static void main(String[] args) throws Exception {
		FileReader reader = new FileReader("data.txt");
		int character;
		while((character = reader.read())!= -1) {
			System.out.println((char) character);
		}
		reader.close();
	}

}
