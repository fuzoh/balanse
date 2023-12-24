import { type Component } from "solid-js";

interface Props {
  value: number;
  unit: string;
}

export const Progress: Component<Props> = (props) => {
  const prefix = (val: number): string => {
    if (val > 0) return "+";
    if (val < 0) return "-";
    return "";
  };

  return (
    <dd
      class="text-xs font-medium"
      classList={{
        "text-gray-700": props.value === 0,
        "text-green-600": props.value > 0,
        "text-rose-600": props.value < 0,
      }}
    >
      {prefix(props.value)}
      {Math.abs(props.value)}
      {props.unit}
    </dd>
  );
};
