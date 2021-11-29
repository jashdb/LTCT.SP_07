package entity;

public class Customer extends User {
    public Customer(String name, String phone, String birthDay) {
        super(name, phone, birthDay);
        this.role = 0;
    }

    public String getRoleName() {
        return "Customer";
    }
}
