import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/worldCardsSlice";

export function NewWorldModal({ handleClickInsideNewWorld, setNewWorldModal, setIsGenerated, setGeneratingProgress }) {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    // State for title, description, and worldList array
    const generateWorld = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const date = 0;
        if (title && description) {
            const newWorld = { id: Date.now(), title, date };
            dispatch(addItem(newWorld));
            setIsGenerated(false);
            setGeneratingProgress(0);
            setTitle('');
            setDescription('');
            setNewWorldModal(false);
        } else if (!title) {
            setTitleError(true);
        } else if (!description) {
            setDescriptionError(true);
        }
    };

    useEffect(() => {
        // Enable the button if both inputs have values
        if (title.trim() && description.trim()) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [title, description]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center h-full bg-opacity-50 new-world-modal bg-zinc-950"
        >
            {/* <!-- New World Form --> */}
            <form
                className="new-world-form rounded-t-xl sm:rounded-xl sm:w-[30rem] sm:flex flex-col items-center justify-start hidden sm:h-auto h-full border-t sm:border dark:bg-zinc-900 dark:border-zinc-700"
                onClick={handleClickInsideNewWorld}
            >
                <div
                    className="flex-row items-center justify-between hidden w-full h-16 px-6 border-b rounded-t-xl sm:flex border-zinc-300 dark:border-zinc-700"
                >
                    <div className="text-lg font-semibold text-gray-100">
                        Create world
                    </div>
                    {/* <!-- Close New World Modal Button --> */}
                    <button
                        className="p-1 -mx-1 rounded-md close-new-world-modal-button hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        onClick={(event) => {
                            event.stopPropagation();
                            setNewWorldModal(false);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className=" w-6 h-6 text-gray-100"
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
                            {/* <!-- New World Name Input --> */}
                            <input
                                type="text"
                                className={`new-world-name-input peer block w-full border-0 py-1.5 px-2 text-gray-100 focus:ring-0 ${titleError && "ring-1 ring-red-600" } sm:text-sm sm:leading-6 bg-transparent`}
                                placeholder="e.g. Project Hamster"
                                required
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <div
                                className="absolute inset-x-0 bottom-0 border-t peer-focus:border-t-1 peer-focus:border-blue-600 dark:border-zinc-700"
                                aria-hidden="true"
                            ></div>
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="comment" className="block font-medium text-white text-sm/6"
                        >Describe your world
                        </label>
                        <div className="mt-2">
                            {/* <!-- New World Description Input --> */}
                            <textarea
                                rows="4"
                                name="comment"
                                placeholder="e.g. Create an ice world surrounded by tall mountains with rocky peaks and frozen pine trees."
                                className={`new-world-description-input bg-transparent block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-zinc-700 focus:ring ${descriptionError ? "ring-red-600" : "active:ring-blue-600"} focus:ring-blue-600 placeholder:text-gray-400 sm:text-sm/6`}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div
                        className="flex-row items-center justify-end hidden w-full h-12 px-2 rounded-t-xl sm:flex"
                    >
                        {/* <!-- New World Form Submit Button --> */}
                        <button
                            className={`inline-flex items-center px-5 py-2 text-sm font-semibold text-white rounded-md shadow-sm new-world-form-submit-button ${isButtonEnabled ? 'bg-blue-600 hover:bg-blue-500' : 'disabled bg-gray-500'}`}
                            onClick={generateWorld}
                        >
                            Create
                        </button>
                    </div>
                </div>
            </form >
        </div >
    );
}

export default NewWorldModal;
