import { type Component } from "solid-js";
import { Progress } from "~/components/stats/Progress";

interface Props {
  title: string;
  value: string;
  progress: number;
}

export const StatsElement: Component<Props> = (props) => {
  return (
    <div class="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8 sm:border-l first:border-l-0">
      <dt class="text-sm font-medium leading-6 text-gray-500">{props.title}</dt>
      <Progress value={props.progress} unit="%" />
      <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
        {props.value}
      </dd>
    </div>
  );
};
