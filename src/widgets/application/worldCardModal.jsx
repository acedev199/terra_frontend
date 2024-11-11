import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showWorldCardModal, showRenameWorldModal, removeItem } from "../../redux/worldCardsSlice";

export function WorldCardModal() {
  const dispatch = useDispatch();
  const visibleWorldCardModal = useSelector((state) => state.worldCards.visibleWorldCardModal);
  return (
    <div
      className="flex items-center justify-center min-h-screen size-full shrink-0"
    >
      <div className="flex flex-row items-center justify-center sm:size-full">
        <div
          className="flex flex-col h-auto border shadow-xl world-card-modal rounded-xl w-52 bg-zinc-900 border-zinc-700 shadow-zinc-950"
          onClick={(event) => {
            event.stopPropagation();
            dispatch(showWorldCardModal({...visibleWorldCardModal, visible: true}));
          }}
        >
          <div
            className="flex flex-col items-start justify-center w-full h-auto p-2 space-y-2"
          >
            <button
              className="play-world-button font-medium px-3 flex items-row items-center justify-start w-full rounded-md text-white text-sm py-2 sm:py-1.5 hover:bg-zinc-700 tracking-tight"
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
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
              Play
            </button>

            <button
              className="rename-world-button font-medium px-3 flex items-row items-center justify-start w-full rounded-md text-white text-sm py-2 sm:py-1.5 hover:bg-zinc-700 tracking-tight"
              onClick={(event) => {
                event.stopPropagation();
                dispatch(showRenameWorldModal(true));
                dispatch(showWorldCardModal({...visibleWorldCardModal, visible: false}));
              }}
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              Rename
            </button>
            <button
              className="delete-world-button font-medium px-3 flex items-row items-center justify-start w-full rounded-md text-white text-sm py-2 sm:py-1.5 hover:bg-zinc-700 tracking-tight"
              onClick={(event) => {
                event.stopPropagation();
                dispatch(showWorldCardModal({...visibleWorldCardModal, visible: false}));
                dispatch(removeItem(visibleWorldCardModal.id));
              }}
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldCardModal;
