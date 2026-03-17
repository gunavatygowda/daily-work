package com.tek.fi;

@FunctionalInterface
interface Add {
	int sum(int a, int b);
}
public class LambdaWithCollections{
public static void main(String[] args) {
	Add sum = (a,b) -> a+b;
	System.out.println(sum.sum(3,4));
}
}