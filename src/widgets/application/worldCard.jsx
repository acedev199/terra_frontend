import React from "react";
import { useDispatch } from "react-redux";
import { showWorldCardModal } from "../../redux/worldCardsSlice";

export function WorldCard({data}) {
  const dispatch = useDispatch();

  return (
    <div
        className="flex flex-col cursor-pointer world-card h-96 rounded-xl outline outline-zinc-700 outline-1 hover:bg-zinc-800"
        key={data.id}
        onClick={(event) => {
          event.stopPropagation();
          dispatch(showWorldCardModal({id: data.id, visible: true, data}));
        }}
      >
        {/* <!-- Card Cover | Extracts images from the world and display it on the cover --> */}
        <div
          className="object-cover w-full world-display-cover h-2/3 rounded-t-xl bg-zinc-700"
        ></div>
        <div
          className="flex items-center justify-between w-full px-6 bg-transparent border-gray-500 h-1/3 rounded-b-xl"
        >
          <div className="flex flex-col items-start justify-center w-full gap-y-2">
            {/* <!-- Card Title --> */}
            <div className="text-lg font-medium text-white world-card-title">
              {data.title}
            </div>
            <div className="text-sm font-normal tracking-tight text-gray-300">
              {/* <!-- Card Creation Date --> */}
              Created <span className="world-creation-date">{data.date}</span> days ago
            </div>
          </div>
        </div>
      </div>
  );
}

export default WorldCard;
