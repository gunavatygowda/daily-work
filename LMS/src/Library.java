
public class Library {
	List <Book> books = new ArrayList<>();
	
	void addBook(String title) {
		books.add(new Book(title));
	}

}
