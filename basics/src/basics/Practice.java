package basics;

class Parent{
	static void show() {
		System.out.println("Parent");
	}
}
class Child extends Parent{
	static void show() {
		System.out.println("Child");
	}
}
public class Practice {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Parent p = new Child();
		p.show();
	}

}
