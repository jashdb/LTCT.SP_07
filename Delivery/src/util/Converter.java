package util;

import entity.Customer;
import entity.Delivery;
import entity.Shipper;
import otherModulesClasse.Order;
import otherModulesClasse.OtherClassUser;

public class Converter {
    public static Delivery orderToDelivery(Order order) {
        Delivery delivery = new Delivery(
                order.getShippingFee(),
                order.getDeliveryAddress(),
                order.getProducts(),
                order.getCustomer(),
                null
            );

        return delivery;
    }

    public static Delivery orderToDeliveryWithShipper(Order order, Shipper shipper) {
        Delivery delivery = new Delivery(
                order.getShippingFee(),
                order.getDeliveryAddress(),
                order.getProducts(),
                order.getCustomer(),
                shipper
            );

        return delivery;
    }

    public static Customer toCustomer(OtherClassUser user) {
        Customer customer = new Customer(
                user.getName(),
                user.getPhone(),
                user.getBirthDay()
            );

        return customer;
    }
}
