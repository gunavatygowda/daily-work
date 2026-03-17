package com.tek.fi;
//odd number must be squared and even number should be left as it is -> that's the question
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class RefactoredStreamExample {
	public static void main(String[] args) {
		stream1();
	}  
	private static void stream1() {
	List<Integer> numbers = Arrays.asList(1,2,3,4,5); //tank
	Stream finalStream = numbers.stream().map(number -> {
		//return (number % 2 ==1)? number * number : number;  //one-line code ( this can also be used )
		if(number%2==1) {
			return number * number;
		}
		else {
			return number;
		}
	}).filter((number) ->{
		System.out.println(number);
		return number % 2 !=0;
	});
	System.out.println(finalStream.count());  //terminal operation

}
}
