package day4;
import java.util.*;

public class ExceptionExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			int result  = 10/0;
			System.out.println(result);
		}
		catch(ArithmeticException e) {
			System.out.println("Cannot divide by zero");
		}
		finally {
			System.out.println("program finished");
		}

	}

}
