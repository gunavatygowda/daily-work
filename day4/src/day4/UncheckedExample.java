package day4;
import java.io.*;

public class UncheckedExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
		validateAge(17);

	}catch(InvalidAgeException e) {
		e.printStackTrace();
	}
		System.out.println("finished");
	}

	private static void validateAge(int age) {
		// TODO Auto-generated method stub
		if(age<18) {
			throw new InvalidAgeException("Age must be greater than 18");
	}
		
	}

}
