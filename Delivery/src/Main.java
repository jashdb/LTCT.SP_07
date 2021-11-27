import java.util.List;
import java.util.Scanner;

import controller.DeliveryController;
import entity.Customer;
import entity.Delivery;
import entity.Product;
import entity.Shipper;

public class Main {
    private static DeliveryController deliveryController = new DeliveryController();
    private static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) throws Exception {
        int choice = 0;

        while (choice != 9) {
            showMainMenu();
            choice = sc.nextInt();
            sc.nextLine();
            switch (choice) {
                case 0:
                    break;
                case 1 :
                    newCustomer();
                    break;
                case 2 :
                    newShipper();
                    break;
                case 3 :
                    newProduct();
                    break;
                case 4 :
                    newDelivery();
                    break;
                case 5 :
                    showDeliveries();
                    break;
                case 6 :
                    cancelDelivery();
                    break;
                case 7 :
                    updateDeliveryStatus();
                    break;
                case 8 :
                    showUserInfo();
                    break;
                case 9 :
                    showDeliveriesByUser();
                    break;
                default:
                    System.out.println("Opps, looks like it's invalid value, try again!");
                    break;
            }
        }
        closeScanner();
    }

    private static void showMainMenu() {
        System.out.println("=========Test Menu=========");
        System.out.println("1. New Customer.");
        System.out.println("2. New Shipper.");
        System.out.println("3. New Product.");
        System.out.println("4. New Delivery.");
        System.out.println("5. Show Deliveries.");
        System.out.println("6. Cancel Delivery.");
        System.out.println("7. Update Delivery Status.");
        System.out.println("8. Show User Information.");
        System.out.println("9. Show Deliveries By User.");
        System.out.println("10. Exit.");
        System.out.println("===========================");
    }

    private static void newCustomer() {
        String name, phone, bd;
        System.out.println("Enter new Customer's info:");
        
        System.out.println("Name:");
        name = sc.nextLine();
        
        System.out.println("Phone Number:");
        phone = sc.nextLine();

        System.out.println("Birthday:");
        bd = sc.nextLine();

        Customer newCustomer = new Customer(name, phone, bd);
        deliveryController.addUserToStorage(newCustomer);
        System.out.println("New customer created, ID: " + newCustomer.getId());
    }

    private static void newShipper() {
        String name, phone, bd;
        System.out.println("Enter new Shipper's info:");
        
        System.out.println("Name:");
        name = sc.nextLine();
        
        System.out.println("Phone Number:");
        phone = sc.nextLine();

        System.out.println("Birthday:");
        bd = sc.nextLine();

        Shipper newShipper = new Shipper(name, phone, bd);
        deliveryController.addUserToStorage(newShipper);
        System.out.println("New shipper created, ID: " + newShipper.getId());
    }

    private static void newProduct() {
        long priceEach;
        String title, company;
        int count;

        System.out.println("Product name:");
        title = sc.nextLine();

        System.out.println("Price each:");
        priceEach = sc.nextInt();
        sc.nextLine();

        System.out.println("Company:");
        company = sc.nextLine();

        System.out.println("Count:");
        count = sc.nextInt();
        sc.nextLine();

        Product newProduct = new Product(priceEach, title, company, count);
        deliveryController.addProductToStorage(newProduct);
        System.out.println("New product created, ID: " + newProduct.getId());
    }

    private static void newDelivery() {
        Delivery newDelivery = new Delivery();
        int customerID, shipperID;
        long shippingFee;
        String deliveryAdress;

        System.out.println("Customer's ID:");
        customerID = sc.nextInt();
        sc.nextLine();
        newDelivery.setCustomer(deliveryController.getCustomerInfo(customerID));

        System.out.println("Shipper's ID:");
        shipperID = sc.nextInt();
        sc.nextLine();
        newDelivery.setShipper(deliveryController.getShipperInfo(shipperID));

        System.out.println("Shipping fees:");
        shippingFee = sc.nextInt();
        sc.nextLine();
        newDelivery.setShippingFee(shippingFee);

        System.out.println("Enter the ID of products in this delivery (non-exist ID to finish):");
        int i = 0, tmpID;
        while (true) {
            i++;
            tmpID = -1;
            System.out.println("Product " + i + ": ");
            tmpID = sc.nextInt();
            sc.nextLine();
            if (deliveryController.getProductInfo(tmpID) != null) {
                newDelivery.getProducts().add(deliveryController.getProductInfo(tmpID));
            } else break;
        }

        System.out.println("Delivery address:");
        deliveryAdress = sc.nextLine();
        newDelivery.setDeliveryAddress(deliveryAdress);
        deliveryController.addDeliveryToStorage(newDelivery);
    }

    private static void showDeliveries() {
        List<Delivery> deliveries = deliveryController.getAllDeliveries();
        for (int i = 0; i < deliveries.size(); i++) {
            deliveries.get(i).print();
        }
    }

    private static void cancelDelivery() {}

    private static void updateDeliveryStatus() {}

    private static void showUserInfo() {}

    private static void showDeliveriesByUser() {}

    private static void closeScanner() {
        sc.close();
    }
}
