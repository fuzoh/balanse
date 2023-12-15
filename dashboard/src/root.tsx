// @refresh reload
import { type Component, Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { NavBar } from "~/components/layout/NavBar";

const Root: Component = () => {

  return (
    <Html lang="en">
      <Head>
        <Title>Dashboard - billets</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <header class="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
              <NavBar />
            </header>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
);
}

export default Root;
