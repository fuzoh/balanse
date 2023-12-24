import { type Component, type JSX } from "solid-js";

interface Props {
  children: JSX.Element;
}

export const SeparatorRow: Component<Props> = (props) => {
  return (
    <tr class="text-sm leading-6 text-gray-900">
      <th scope="colgroup" colSpan="3" class="relative isolate py-2 font-semibold">
        {props.children}
        <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
        <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
      </th>
    </tr>
  );
};
