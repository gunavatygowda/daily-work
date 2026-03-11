package basics;

public class Test {
	
	int x = 10;
	void display() {
	System.out.println(x);
	}
	
	private static void  whileLoop() {
		int i =1;
		while(i>=5)
			System.out.println(i);
		    i++;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Test obj = new Test();
		obj.display();
	}

}