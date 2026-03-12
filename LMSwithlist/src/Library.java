import java.util.*;

public class Library {

    private List<Book> books;

    public Library() {
        books = new LinkedList<>();
    }
    
    public void addBook(Book book) {
        books.add(book);
        System.out.println("Added: " + book.getTitle());
    }
    
    public void removeBook(int id) {
        Iterator<Book> iterator = books.iterator();
        while (iterator.hasNext()) {
            Book b = iterator.next();
            if (b.getId() == id) {
                iterator.remove(); 
                System.out.println("Removed: " + b.getTitle());
                return;
            }
        }
        System.out.println("Book with ID " + id + " not found.");
    }
}
