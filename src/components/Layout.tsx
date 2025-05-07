import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import type { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container space-y-8 p-4">
      <Navbar />
      <div className="min-h-screen space-y-8">{children}</div>
      <Footer />
    </div>
  );
};
