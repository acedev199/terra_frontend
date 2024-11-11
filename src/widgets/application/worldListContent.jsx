import React from "react";
import { useSelector } from "react-redux";
import { WorldCard } from ".";

export function WorldListContent() {
  const worldList = useSelector((state) => state.worldCards.worldCards);

  return (
    <div
      className="flex flex-col items-center justify-center py-8 w-full bg-zinc-900 shrink-0 gap-y-8"
    >
      {/* <!-- World Content Column | Displays unlimited columns of content --> */}
      <div className="world-content-column w-[90%] h-full flex flex-col gap-8">
        {/* <!-- Start World Content Row | Displays a maximum of 3 cards per row --> */}
        <div className="grid grid-cols-3 w-full world-content-row gap-x-8 gap-y-8">
          {worldList.map(card =>
            <WorldCard data={card} key={card.id}/>
          )}
        </div>
        {/* <!-- End of World Content Row --> */}
      </div>
      {/* <!-- End of World Content Column --> */}
    </div>
  );
}


export default WorldListContent;
