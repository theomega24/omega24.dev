import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./tailwind.css";

export const meta: MetaFunction = () => ({
    title: "omega24 | Software Engineer",
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    description: "Hi, I'm Ben Kerllenevich (aka omega24). I'm a software engineer who is coincidentally 15 years old.",
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
                <Scripts />
                <ScrollRestoration />
                <LiveReload />
            </body>
        </html>
    );
}
