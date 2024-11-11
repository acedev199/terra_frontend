import React from "react";

export function WorldLoadGenerating({generatingProgress}) {

  return (

    <div
      className="flex items-center justify-center min-h-screen world-generating-screen bg-zinc-950 size-full shrink-0"
    >
      <div className="text-center">
        <div className="mb-8 text-sm font-medium text-white">
          Generating world...
        </div>
        <div className="w-72 bg-gray-700 rounded-full h-1.5 overflow-hidden">
          {/* <!-- Loading Bar --> */}
          <div className="h-1 bg-white loading-bar" style={{ width: `${generatingProgress}%`}}></div>
        </div>
        <div className="mt-8 text-sm font-normal text-white">
          Estimated time:
          <span className="minutes-countdown-generation">#</span> minutes,
          <span className="seconds-countdown-generation">#</span>
          seconds
        </div>
      </div>
    </div >

  );
};


export default WorldLoadGenerating;
