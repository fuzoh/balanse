import { type TicketStats } from "~/dto/TicketStats";

interface Progress {
  amount: number;
  sell: number;
}

export interface TicketStatsWithProgress {
  stats: TicketStats;
  progress: Progress;
}
