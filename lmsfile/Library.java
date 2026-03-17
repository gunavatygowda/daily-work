import java.io.*;
import java.util.ArrayList;
import java.util.List;

class Library {

    private static final String FILE_NAME = "books.txt";

    // Load books from file
    private List<Book> loadBooks() throws IOException {
        List<Book> books = new ArrayList<>();
        File file = new File(FILE_NAME);
        if (!file.exists()) return books; // empty list if file doesn't exist
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = br.readLine()) != null) {
                books.add(new Book(line));
            }
        }
        return books;
    }

    // Save books to file
    private void saveBooks(List<Book> books) throws IOException {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(FILE_NAME))) {
            for (Book b : books) {
                bw.write(b.toString());
                bw.newLine();
            }
        }
    }

    void add(String id, String title, float price, String author) throws IOException {
        List<Book> books = loadBooks();
        Book book = new Book(id, title, price, author);
        books.add(book);
        saveBooks(books);
    }

    void reserve(String title) throws IOException {
        List<Book> books = loadBooks();
        boolean found = false;
        for (Book b : books) {
            if (b.title.equalsIgnoreCase(title) && b.getStatus() == STATUS.AVAILABLE) {
                b.setStatus(STATUS.BOOKED);
                System.out.println("Borrowed: " + title);
                found = true;
                break;
            }
        }
        if (!found) {
            System.out.println("Book not available: " + title);
        }
        saveBooks(books);
    }

    List<Book> find(String title) throws IOException {
        List<Book> books = loadBooks();
        List<Book> results = new ArrayList<>();
        for (Book b : books) {
            if (b.title.toLowerCase().contains(title.toLowerCase())) {
                results.add(b);
            }
        }
        return results;
    }

    Book remove(String id) throws Exception {
        List<Book> books = loadBooks();
        for (Book b : books) {
            if (b.getId().equalsIgnoreCase(id)) {
                books.remove(b);
                saveBooks(books);
                return b;
            }
        }
        throw new Exception("No book available for the id: " + id);
    }

    void displayBooks() throws IOException {
        List<Book> books = loadBooks();
        System.out.println("BOOKS AVAILABLE");
        System.out.println("============================================");
        for (Book b : books)
            if (b.getStatus() == STATUS.AVAILABLE)
                System.out.println(b + "\n");
        System.out.println("============================================");
    }

    void displayAllBooks() throws IOException {
        List<Book> books = loadBooks();
        System.out.println("ALL BOOKS");
        System.out.println("============================================");
        for (Book b : books)
            System.out.println(b + "\n");
        System.out.println("============================================");
    }
}