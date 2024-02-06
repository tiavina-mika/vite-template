import React from "react";
import { Outlet, Link } from "@tanstack/react-router";
import { auth } from "../constants";

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
      </div>
      <hr />
      <div>
        <span>{auth.user ? auth.user.lastName : "No user"}</span>
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
