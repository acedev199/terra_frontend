import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signoutFullfilled } from "../../redux/authSlice";

export function UserModal ({handleClickInside}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signoutFullfilled());
    navigate("/sign-in");
  }
  
  return (
    <div
      className="flex items-center justify-center min-h-screen size-full shrink-0"
    >
      {/* <!-- Start of User Modal Container --> */}
      <div
        id="user-modal-container"
        className="absolute flex-row items-center justify-center sm:size-auto"
        onClick={handleClickInside}
      >
        {/* <!-- User Modal Wrapper --> */}
        <div
          className="flex flex-col h-auto border shadow-xl rounded-xl w-60 bg-zinc-900 border-zinc-700 shadow-zinc-950"
        >
          <div
            className="flex flex-row items-center justify-start w-full h-auto p-4 space-x-3 border-b border-zinc-700"
          >
            {/* <!-- Display Avatar --> */}
            <div
              className="flex items-center justify-center text-base text-white bg-purple-500 rounded-full display-avatar shrink-0 w-8 h-8"
            >
              B
            </div>
            <div
              className="flex flex-col items-start justify-start overflow-x-hidden w-7/8"
            >
              {/* <!-- Display Username --> */}
              <div className="text-sm font-semibold text-white username-display">
                @bgbeanble
              </div>
              {/* <!-- Display Email Address --> */}
              <div className="w-full text-xs text-gray-300 user-email-display">
                bgbeanble@gmail.com
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center w-full h-auto p-3 space-y-2 border-b border-zinc-700"
          >
            {/* <!-- Beanble Terms --> */}
            <button
              onClick={() => window.open('https://www.beanble.com/terms')}
              className="font-medium px-3 flex items-row items-center justify-start w-full rounded-md text-white text-sm py-2 sm:py-1.5 hover:bg-zinc-700 tracking-tight"
            >
              Terms
            </button>
            {/* <!-- Beanble Privacy --> */}
            <button
              onClick={() => window.open('https://www.beanble.com/privacy')}
              className="font-medium px-3 flex items-row items-center justify-start w-full rounded-md text-white text-sm py-2 sm:py-1.5 hover:bg-zinc-700 tracking-tight"
            >
              Privacy
            </button>
          </div>
          <div
            className="flex flex-col items-start justify-center w-full h-auto p-3 space-y-2"
          >
            {/* <!-- User Logout Button --> */}
            <button
              id="logout-button"
              className="font-medium px-3 flex items-row items-center justify-start w-full rounded-md text-white text-sm py-2 sm:py-1.5 hover:bg-zinc-700 tracking-tight"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-3 text-gray-300 w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
        {/* <!-- End of User Modal Wrapper --> */}
      </div>
      {/* <!-- End of User Modal Container --> */}
    </div>
  );
};

export default UserModal;
