import { createStore } from "solid-js/store";
import { type TicketMessage } from "~/dto/TicketMessage";

const createTicketEventSource = (): TicketMessage[] => {
  const [tickets, setTickets] = createStore<TicketMessage[]>([]);

  const eventSource = new EventSource("//localhost:8080/ticket/sse", {
    withCredentials: true
  });
  eventSource.onerror = (e) => {
    console.error(e);
  }
  eventSource.onmessage = (e) => {
    setTickets([...tickets, JSON.parse(e.data) as TicketMessage]);
  };

  return tickets;
};

export default createTicketEventSource;