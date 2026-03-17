package com.tek.fi;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;


public class StreamExample {
	public static void main(String[] args) {
		stream1();
	}
	private static void stream1() {
	List<Integer> numbers = Arrays.asList(1,2,3,4,5); //tank
	Stream<Integer> stream = numbers.stream();  //pipe
	Stream<Integer> squaredStream = stream.map(number -> number*number);
	Stream filteredStream = squaredStream.filter((number) ->{
		System.out.println(number);
		return number % 2 !=0;
	});
	System.out.println(filteredStream.count());  //terminal operation
	}
}
