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

        while (choice != 11) {
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
                    showDeliveryInfo();
                    break;
                case 7 :
                    cancelDelivery();
                    break;
                case 8 :
                    updateDeliveryStatus();
                    break;
                case 9 :
                    showUserInfo();
                    break;
                case 10 :
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
        System.out.println("6. Show Delivery Info.");
        System.out.println("7. Cancel Delivery.");
        System.out.println("8. Update Delivery Status.");
        System.out.println("9. Show User Information.");
        System.out.println("10. Show Deliveries By User.");
        System.out.println("11. Exit.");
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

    private static void showDeliveryInfo(){
        int deliveryID;
        Delivery delivery;
        System.out.println("Enter the delivery's ID");
        deliveryID = sc.nextInt();
        sc.nextLine();
        delivery = deliveryController.getDeliveryInfo(deliveryID);
        delivery.print();
    }

    private static void cancelDelivery() {
        int deliveryID;
        Delivery delivery;
        System.out.println("Enter the delivery' ID to cancel");
        deliveryID = sc.nextInt();
        sc.nextLine();
        delivery = deliveryController.getDeliveryInfo(deliveryID);

        if (deliveryController.cancelDelivery(delivery)) {
            System.out.println("Delivery canceled.");
        } else {
            System.out.println("Can't cancel this delivery!");
        }
    }
    
    private static void updateDeliveryStatus() {
        int deliveryID;
        Delivery delivery;
        System.out.println("Enter the delivery' ID to update");
        deliveryID = sc.nextInt();
        sc.nextLine();
        delivery = deliveryController.getDeliveryInfo(deliveryID);
        int firstStatus = delivery.getStatus();
        delivery.setStatus(firstStatus+1);
        if (firstStatus != delivery.getStatus()) {
            System.out.println("Delivery updated.");
        } else {
            System.out.println("Can't update this delivery!");
        }
    }

    private static void showUserInfo() {
        System.out.println("Enter customer's ID: ");
        int customerID = sc.nextInt();
        deliveryController.getCustomerInfo(customerID).print();
    }

    private static void showDeliveriesByUser() {
        int userID;
        System.out.println("Enter the user's ID");
        userID = sc.nextInt();
        sc.nextLine();
        List<Delivery> dList = deliveryController.getDeliveryListForCustomer(userID);
        System.out.println("Delivery list for user " + userID +":");
        for (int i = 0; i < dList.size(); i++) {
            dList.get(i).print();
            System.out.println("----------------");
        }
    }

    private static void closeScanner() {
        sc.close();
    }
}
