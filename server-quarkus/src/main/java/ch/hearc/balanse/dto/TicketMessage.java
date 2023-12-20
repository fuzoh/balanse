package ch.hearc.balanse.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

public class TicketMessage implements Serializable {

    @JsonProperty("id")
    private UUID id;

    @JsonProperty("redis_key")
    private String redisKey;

    @JsonProperty("type")
    private String type;

    @JsonProperty("buyer")
    private String buyer;

    @JsonProperty("buyer_npa")
    private int buyerNpa;


    @JsonProperty("petzi_number")
    private String petziNumber;

    @JsonProperty("name")
    private String name;

    @JsonProperty("price")
    private Double price;

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

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getRedisKey() {
        return redisKey;
    }

    public void setRedisKey(String redisKey) {
        this.redisKey = redisKey;
    }

    public String getBuyer() {
        return buyer;
    }

    public void setBuyer(String buyer) {
        this.buyer = buyer;
    }

    public int getBuyerNpa() {
        return buyerNpa;
    }

    public void setBuyerNpa(int buyerNpa) {
        this.buyerNpa = buyerNpa;
    }

    public String getPetziNumber() {
        return petziNumber;
    }

    public void setPetziNumber(String petziNumber) {
        this.petziNumber = petziNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
