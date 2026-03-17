package home;

abstract class A{
	abstract void m1();
}
class B extends A{
	void m2() {
		System.out.println("hello");
	}
}