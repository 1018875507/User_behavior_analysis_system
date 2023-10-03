package entity;

public class career_number {
    private String career;
    private int number;

    public String getCareer() {
        return career;
    }

    public void setCareer(String career) {
        this.career = career;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "career_number{" +
                "career='" + career + '\'' +
                ", number=" + number +
                '}';
    }
}
