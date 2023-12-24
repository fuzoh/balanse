package ch.hearc.balanse.services;

import ch.hearc.balanse.dto.TicketsStats;
import io.quarkus.redis.datasource.RedisDataSource;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class TicketsService {

    RedisDataSource dataSource;

    public TicketsService(RedisDataSource dataSource) {
        // Redis connection is injected by Quarkus
        this.dataSource = dataSource;
        checkIfTicketIndexExists(); // Called only when service is created -> approx one time per app lifetime
    }

    /**
     * Query redis indexes to get count of tickets and totoal price of all tickets sell
     * Need to use a redis index as follows :
     * FT.CREATE idx:ticket-price ON JSON PREFIX 1 petzi-ticket: SCHEMA $.details.ticket.price.amount AS ticket_price NUMERIC SORTABLE
     */
    public TicketsStats getTicketStats() {
        // Query redis index to get total ticket count
        // FT.AGGREGATE idx:ticket-price * GROUPBY 0 REDUCE COUNT 0 AS total_count
        var ticketCount = dataSource.execute(
                "FT.AGGREGATE",
                "idx:ticket-price",
                "*",
                "GROUPBY",
                "0",
                "REDUCE",
                "COUNT",
                "0",
                "AS",
                "total_count");
        // Query redis index to get total price of all tickets sell
        // FT.AGGREGATE idx:ticket-price * GROUPBY 0 REDUCE SUM 1 @ticket_price AS total_price
        var ticketSells = dataSource.execute(
                "FT.AGGREGATE",
                "idx:ticket-price",
                "*",
                "GROUPBY",
                "0",
                "REDUCE",
                "SUM",
                "1",
                "@ticket_price",
                "AS",
                "total_price");
        // Try to get the results from redis query
        try {
            return new TicketsStats(
                    ticketCount.get("results").iterator().next().get("extra_attributes").get("total_count").toInteger(),
                    ticketSells.get("results").iterator().next().get("extra_attributes").get("total_price").toDouble()
            );
        } catch (Exception e) {
            // If redis query failed, return 0 for both values (this happens when no tickets are present in redis)
            return new TicketsStats(0, 0);
        }
    }

    void checkIfTicketIndexExists() {
        System.out.println("Checking if index exists");
        try {
            // Check if index exists -> throws exception if not
            dataSource.execute("FT.INFO", "idx:ticket-price");
        } catch (Exception e) {
            // Create index if FT.INFO throws exception
            dataSource.execute(
                    "FT.CREATE",
                    "idx:ticket-price",
                    "ON",
                    "JSON",
                    "PREFIX",
                    "1",
                    "petzi-ticket:",
                    "SCHEMA",
                    "$.details.ticket.price.amount",
                    "AS",
                    "ticket_price",
                    "NUMERIC",
                    "SORTABLE"
            );
        }
    }

}
