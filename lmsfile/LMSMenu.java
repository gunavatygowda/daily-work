import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.io.IOException;

public class LMSMenu {
    Library library;
    Scanner sc = new Scanner(System.in);

    LMSMenu(Library library) {
        this.library = library;
    }

    private static final Logger logger = Logger.getLogger(LMSMenu.class.getName());

    void displayMenu() {
        System.out.println("\nLibrary Management System");
        String options = "Options:\n\t1. Add Book\n\t2. Remove Book\n\t3. Reserve Book\n\t4. Display Books\n\t0. Exit";
        System.out.println(options);
    }

    void start() {
        int choice;
        while (true) {
            displayMenu();
            choice = -1;
            System.out.print("\nEnter choice: ");
            try {
                choice = sc.nextInt();
                sc.nextLine(); // consume newline
                switch (choice) {
                    case 1:
                        handleAddition();
                        break;
                    case 2:
                        handleRemoval();
                        break;
                    case 3:
                        handleReservation();
                        break;
                    case 4:
                        library.displayBooks();
                        break;
                    case 0:
                        logger.info("Exiting...");
                        sc.close();
                        return; // exit the loop
                    default:
                        logger.warning("Invalid choice");
                }
            } catch (Exception ex) {
                logger.log(Level.WARNING, "Invalid input, enter a number");
                sc.nextLine(); // consume wrong input
            }
        }
    }

    void handleAddition() {
        try {
            System.out.print("Enter book title: ");
            String title = sc.nextLine();
            if (title.trim().equals("")) {
                System.out.println("Invalid Book Name");
                return;
            }

            System.out.print("Enter book author: ");
            String author = sc.nextLine();
            if (author.trim().equals("")) {
                System.out.println("Invalid Author Name");
                return;
            }

            System.out.print("Enter book ID: ");
            String id = sc.nextLine();

            System.out.print("Enter price: ");
            float price = sc.nextFloat();
            sc.nextLine(); // consume newline

            library.add(id, title, price, author);
            System.out.println("Book added successfully!");
        } catch (IOException ex) {
            System.out.println("Error writing to file: " + ex.getMessage());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    void handleReservation() {
        System.out.print("Enter book name: ");
        String name = sc.nextLine();
        try {
            library.reserve(name);
        } catch (IOException ex) {
            System.out.println("Error accessing file: " + ex.getMessage());
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }

    void handleRemoval() {
        System.out.print("Enter book ID: ");
        String id = sc.nextLine();
        try {
            library.remove(id);
            System.out.println("Book removed successfully!");
        } catch (IOException ex) {
            System.out.println("Error accessing file: " + ex.getMessage());
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }
}