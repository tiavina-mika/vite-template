import React from "react";
import { Outlet, Link } from "@tanstack/react-router";

const DashboardLayout = () => {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" activeProps={{ className: `font-bold` }}>
          Home
        </Link>{" "}
        <Link to="/about" activeProps={{ className: `font-bold` }}>
          About
        </Link>
        <Link to="/articles" activeProps={{ className: `font-bold` }}>
          Articles
        </Link>
        <Link
          to="/articles/$id"
          params={{ id: "3" }}
          activeProps={{ className: `font-bold` }}
        >
          Article
        </Link>
        <Link to="/profile" activeProps={{ className: `font-bold` }}>
          Profile
        </Link>
        <Link to="/logout" activeProps={{ className: `font-bold` }}>
          Logout
        </Link>
      </div>
      <hr />
      <div className="p-2">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
