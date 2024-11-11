import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showRenameWorldModal, updateItem } from "../../redux/worldCardsSlice";

export function RenameWorldModal() {
    const dispatch = useDispatch();
    const visibleWorldCardModal = useSelector((state) => state.worldCards.visibleWorldCardModal);

    const [newTitle, setNewTitle] = useState("");
    const [titleError, setTitleError] = useState(false);

    const RenameWorld = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (newTitle) {
            const updatedItem = {
                title: newTitle,
            }
            dispatch(updateItem({ id: visibleWorldCardModal.id, updatedItem }));
            dispatch(showRenameWorldModal(false));
        } else {
            setTitleError(true);
        }

    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center h-full bg-opacity-50 rename-world-modal bg-zinc-950"
        >
            <form
                className="rename-world-form rounded-t-xl sm:rounded-xl sm:w-[24rem] sm:flex flex-col items-center justify-start hidden sm:h-auto h-full border-t sm:border bg-zinc-900 border-zinc-700"
                onClick={(event) => {
                    event.stopPropagation();
                    dispatch(showRenameWorldModal(true));
                }}
            >
                <div
                    className="flex-row items-center justify-between hidden w-full h-16 px-6 border-b rounded-t-xl sm:flex border-zinc-300 border-zinc-700"
                >
                    <div className="text-lg font-semibold text-gray-100">
                        Rename world
                    </div>
                    <button
                        className="p-1 -mx-1 rounded-md close-rename-world-modal-button hover:bg-zinc-100 hover:bg-zinc-800"
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(showRenameWorldModal(false))
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-100"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="flex flex-col items-center justify-start w-full h-full p-6 space-y-8"
                >
                    <div className="w-full">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-gray-100"
                        >World name
                        </label>
                        <div className="relative mt-2">
                            <input
                                type="text"
                                className={`save-world-name-input peer block w-full border-0 py-1.5 px-2 text-gray-100 focus:ring-0 ${titleError && "ring-1 ring-inset ring-red-600"} sm:text-sm sm:leading-6 bg-transparent`}
                                placeholder="e.g. Project Hamster"
                                required
                                onChange={(e) => {
                                    setNewTitle(e.target.value);
                                }}
                            />
                            <div
                                className={`absolute inset-x-0 bottom-0 border-t peer-focus:border-t-1 peer-focus:border-blue-600 border-zinc-700 ${titleError && "border-1 border-red-600"}`}
                                aria-hidden="true"
                            ></div>
                        </div>
                    </div>

                    <div
                        className="flex-row items-center justify-end hidden w-full h-12 px-2 rounded-t-xl sm:flex"
                    >
                        <button
                            type="submit"
                            className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-gray-500 rounded-md shadow-sm save-world-name-submit-button disabled"
                            onClick={RenameWorld}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RenameWorldModal;
