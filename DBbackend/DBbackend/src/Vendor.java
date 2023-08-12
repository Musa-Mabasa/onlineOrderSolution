public class Vendor extends User {
    private String vendorID;

    public Vendor(String username, String email, String name, String surname, String password, String vendorID) {
        super(username, email, name, surname, password);
        this.vendorID = vendorID;
    }

    public void displayVendorInfo() {
        super.displayInfo();
        System.out.println("Vendor ID: " + vendorID);
    }
}