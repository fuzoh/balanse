package ch.hearc.balanse.services;

import ch.hearc.balanse.dto.TicketsStats;
import io.quarkus.redis.datasource.RedisDataSource;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class TicketsService {

    private static final String TICKET_KEY_PREFIX = "petzi-ticket";

    @Inject
    RedisDataSource dataSource;

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
        return new TicketsStats(
                ticketCount.get("results").iterator().next().get("extra_attributes").get("total_count").toInteger(),
                ticketSells.get("results").iterator().next().get("extra_attributes").get("total_price").toDouble()
        );
    }


}
