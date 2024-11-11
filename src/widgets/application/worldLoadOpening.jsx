import React from "react";

export function WorldLoadOpening({openingprogress}) {

  return (

    <div
      class="flex items-center justify-center min-h-screen world-loading-screen bg-zinc-950 size-full shrink-0"
    >
      <div class="text-center">
        <div class="mb-8 text-sm font-medium text-white">Loading world...</div>
        <div class="w-72 bg-gray-700 rounded-full h-1.5 overflow-hidden">
          <div class="h-1 bg-white loading-bar" style={{ width: 0% }}></div>
        </div>
      </div>
    </div>

  );
};


export default WorldLoadOpening;
