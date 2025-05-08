import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="container space-y-8 p-4">
      <Navbar />
      <div className="min-h-screen space-y-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
