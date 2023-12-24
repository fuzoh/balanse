import { type Component, For } from "solid-js";
import { SeparatorRow } from "~/components/activity/table/SeparatorRow";
import { HeadingRow } from "~/components/activity/table/HeadingRow";
import { DataRow } from "~/components/activity/table/DataRow";
import { type TicketMessage } from "~/dto/TicketMessage";

interface Props {
  activities: TicketMessage[];
}

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

      <For each={props.activities}>
        {(item) => <DataRow data={item} />}
      </For>

      <SeparatorRow>
        <time dateTime="2023-03-21">Yesterday</time>
      </SeparatorRow>
      </tbody>
    </table>
  );
};