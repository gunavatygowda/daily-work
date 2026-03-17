package com.tek.fi;
//odd number must be squared and even number should be left as it is -> that's the question
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamEx {
	public static void main(String[] args) {
		streamWithChain();
	}  
	private static void streamWithChain() {
	List<Integer> numbers = Arrays.asList(1,2,3,4,5); //tank
	Stream<Integer> finalStream = numbers.stream().map{
		number -> number * number ;
	});
	List finalList = finalStream.collect(Collectors.toList());
	finalList.forEach(x->System.out.println(x));  // syntax
	finalList.forEach(System.out::println); //shortcut for method reference
	
	
	//System.out.println(finalStream);  //terminal operation

}
}
