package dataStorage;

import java.util.ArrayList;
import java.util.List;

import entity.Product;

public class ProductStorage {
    private List<Product> products;

    public ProductStorage() {
        this.products = new ArrayList<Product>();
    }

    public boolean addProduct(Product product) {
        if (this.products.add(product)) return true;
        else return false;
    }

    public Product findProduct(int productID) {
        int n = this.products.size();
        for (int i = 0; i < n; i++) {
            if (this.products.get(i).getId() == productID)
                return this.products.get(i);
        }
        return null;
    }
}
