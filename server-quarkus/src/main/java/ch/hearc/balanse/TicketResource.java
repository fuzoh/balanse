package ch.hearc.balanse;

import io.smallrye.mutiny.Multi;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.reactive.messaging.Channel;
import org.eclipse.microprofile.reactive.messaging.Emitter;
import org.jboss.resteasy.reactive.RestStreamElementType;

@Path("/ticket")
public class TicketResource {

    @Inject
    @Channel("new-tickets")
    Emitter<Ticket> tickerRequestEmitter;

    @Inject
    @Channel("tickets")
    Multi<Ticket> tickets;

    @POST
    @Path("/webhook")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces()
    public void newTicketRequest(String ticket) {
        tickerRequestEmitter.send(new Ticket(ticket));
    }

    @GET
    @Path("/sse")
    @RestStreamElementType(MediaType.APPLICATION_JSON)
    public Multi<Ticket> stream() {
        return tickets;
    }
}
