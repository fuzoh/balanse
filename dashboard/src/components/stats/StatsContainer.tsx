import { type Component, type JSX } from "solid-js";

interface Props {
  children: JSX.Element;
}
export const StatsContainer: Component<Props> = (props) => {
  return (
    <div class="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
      <dl class="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:px-2 xl:px-0">
        {props.children}
      </dl>
    </div>
  )
}