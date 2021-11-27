package dataStorage;

import java.util.ArrayList;
import java.util.List;

import entity.Delivery;

public class DeliveryStorage {
    private List<Delivery> deliveries;

    public DeliveryStorage() {
        this.deliveries = new ArrayList<Delivery>();
    }

    public boolean addDelivery(Delivery delivery) {
        if (this.deliveries.add(delivery)) return true;
        else return false;
    }

    public Delivery findDelivery(int deliveryID) {
        int n = this.deliveries.size();
        for (int i = 0; i < n; i++) {
            if (this.deliveries.get(i).getId() == deliveryID)
                return this.deliveries.get(i);
        }
        return null;
    }

    public List<Delivery> findDeliveryByCustomer(int customerID) {
        List<Delivery> result = new ArrayList<Delivery>();
        for (int i = 0; i < this.deliveries.size(); i++) {
            if (this.deliveries.get(i).getCustomer().getId() == customerID) result.add(this.deliveries.get(i));
        }
        return result;
    }

    public List<Delivery> getDeliveries() {
        return this.deliveries;
    }
}

