import { type Component, type JSX } from "solid-js";

interface Props {
  title: string;
  children: JSX.Element;
}

export const ActivitiesContainer: Component<Props> = (props) => {
  return (
    <div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
          {props.title}
        </h2>
      </div>
      <div class="mt-6 overflow-hidden border-t border-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
