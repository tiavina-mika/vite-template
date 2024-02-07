import React from "react";
import { Outlet, Link } from "@tanstack/react-router";

const DashboardLayout = () => {
  return (
    <>
      <nav className="p-2 flex gap-2 justify-between">
        <div className="flex gap-3">
          <Link to="/" activeProps={{ className: `font-bold` }}>
            Home
          </Link>{" "}
          <Link to="/about" activeProps={{ className: `font-bold` }}>
            About
          </Link>
          <Link to="/articles" activeProps={{ className: `font-bold` }}>
            Articles
          </Link>
        </div>
        <div className="flex gap-3">
          <Link to="/profile" activeProps={{ className: `font-bold` }}>
            Profile
          </Link>
          <Link to="/logout" activeProps={{ className: `font-bold` }}>
            Logout
          </Link>
        </div>
      </nav>
      <hr />
      <div className="p-2">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
