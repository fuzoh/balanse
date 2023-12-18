import { type Component } from "solid-js";
import { SubNavigation } from "~/components/layout/SubNavigation";
import { StatsContainer } from "~/components/stats/StatsContainer";
import { StatsElement } from "~/components/stats/StatsElement";
import { ActivitiesContainer } from "~/components/activity/ActivitiesContainer";
import { ActivitiesTable } from "~/components/activity/ActivitiesTable";
import { type EventRegistration } from "~/dto/EventRegistration";

const events = [{
  id: "XXXX2941J6SY",
  detailsLink: "https://toto.tutu.com/events/12345",
  name: "My super event",
  eventId: 12345,
  customer: "Toto Tutu",
  customerZip: 1234,
  price: 10.00,
  currency: "CHF",
  type: "online_presale"
}
] satisfies EventRegistration[];

export const Home: Component = () => {
  const links = [
    { href: "/last-five-days", label: "5 derniers jours" },
    { href: "/last-day", label: "Dernier jour" },
    { href: "/last-hour", label: "Dérnière heure" },
  ]
  return (
    <main>
      <div class="relative isolate overflow-hidden pt-16">
        <SubNavigation title="Billeterie" links={links} />

        <StatsContainer>
          <StatsElement value={12443} title="Nombre de billets vendus" progress={15} />
          <StatsElement value={20} title="Revenu" progress={20} />
          <StatsElement value={12443} title="Nombre de billets vendus" progress={15} />
          <StatsElement value={12443} title="Nombre de billets vendus" progress={15} />
        </StatsContainer>

        <div
          class="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
          aria-hidden="true">
          <div
            class="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-blue-200 to-violet-200"
            style={{ "clip-path": "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)" }} />
        </div>
      </div>

      <div class="space-y-16 py-16 xl:space-y-20">
        {/* <!-- Recent activity table --> */}
        <ActivitiesContainer title="Derniers billets vendus">
          <ActivitiesTable activities={events} />
        </ActivitiesContainer>

      </div>
    </main>
  );
}

export default Home;
