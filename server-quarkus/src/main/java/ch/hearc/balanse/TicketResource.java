package ch.hearc.balanse;

import ch.hearc.balanse.dto.TicketMessage;
import io.smallrye.mutiny.Multi;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.reactive.messaging.Channel;
import org.jboss.resteasy.reactive.RestStreamElementType;

@Path("/ticket")
public class TicketResource {

    @Inject
    @Channel("tickets")
    Multi<TicketMessage> tickets;

    @GET
    @Path("/sse")
    @Produces(MediaType.SERVER_SENT_EVENTS)
    @RestStreamElementType(MediaType.APPLICATION_JSON)
    public Multi<TicketMessage> stream() {
        return tickets;
    }
}
