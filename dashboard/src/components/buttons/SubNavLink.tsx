import { type Component, type JSX } from "solid-js";
import { A } from "@solidjs/router";

interface Props {
  href: string;
  children: JSX.Element;
}

export const SubNavLink: Component<Props> = (props) => {
  return (
    <A activeClass="text-blue-600" inactiveClass="text-gray-700" href={props.href}>
      {props.children}
    </A>
  );
};
