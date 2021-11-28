package entity;

public class Customer extends User {
    public Customer(String name, String phone, String birthDay) {
        super(name, phone, birthDay);
        this.role = 0;
    }

    public String getRoleName() {
        return "Customer";
    }

    public void print() {
        System.out.println("Id: " + this.id);
        System.out.println("Name: " + this.getName());
        System.out.println("Phone: " + this.getPhone());
        System.out.println("Birthday: " + this.getBirthDay());
    }
}
