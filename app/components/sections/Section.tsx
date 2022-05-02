import { ReactNode } from "react";

export type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className }: SectionProps) {
  return (
      <div className={`flex h-full w-full p-6 mb-4 bg-zinc-800 rounded-2xl ${className}`}>
        {children}
      </div>
  )
}
