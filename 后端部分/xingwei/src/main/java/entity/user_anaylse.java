package entity;

public class user_anaylse {
    private String province;
    private int number;

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "user_anaylse{" +
                "province='" + province + '\'' +
                ", number=" + number +
                '}';
    }
}
