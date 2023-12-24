import { type Component, type JSX } from "solid-js";
import { A } from "@solidjs/router";

interface Props {
  href: string;
  children: JSX.Element;
}

export const NavLink: Component<Props> = (props) => {
  return (
    <A
      class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
      activeClass="border-blue-500 text-gray-900"
      inactiveClass="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
      href={props.href}
    >
      {props.children}
    </A>
  );
};
