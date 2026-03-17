public class Book {

    private int id;
    private String title;
    private float price;
    private String author;

    public Book(int id, String title, float price, String author) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.author = author;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public float getPrice() {
        return price;
    }

    public String getAuthor() {
        return author;
    }
}