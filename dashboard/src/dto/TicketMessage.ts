export interface TicketMessage {
  id: string;
  type: string;
  redis_key: string;
  buyer: string;
  buyer_npa: number;
  petzi_number: string;
  name: string;
  price: number;
}
