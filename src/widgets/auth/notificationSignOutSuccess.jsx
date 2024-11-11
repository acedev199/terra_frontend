import React from "react";
import { useDispatch } from "react-redux";
import { removeSignoutAlert } from "../../redux/authSlice";

export function NotificationSignOutSuccess() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(removeSignoutAlert());
  }

  return (
    <div
      id="logout-auth-success"
      aria-live="assertive"
      className="fixed inset-0 items-start px-4 py-6 pointer-events-none banner-notification sm:p-6 animate-fadeIn"
    >
      <div className="flex flex-col items-center w-full space-y-4 sm:items-center">
        {/* <!-- User Auth Error Notification Wrapper --> */}
        <div
          className="w-full max-w-sm overflow-hidden bg-green-600 rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5"
        >
          <div className="p-4">
            <div className="flex items-center">
              <div className="flex justify-between flex-1 w-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-1.5 text-white w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p className="flex-1 w-0 text-sm font-normal text-white">
                  Successfully logged out.
                </p>
              </div>
              <div className="flex flex-shrink-0 ml-4">
                {/* <!-- Close Notification Button --> */}
                <button
                  type="button"
                  className="inline-flex text-gray-400 bg-transparent rounded-md hover:bg-green-700 active:bg-red-700 close-notification-button hover:text-gray-500 focus:outline-none"
                  onClick={handleClose}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="text-white w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default NotificationSignOutSuccess;
