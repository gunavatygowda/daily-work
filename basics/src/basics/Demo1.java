package basics;

public class Demo1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("sys");
		System.out.println("Hello World");
		int age = 10;
		boolean result = oddOrEven(age);
		System.out.println(result);

	}
	static boolean oddOrEven(int number) {
		return number % 2 == 0;
	}

}
