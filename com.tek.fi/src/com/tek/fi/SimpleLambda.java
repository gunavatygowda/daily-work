package com.tek.fi;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class SimpleLambda {

	public static void main(String[] args) {
		//List<Integer> l = Arrays.asList(1,2,3);
		
		//List finalResult = l.stream().filter(x->x%2==0).collect(Collectors.toList());
		//System.out.println(finalResult);
		
		
//		int r = l.stream().map(x->x*2).reduce(0, Integer::sum);
//		System.out.println(r);
		
		Stream<Integer> s =Stream.of(1,2,3);
		s.forEach(System.out::println); //this wl consume the stream
		s.forEach(System.out::println); //so this throws error
	}

}
