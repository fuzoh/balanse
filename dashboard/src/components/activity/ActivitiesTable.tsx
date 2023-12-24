import { type Component, For } from "solid-js";
import { SeparatorRow } from "~/components/activity/table/SeparatorRow";
import { HeadingRow } from "~/components/activity/table/HeadingRow";
import { DataRow } from "~/components/activity/table/DataRow";
import { type TicketMessage } from "~/dto/TicketMessage";
import { EmptyRow } from "~/components/activity/table/EmptyRow";

interface Props {
  activities: TicketMessage[];
}

export const ActivitiesTable: Component<Props> = (props) => {
  return (
    <table class="w-full text-left">
      <thead class="sr-only">
        <HeadingRow />
      </thead>
      <tbody>
        <SeparatorRow>
          <time dateTime="2023-03-22">Aujourd'hui</time>
        </SeparatorRow>

        <For each={props.activities} fallback={<EmptyRow />}>
          {(item) => <DataRow data={item} />}
        </For>
      </tbody>
    </table>
  );
};
