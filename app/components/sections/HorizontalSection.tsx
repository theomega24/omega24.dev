import type { ReactNode } from "react";

export default function HorizontalSection({ children }: { children: ReactNode; }) {
    return (
        <div className="flex justify-between space-x-4 h-[62rem]">
            {children}
        </div>
    );
}
