import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Links, LiveReload, Meta, Outlet, ScrollRestoration } from "@remix-run/react";
import styles from "./tailwind.css";

export const meta: MetaFunction = () => ({
    title: "omega24 | Software Engineer",
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    description: "Hi, my name is Ben Kerllenevich and I'm a 15 year old software developer.",
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
            <body className="font-sans bg-zinc-900 text-white w-screen h-screen overflow-hidden">
                <Outlet />
                <ScrollRestoration />
                <LiveReload />
            </body>
        </html>
    );
}
