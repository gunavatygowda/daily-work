package com.tek.fi;
import java.util.Comparator;
import java.util.List;
import java.util.function.Consumer;
import java.util.Arrays;

class MyComparator implements Comparator<String>{
	@Override
	public int compare(String o1, String o2) {
		return o1.length()-o2.length();
	}
}

public class Lambda {
	public static void main(String[] args) {
		List<String> names = Arrays.asList("Java","Python","Go");
		comparator();
//		consumer();
		
	}
	private static void comparator() {
		List<String> names = Arrays.asList("Java","Python","Go");
		names.sort((str1,str2)->{return str2.length()-str1.length();}
		);
		System.out.println(names);
	}
	private static void consumer() {

	    Consumer<String> consumer = (String name) -> System.out.println(name);

	    List<String> names = Arrays.asList("Java","Python","Go");

	    names.forEach(consumer);
	}
}
