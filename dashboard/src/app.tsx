// @refresh reload
import { type Component, Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import "./root.css";
import { NavBar } from "~/components/layout/NavBar";

const App: Component = () => {
  return (
    <Router
      root={(props) => (
        <>
          <header class="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
            <NavBar />
          </header>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
};

export default App;
