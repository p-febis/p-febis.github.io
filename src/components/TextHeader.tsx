import type { PropsWithChildren } from "react";

export const TextHeader = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="text-center">
      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h1>
      {children}
    </div>
  );
};
