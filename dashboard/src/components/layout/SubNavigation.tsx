import { type Component, Index, Show } from "solid-js";
import { SubNavLink } from "~/components/buttons/SubNavLink";

interface Props {
  title: string;
  links: Array<{ href: string; label: string }>;
  action?: {
    actionName: string;
    action: () => void;
  };
}

export const SubNavigation: Component<Props> = (props) => {
  return (
    <header class="pb-4 pt-6 sm:pb-6">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
        <h1 class="text-base font-semibold leading-7 text-gray-900">{props.title}</h1>
        <Show when={props.links.length > 0}>
          <div class="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
            <Index each={props.links}>
              {(link) => <SubNavLink href={link().href}>{link().label}</SubNavLink>}
            </Index>
          </div>
        </Show>

        <Show when={props.action}>
          {(action) => (
            <button
              onClick={action().action}
              class="ml-auto flex items-center gap-x-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <svg
                class="-ml-1.5 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
              </svg>
              {action().actionName}
            </button>
          )}
        </Show>
      </div>
    </header>
  );
};
