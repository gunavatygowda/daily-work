import java.util.*;

public class LibraryManager {
    private Library library;
    private Scanner scanner;

    public LibraryManager(Library library) {
        this.library = library;
        this.scanner = new Scanner(System.in);
    }

    public void showMainMenu() {
        int choice = 0;

        do {
            System.out.println("\n=== Library Menu ===");
            System.out.println("1. Add Book");
            System.out.println("2. Remove Book");
            System.out.println("3. Display Books");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");

            try {
                choice = Integer.parseInt(scanner.nextLine());

                switch (choice) {
                    case 1:
                        addBook();
                        break;
                    case 2:
                        removeBook();
                        break;
                    case 3:
                        displayBooks();
                        break;
                    case 4:
                        System.out.println("Exiting...");
                        break;
                    default:
                        System.out.println("Invalid choice, try again!");
                }

            } catch (Exception e) {
               // e.printStackTrace(); 
            	scanner.nextLine();
            }

        } while (choice != 4);
    }

    private void addBook() {
        try {
            System.out.print("Enter Book ID: ");
            int id = Integer.parseInt(scanner.nextLine());

            System.out.print("Enter Book Title: ");
            String title = scanner.nextLine();

            System.out.print("Enter Book Price: ");
            float price = Float.parseFloat(scanner.nextLine());

            System.out.print("Enter Book Author: ");
            String author = scanner.nextLine();

            Book book = new Book(id, title, price, author);
            library.addBook(book);

        } catch (Exception e) {
            System.out.println("Error adding book! Make sure ID is an integer and price is a number.");
            e.printStackTrace();
        }
    }

    private void removeBook() {
        try {
            System.out.print("Enter Book ID to remove: ");
            int id = Integer.parseInt(scanner.nextLine());
            library.removeBook(id);
        } catch (Exception e) {
            System.out.println("Error removing book! Make sure ID is an integer.");
            e.printStackTrace();
        }
    }

    private void displayBooks() {
        try {
            List<Book> books = library.getBooks();
            if (books.isEmpty()) {
                System.out.println("No books in the library.");
            } else {
                System.out.println("\nBooks in Library:");
                for (Book b : books) {
                    System.out.println("ID: " + b.getId() + ", Title: " + b.getTitle() +
                            ", Price: " + b.getPrice() + ", Author: " + b.getAuthor());
                }
            }
        } catch (Exception e) {
            System.out.println("Error displaying books!");
            e.printStackTrace();
        }
    }
}