import React from "react";

export function NotificationSignInError({setAuthError}) {

  return (
    <div
      id="login-auth-error"
      aria-live="assertive"
      className="fixed inset-0 items-start px-4 py-6 pointer-events-none banner-notification sm:p-6 animate-fadeIn"
    >
      <div className="flex flex-col items-center w-full space-y-4 sm:items-center">
        {/* <!-- User Auth Error Notification Wrapper --> */}
        <div
          className="w-full max-w-sm overflow-hidden bg-red-600 rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5"
        >
          <div className="p-4">
            <div className="flex items-center">
              <div className="flex justify-between flex-1 w-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1.5 text-white w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="flex-1 w-0 text-sm font-normal text-white">
                  Incorrect login credentials.
                </p>
              </div>
              <div className="flex flex-shrink-0 ml-4">
                {/* <!-- Close Notification Button --> */}
                <button
                  type="button"
                  className="inline-flex text-gray-400 bg-transparent rounded-md hover:bg-red-800 active:bg-red-800 close-notification-button hover:text-gray-500 focus:outline-none"
                  onClick = {() => {
                    setAuthError(false);
                  }}
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


export default NotificationSignInError;
