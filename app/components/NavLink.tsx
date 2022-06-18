import { NavLink as RemixLink } from "@remix-run/react";

export default function NavLink({ to, name }: { to: string; name: string; }) {
    return (
        <RemixLink to={to} prefetch="intent" className={({ isActive }) => `text-2xl ${isActive ? "text-white border-white" : "text-zinc-500 border-transparent"} border-b-2`}>
            {name}
        </RemixLink>
    );
}
