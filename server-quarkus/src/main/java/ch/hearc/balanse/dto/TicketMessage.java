package ch.hearc.balanse.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

public class TicketMessage implements Serializable {

    @JsonProperty("id")
    public UUID id;

    @JsonProperty("redis_key")
    public String redisKey;

    @JsonProperty("type")
    public String type;

    @JsonProperty("buyer")
    public String buyer;

    @JsonProperty("buyer_npa")
    public int buyerNpa;

    @JsonProperty("petzi_number")
    public String petziNumber;

    @JsonProperty("name")
    public String name;

    @JsonProperty("price")
    public Double price;

    public TicketMessage() {
    }

    public TicketMessage(UUID id, String redisKey, String type, String buyer, int buyerNpa, String petziNumber,
                         String name,
                         Double price) {
        this.id = id;
        this.redisKey = redisKey;
        this.type = type;
        this.buyer = buyer;
        this.buyerNpa = buyerNpa;
        this.petziNumber = petziNumber;
        this.name = name;
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TicketMessage that = (TicketMessage) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
