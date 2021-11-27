package entity;

public class Shipper extends User {
    public Shipper(String name, String phone, String birthDay) {
        super(name, phone, birthDay);
        this.role = 1;
    }

    public String getRoleName() {
        return "Shipper";
    }
}