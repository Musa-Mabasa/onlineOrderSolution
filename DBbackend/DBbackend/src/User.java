public class User {
    private String username;
    private String email;
    private String name;
    private String surname;
    private String password;

    public User(String username, String email, String name, String surname, String password) {
        this.username = username;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.password = password;
    }

    public void displayInfo() {
        System.out.println("Username: " + username);
        System.out.println("Email: " + email);
        System.out.println("Name: " + name);
        System.out.println("Surname: " + surname);
    }

    public boolean checkPassword(String inputPassword) {
        return password.equals(inputPassword);
    }
}