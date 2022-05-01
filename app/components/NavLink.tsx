import { NavLink as RemixLink } from "@remix-run/react";

export type LinkProps = {
    to: string,
    name: string,
}

export default function NavLink({ to, name }: LinkProps) {
    return (
        <RemixLink to={to} prefetch="intent"
                   className={({ isActive }) => `text-2xl ${isActive ? "text-white font-bold border-white" : "text-zinc-500 border-transparent"} border-b-2`}>
            {name}
        </RemixLink>
    );
}
