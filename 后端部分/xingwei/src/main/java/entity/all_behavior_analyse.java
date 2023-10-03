package entity;

public class all_behavior_analyse {
    private String action;
    private int number;

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "all_behavior_analyse{" +
                "action='" + action + '\'' +
                ", number=" + number +
                '}';
    }
}
