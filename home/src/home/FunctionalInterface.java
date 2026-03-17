package home;

@FunctionalInterface   //annotation
interface Animal{
	void eat();
}

class Cat implements Animal{
	@Override
	public void eat() {
		System.out.println("animal eat inside class");
	}
}

public class FunctionalInterface {
	public static void main(String[] args) {
		oopWay();
	}
	private static void oopWay() {
		Animal animal = new Cat();
		animal.eat();
	}
	private static void functional() {
		Animal animal = () -> {
			System.out.println("animal eat in lambda");
		};
	}
}