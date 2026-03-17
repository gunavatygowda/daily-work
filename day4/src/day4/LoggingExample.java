package day4;
import java.util.logging.*;

public class LoggingExample {
	private static final Logger logger = Logger.getLogger(LoggingExample.class.getName());
	public static void main(String[] args) {
		logger.info("Application started");
		logger.info("Low memory warning");
		logger.info("System failure");
	}

}
