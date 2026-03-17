package com.tek.fi;

import java.util.function.Predicate;

public class PredicateExample {
	public static void main(String[] args) {
		// Predicate<Integer> isEven = n ->n%2 == 0;   //this is one line, so no return needed 
		// Predicate<Integer> isEven = (Integer n) ->n%2 == 0;  //return implicit
		// Predicate<Integer> isEven = (int n) ->n%2 == 0;
		
		Predicate<Integer>isEven = n -> {
			return n%2==0;
		};
		System.out.println(isEven.test(10));
	}
}
