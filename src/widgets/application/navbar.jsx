import React from "react";

export function Navbar ({handleClickInside, handleNewWorldModal}) {

  return (
    <>
      {/* <!-- Start of World List Primary Navigation Bar Container --> */}
      <div
        className="fixed flex flex-row items-center justify-between w-full h-12 border-b bg-zinc-950 shrink-0 border-zinc-700 w-full"
      >
        <div className="flex flex-row items-center justify-center mx-2">
          {/* <!-- Logo --> */}
          <img
            className="mx-2 w-5 h-5"
            src="/img/terra-symbol-white.png"
            alt="Terra"
          />
        </div>
        <div
          className="flex flex-row items-center justify-center mx-2 user-modal-placement"
        >
          {/* <!-- User Modal Button --> */}
          <button
            className="flex items-center justify-center mx-2 text-xs font-medium text-white bg-purple-500 rounded-full user-modal-button w-7 h-7"
            onClick={handleClickInside}
          >
            B
          </button>
        </div>
      </div>
      {/* <!-- End of World List Primary Navigation Bar Container --> */}
      {/* <!-- *** --> */}
      {/* <!-- Start of World List Secondary Navigation Bar Container --> */}
      <div
        className="flex flex-col items-center justify-start my-12 grow bg-zinc-900 shrink-0"
      >
        <div
          className="flex flex-row items-center justify-center w-full h-32 bg-zinc-900 shrink-0"
        >
          <div className="flex flex-row items-center justify-between w-[90%]">
            {/* <!-- Welcome, @username --> */}
            <div className="text-2xl text-white">Hello, bgbeanble</div>
            {/* <!-- Create World Button --> */}
            <button
              type="button"
              className="new-world-button inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-300"
              onClick={handleNewWorldModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="-ml-0.5 w-5 h-5 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Create
            </button>
          </div>
        </div>
      </div>
      {/* <!-- End of World List Secondary Navigation Bar Container --> */}
    </>
  );
};


export default Navbar;
