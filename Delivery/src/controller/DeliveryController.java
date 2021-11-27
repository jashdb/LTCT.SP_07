package controller;

import java.util.List;

import dataStorage.DeliveryStorage;
import dataStorage.ProductStorage;
import dataStorage.UserStorage;
import entity.Customer;
import entity.Delivery;
import entity.Product;
import entity.Shipper;
import entity.User;

public class DeliveryController {
    private DeliveryStorage deliveryStorage;
    private UserStorage userStorage;
    private ProductStorage productStorage;

    public DeliveryController() {
        this.deliveryStorage = new DeliveryStorage();
        this.userStorage = new UserStorage();
        this.productStorage = new ProductStorage();
    }

    public void updateDeliveryStatus(Delivery delivery, int status) {
        delivery.setStatus(status);
    }

    public void addDeliveryToStorage(Delivery delivery) {
        this.deliveryStorage.addDelivery(delivery);
    }

    public void addUserToStorage(User user) {
        this.userStorage.addUser(user);
    }

    public void addProductToStorage(Product product) {
        this.productStorage.addProduct(product);
    }

    public List<Delivery> getDeliveryListForCustomer(int customerID) {
        return this.deliveryStorage.findDeliveryByCustomer(customerID);
    }

    public boolean cancelDelivery(Delivery delivery) {
        if (delivery.getStatus() > 1) return false;
        else {
            for (int i = 0; i < delivery.getProducts().size(); i++) {
                updateWareHouse(delivery.getProducts().get(i));
            }
            delivery.setStatus(5);
            return true;
        }
    }

    public void updateWareHouse(Product product) {
        //TODO: Gọi đến API của bên quản lý kho hàng, update thông tin product.getId(), số lượng khôi phục: product.getCount()
    }

    public Customer getCustomerInfo(int customerID) {
        return this.userStorage.findCustomer(customerID);
    }

    public Shipper getShipperInfo(int shipperID) {
        return this.userStorage.findShipper(shipperID);
    }

    public Delivery getDeliveryInfo(int deliveryID) {
        return this.deliveryStorage.findDelivery(deliveryID);
    }

    public List<Delivery> getAllDeliveries() {
        return this.deliveryStorage.getDeliveries();
    }

    public Product getProductInfo(int productID) {
        return this.productStorage.findProduct(productID);
    }
}
