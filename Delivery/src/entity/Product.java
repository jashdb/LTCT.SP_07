package entity;

public class Product {
    private static int countID = 0;
    private int id;
    private long priceEach;
    private String title;
    private String company;
    private int count;

    public Product() {
        this.id = countID++;
        this.priceEach = -1;
        this.title = "";
        this.company = "";
        this.count = 0;
    }

    public Product(long priceEach, String title, String company, int count) {
        this.id = countID++;
        this.priceEach = priceEach;
        this.title = title;
        this.company = company;
        this.count = count;
    }

    public int getId() {
        return id;
    }

    public long getTotalPrice() {
        return this.priceEach * this.count;
    }

    public long getPriceEach() {
        return priceEach;
    }

    public void setPriceEach(long priceEach) {
        this.priceEach = priceEach;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String toString() {
        String result = "";
        result += this.title;
        result += " - ";
        result += this.company;
        result += " - ";
        result += this.getTotalPrice();

        return result;
    }
}
