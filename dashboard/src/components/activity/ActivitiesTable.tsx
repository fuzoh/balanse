import { type Component } from "solid-js";
import { SeparatorRow } from "~/components/activity/table/SeparatorRow";
import { HeadingRow } from "~/components/activity/table/HeadingRow";
import { DataRow } from "~/components/activity/table/DataRow";
import { type EventRegistration } from "~/dto/EventRegistration";

interface Props {
  activities: any[];
}

const event = {
  id: "XXXX2941J6SY",
  detailsLink: "https://toto.tutu.com/events/12345",
  name: "My super event",
  eventId: 12345,
  customer: "Toto Tutu",
  customerZip: 1234,
  price: 10.00,
  currency: "CHF",
  type: "online_presale"
} satisfies EventRegistration;

export const ActivitiesTable: Component<Props> = (props) => {
  return (
    <table class="w-full text-left">
      <thead class="sr-only">
      <HeadingRow />
      </ thead>
      <tbody>
      <SeparatorRow>
        <time dateTime="2023-03-22">Today</time>
      </SeparatorRow>

      <DataRow data={event} />
      <DataRow data={event} />
      <DataRow data={event} />

      <SeparatorRow>
        <time dateTime="2023-03-21">Yesterday</time>
      </SeparatorRow>

      <DataRow data={event} />
      </tbody>
    </table>
  );
};