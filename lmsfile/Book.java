import java.io.Serializable;

enum STATUS {
    AVAILABLE,
    BOOKED
}

class Book {
    String id;
    String title;
    float price;
    String author;
    STATUS status;

    public Book(String id, String title, float price, String author) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.author = author;
        this.status = STATUS.AVAILABLE;
    }

    // Constructor to read from file line
    public Book(String line) {
        String[] parts = line.split("\\|");
        this.id = parts[0];
        this.title = parts[1];
        this.price = Float.parseFloat(parts[2]);
        this.author = parts[3];
        this.status = STATUS.valueOf(parts[4]);
    }

    public STATUS getStatus() { return status; }
    public void setStatus(STATUS status) { this.status = status; }
    public String getId() { return id; }

    @Override
    public String toString() {
        return id + "|" + title + "|" + price + "|" + author + "|" + status;
    }
}