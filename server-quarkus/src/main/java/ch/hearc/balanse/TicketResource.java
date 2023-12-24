package ch.hearc.balanse;

import ch.hearc.balanse.dto.TicketMessage;
import ch.hearc.balanse.dto.TicketsStats;
import ch.hearc.balanse.services.TicketsService;
import io.smallrye.mutiny.Multi;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.reactive.messaging.Channel;
import org.jboss.resteasy.reactive.RestStreamElementType;

@Path("/ticket")
public class TicketResource {

    @Inject
    TicketsService ticketsService;

    @GET
    @Path("/stats")
    @Produces(MediaType.APPLICATION_JSON)
    public TicketsStats getTicketStats() {
        return ticketsService.getTicketStats();
    }

    /**
     * Connect a reactive stream to the tickets channel.
     * This channel il connected to corresponding Kafka topic in configuration.
     */
    @Inject
    @Channel("tickets")
    Multi<TicketMessage> tickets;

    /**
     * Expose the reactive stream as an SSE stream.
     */
    @GET
    @Path("/sse")
    @Produces(MediaType.SERVER_SENT_EVENTS)
    @RestStreamElementType(MediaType.APPLICATION_JSON)
    public Multi<TicketMessage> stream() {
        return tickets;
    }

}
