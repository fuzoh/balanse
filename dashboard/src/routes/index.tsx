import { createMemo, createResource, Show } from "solid-js";
import { SubNavigation } from "~/components/layout/SubNavigation";
import { StatsContainer } from "~/components/stats/StatsContainer";
import { StatsElement } from "~/components/stats/StatsElement";
import { ActivitiesContainer } from "~/components/activity/ActivitiesContainer";
import { ActivitiesTable } from "~/components/activity/ActivitiesTable";
import createTicketEventSource from "~/services/TicketEventSourceService";
import { type TicketStats } from "~/dto/TicketStats";
import { type TicketStatsWithProgress } from "~/dto/TicketStatsWithProgress";

export default function Home() {
  const tickets = createTicketEventSource();
  const [stats] = createResource(async () => {
    const response = await fetch("//localhost:8080/ticket/stats");
    return (await response.json()) as TicketStats;
  });

  // Observe tickets store and set new optimistic value to stats
  const computedStats = createMemo<TicketStatsWithProgress>((lastValue) => {
    // Compute total (form first data load and from SSE new data)
    const amount = (stats()?.amount ?? 0) + tickets.length;
    const sell = (stats()?.sell ?? 0) + tickets.reduce((acc, ticket) => acc + ticket.price, 0);
    if (lastValue === undefined || tickets.length === 0) {
      return {
        stats: {
          amount,
          sell,
        },
        progress: {
          amount: 0,
          sell: 0,
        },
      };
    } else {
      return {
        stats: {
          amount,
          sell,
        },
        progress: {
          // Compute progress from last value
          amount: ((amount - lastValue.stats.amount) / lastValue.stats.amount) * 100,
          sell: ((sell - lastValue.stats.sell) / lastValue.stats.sell) * 100,
        },
      };
    }
  });

  return (
    <main>
      <div class="relative isolate overflow-hidden pt-16">
        <SubNavigation title="Billeterie" links={[]} />

        <Show when={stats()}>
          {(s) => (
            <StatsContainer>
              <StatsElement
                value={`${computedStats().stats.sell} CHF`}
                title="Revenu"
                progress={computedStats().progress.sell}
              />
              <StatsElement
                value={`${computedStats().stats.amount} billets`}
                title="Ventes"
                progress={computedStats().progress.amount}
              />
            </StatsContainer>
          )}
        </Show>

        <div
          class="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
          aria-hidden="true"
        >
          <div
            class="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-blue-200 to-violet-200"
            style={{
              "clip-path":
                "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
            }}
          />
        </div>
      </div>

      <div class="space-y-16 py-16 xl:space-y-20">
        {/* <!-- Recent activity table --> */}
        <ActivitiesContainer title="Derniers billets vendus">
          <ActivitiesTable activities={tickets} />
        </ActivitiesContainer>
      </div>
    </main>
  );
}
