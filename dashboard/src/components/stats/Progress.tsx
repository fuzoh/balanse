import { Switch, type Component, Match } from "solid-js";

interface Props {
  value: number;
  unit: string;
}

export const Progress: Component<Props> = (props) => {
  return (
    <div
      class="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"
      classList={{
        "bg-gray-100 text-gray-800": props.value === 0,
        "bg-green-100 text-green-800": props.value > 0,
        "bg-rose-100 text-rose-800": props.value < 0,
      }}
    >
      <svg
        class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center"
        classList={{
          "text-gray-500": props.value === 0,
          "text-green-500": props.value > 0,
          "text-rose-500": props.value < 0,
        }}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true">
        <Switch fallback={<path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />}>
          <Match when={props.value > 0}>
            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
          </Match>
          <Match when={props.value < 0}>
            <path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" />
          </Match>
        </Switch>
      </svg>
      <span class="sr-only"> Différence en % </span>
      {Math.round(Math.abs(props.value) * 100) / 100}
      {props.unit}
    </div>
  );
};
