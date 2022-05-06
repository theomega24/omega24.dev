import type { ReactNode } from "react";

export default function Section({ children, className }: { children: ReactNode, className: string; }) {
    return (
        <div className={`flex h-full w-full p-6 mb-4 bg-zinc-800 rounded-2xl ${className}`}>
            {children}
        </div>
    );
}
