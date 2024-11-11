import React from "react";
import { Link } from "react-router-dom";

export function AppStart() {
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div
        className="flex flex-col items-center justify-center min-h-screen size-full shrink-0 gap-y-5"
      >
        <div className="text-4xl font-medium text-white">
          Create worlds with Terra
        </div>
        <div className="text-base text-center text-white">
          Empower your imagination with AI-driven world-building.
        </div>

        <Link
          to="/sign-in"
          className="flex items-center gap-1 p-1 font-bold"
        >
          <button
            id="browser-login-button"
            className="flex items-center justify-center h-auto py-3 my-3 font-medium bg-white rounded-lg hover:bg-gray-200 w-72"
          >
            Log in with browser
          </button>
        </Link>
        <p className="text-sm text-center text-white">
          Don't have an account?
          <button
            id="browser-register-link"
            className="font-semibold leading-6 text-blue-500 hover:underline"
          >
            <Link
              to="/sign-up"
              className="flex items-center gap-1 p-1 font-bold"
            >
              Create one
            </Link>
          </button>
        </p>
      </div>
    </div>
  );
}

export default AppStart;
