public class Order {

    String OrderId;
    String VendorId;
    String ProductId;

    public Order(String orderId, String vendorId, String productId) {
        OrderId = orderId;
        VendorId = vendorId;
        ProductId = productId;
    }

  //  @GeneratedValue

    public String getOrderId() {
        return OrderId;
    }

    public void setOrderId(String orderId) {
        OrderId = orderId;
    }

    public String getVendorId() {
        return VendorId;
    }

    public void setVendorId(String vendorId) {
        VendorId = vendorId;
    }

    public String getProductId() {
        return ProductId;
    }

    public void setProductId(String productId) {
        ProductId = productId;
    }
}
