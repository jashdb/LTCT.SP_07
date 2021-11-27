package otherModulesClasse;

public class OtherClassUser {
    private static int count = 0;
    protected int id;

    protected String name;
    protected String phone;
    protected String birthDay;

    public OtherClassUser() {
        this.id = count++;
        this.name = "";
        this.phone = "";
        this.birthDay = "";
    }

    public OtherClassUser(String name, String phone, String birthDay) {
        this.id = count++;
        this.name = name;
        this.phone = phone;
        this.birthDay = birthDay;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(String birthDay) {
        this.birthDay = birthDay;
    }

    public int getId() {
        return id;
    }
}
