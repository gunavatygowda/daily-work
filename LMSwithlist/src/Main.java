
public class Main {
	 public static void main(String[] args) {

	        Library library = new Library();

	        Book b1 = new Book(1, "Java Basics", 299.99f, "Author A");
	        Book b2 = new Book(2, "Advanced Java", 399.99f, "Author B");

	        library.addBook(b1);
	        library.addBook(b2);
	    }
}
