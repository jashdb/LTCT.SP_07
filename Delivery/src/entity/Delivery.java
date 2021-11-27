package entity;

import java.util.ArrayList;
import java.util.List;

public class Delivery {
    private static String[] statusName = {
        "Waiting to confirm",
        "Waiting for the goods",
        "Delivering",
        "Delivered",
        "Canceled"
    };

    private static int count = 0;
    private int id;
    private long shippingFee;
    private String deliveryAddress;
    private List<Product> products;
    private Customer customer;
    private Shipper shipper;
    private int status;         //0: Chờ xác nhận - 1: Chờ lấy hàng - 2: Đang giao - 3. Đã giao - 4. Đã huỷ

    public Delivery() {
        this.id = count++;
        this.shippingFee = 0;
        this.deliveryAddress = "";
        this.products = new ArrayList<Product>();
        this.customer = null;
        this.shipper = null;
        this.status = 0;
    }

    public Delivery(long shippingFee, String deliveryAddress, List<Product> products, Customer customer, Shipper shipper) {
        this.id = count++;
        this.shippingFee = shippingFee;
        this.deliveryAddress = deliveryAddress;
        this.products = products;
        this.customer = customer;
        this.shipper = shipper;
        this.status = 0;
    }

    public int getId() {
        return id;
    }

    public long getTotalCost() {
        return this.getPrice() + this.shippingFee;
    }

    public long getPrice() {
        long allPrice = 0;
        for (int i = 0; i < this.products.size(); i++) {
            allPrice += this.products.get(i).getTotalPrice();
        }

        return allPrice;
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

    public Shipper getShipper() {
        return shipper;
    }

    public void setShipper(Shipper shipper) {
        this.shipper = shipper;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getStatusName() {
        return statusName[this.status];
    }

    public void print() {
        System.out.println("Id: " + this.id);
        System.out.println("Price: " + this.getPrice());
        System.out.println("Shipping Fees: " + this.shippingFee);
        System.out.println("Delivery Address: " + this.deliveryAddress);
        System.out.println("Customer: " + this.getCustomer().getId() + " - " + this.getCustomer().getName());
        System.out.println("Shipper: " + this.getShipper().getId() + " - " + this.getShipper().getName());
        System.out.println("Status: " + this.getStatusName());
        for (int i = 0; i < this.products.size(); i++) {
            System.out.println("Product " + (i+1) + ": " + this.products.get(i).toString());
        }
    }
}
