package day4;
import java.util.logging.*;
import java.io.*;

public class LoggerExample {
	private static final Logger logger = Logger.getLogger(LoggerExample.class.getName());

	public static void main(String[] args) {
		try(BufferedReader reader = new BufferedReader(new FileReader("data.txt"))){
			String line;
			while((line = reader.readLine())!=null) {
				logger.info(line);
			}
		}
		catch (IOException e) {
			logger.severe("File reading error:"+e.getMessage());
		}
	}

}
