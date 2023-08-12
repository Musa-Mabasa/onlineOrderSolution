import javax.persistence.Entity;

@Entity
public class Order {

    User UserthatOrdered;
    //VendorId;
    Product ProductThatGotOrdered;


    public Order(User userthatOrdered, Product productThatGotOrdered) {
        UserthatOrdered = userthatOrdered;
        ProductThatGotOrdered = productThatGotOrdered;
    }

    public User getUserthatOrdered() {
        return UserthatOrdered;
    }

    public void setUserthatOrdered(User userthatOrdered) {
        UserthatOrdered = userthatOrdered;
    }

    public Product getProductThatGotOrdered() {
        return ProductThatGotOrdered;
    }

    public void setProductThatGotOrdered(Product productThatGotOrdered) {
        ProductThatGotOrdered = productThatGotOrdered;
    }
}
