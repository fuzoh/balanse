export type EventRegistrationType = "online_presale" | "ticket_proof" | "self_ticket";

export interface EventRegistration {
  id: string | number;
  detailsLink: string;
  name: string;
  eventId: string | number;
  customer: string;
  customerZip: number;
  price: number;
  currency: string;
  type: EventRegistrationType;
}