import React from "react";
import { Outlet, Link } from "@tanstack/react-router";

const DashboardLayout = () => {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/articles" className="[&.active]:font-bold">
          Articles
        </Link>
        <Link
          to="/articles/$id"
          params={{ id: "3" }}
          className="[&.active]:font-bold"
        >
          Article
        </Link>
        <Link to="/profile" className="[&.active]:font-bold">
          Profile
        </Link>
        <Link to="/logout" className="[&.active]:font-bold">
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
