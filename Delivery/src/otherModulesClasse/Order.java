package otherModulesClasse;

import java.util.ArrayList;
import java.util.List;

import entity.Customer;
import entity.Product;

public class Order {
    private static int count = 0;
    private int id;
    private long price;
    private long shippingFee;
    private String deliveryAddress;
    private List<Product> products;
    private Customer customer;

    public Order() {
        this.id = count++;
        this.price = -1;
        this.shippingFee = 0;
        this.deliveryAddress = "";
        this.products = new ArrayList<Product>();
    }

    public Order(long price, long shippingFee, String deliveryAddress, List<Product> products) {
        this.id = count++;
        this.price = price;
        this.shippingFee = shippingFee;
        this.deliveryAddress = deliveryAddress;
        this.products = products;
    }

    public int getId() {
        return id;
    }

    public long getTotalCost() {
        return this.price + this.shippingFee;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public long getShippingFee() {
        return shippingFee;
    }

    public void setShippingFee(long shippingFee) {
        this.shippingFee = shippingFee;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
