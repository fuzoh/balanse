package ch.hearc.balanse;


import java.io.Serializable;

public class Ticket implements Serializable {

    private String name;

    public Ticket() {
    }

    public Ticket(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
