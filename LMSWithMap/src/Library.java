import java.util.*;

public class Library {

    private HashMap<Integer, String> books;

    public Library() {
        books = new HashMap<>();
    }

    public void addBook(Book book) {
        books.get(book);
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

    public List<Book> getBooks() {
        return books;
    }
}