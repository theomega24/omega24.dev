import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, ScrollRestoration } from "@remix-run/react";
import styles from "./tailwind.css";

export const meta: MetaFunction = () => ({
  title: "Ben Kerllenevich | Software Engineer",
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-sans bg-zinc-900 text-white w-screen h-screen">
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
}
