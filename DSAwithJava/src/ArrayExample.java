
public class ArrayExample {

	public static void main(String[] args) {
		basicArray();
		arrayWithCustomObjects();

	}
	public static void basicArray() {
		
	}
	public static void arrayWithCustomObjects() {
		Book[]  books  = new Book[10];
		books[0]= new Book(1,"Learn Java","anusha",true);
		books[1]= new Book(2,"Learn puython","ananya",true);
		System.out.println(books[0]);
	}
}
