import { Navbar } from "./Navbar";
import type { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container space-y-8">
      <Navbar />
      <>{children}</>
    </div>
  );
};
