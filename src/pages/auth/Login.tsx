import React, { useState, FormEvent } from "react";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { login } from "../../actions/auth.actions";

const routeApi = getRouteApi("/public/login");

const Login = () => {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");

  const search = routeApi.useSearch();

  const handleLogin = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsSubmitting(true);

    // mock actions
    await login({ lastName: name });

    navigate({ to: search.redirect });
    setIsSubmitting(false);
  };

  return (
    <div className="p-2">
      <h3>Login page</h3>
      <form className="mt-4" onSubmit={handleLogin}>
        <fieldset
          disabled={isSubmitting}
          className="flex flex-col gap-2 max-w-sm"
        >
          <div className="flex gap-2 items-center">
            <label htmlFor="username-input" className="text-sm font-medium">
              Username
            </label>
            <input
              id="username-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            {isSubmitting ? "Loading..." : "Login"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
