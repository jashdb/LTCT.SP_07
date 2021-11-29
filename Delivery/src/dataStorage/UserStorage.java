package dataStorage;

import java.util.ArrayList;
import java.util.List;

import entity.Customer;
import entity.Shipper;
import entity.User;

public class UserStorage {
    private List<User> userList;

    public UserStorage() {
        this.userList = new ArrayList<User>();
    }

    public boolean addUser(User user) {
        if (this.userList.add(user)) return true;
        else return false;
    }

    public Customer findCustomer(int customerID) {
        int n = this.userList.size();
        User tmpUser;
        for (int i = 0; i < n; i++) {
            if ((tmpUser = this.userList.get(i)).getRole() == 0)
                if (tmpUser.getId() == customerID) return (Customer)tmpUser;
        }
        return null;
    }

    public Shipper findShipper(int shipperID) {
        int n = this.userList.size();
        User tmpUser;
        for (int i = 0; i < n; i++) {
            if ((tmpUser = this.userList.get(i)).getRole() == 1)
                if (tmpUser.getId() == shipperID) return (Shipper)tmpUser;
        }
        return null;
    }

    public User findUser(int userID) {
        int n = this.userList.size();
        User tmpUser;
        for (int i = 0; i < n; i++) {
            tmpUser = this.userList.get(i);
            if (tmpUser.getId() == userID) return (User)tmpUser;
        }
        return null;
    }
}
