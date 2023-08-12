public class Client extends User {
    private String clientID;

    public Client(String username, String email, String name, String surname, String password, String clientID) {
        super(username, email, name, surname, password);
        this.clientID = clientID;
    }

    public void displayClientInfo() {
        super.displayInfo();
        System.out.println("Client ID: " + clientID);
    }
}