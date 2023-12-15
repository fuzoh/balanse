import { type Component } from "solid-js";
import { NavLink } from "~/components/buttons/NavLink";
import { RocketIcon } from "~/components/icons/RocketIcon";

export const NavBar: Component = () => {
  return ( 
    <nav
      class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex flex-1 items-center gap-x-6">
        <RocketIcon class="h-8 w-8 text-blue-500" />
      </div>
      <nav
        class="hidden sm:h-16 sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/config">Config</NavLink>
      </nav>
    </nav>
  );
};