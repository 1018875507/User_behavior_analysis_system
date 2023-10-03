package entity;

public class action_sum {
    private String adate;
    private int view_products;
    private int shopping_cart;
    private int generate_order;
    private int payment;

    public String getAdate() {
        return adate;
    }

    public void setAdate(String adate) {
        this.adate = adate;
    }

    public int getView_products() {
        return view_products;
    }

    public void setView_products(int view_products) {
        this.view_products = view_products;
    }

    public int getShopping_cart() {
        return shopping_cart;
    }

    public void setShopping_cart(int shopping_cart) {
        this.shopping_cart = shopping_cart;
    }

    public int getGenerate_order() {
        return generate_order;
    }

    public void setGenerate_order(int generate_order) {
        this.generate_order = generate_order;
    }

    public int getPayment() {
        return payment;
    }

    public void setPayment(int payment) {
        this.payment = payment;
    }

    @Override
    public String toString() {
        return "action_sum{" +
                "adate='" + adate + '\'' +
                ", view_products=" + view_products +
                ", shopping_cart=" + shopping_cart +
                ", generate_order=" + generate_order +
                ", payment=" + payment +
                '}';
    }
}
