"use client";

import { useModalStore, useTaskStore } from "@/lib/store";

export default function Modal() {
  const closeModal = useModalStore((state) => state.closeModal);
  const addTask = useTaskStore((state) => state.addTask);

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { title, description } = Object.fromEntries(formData);

    if (typeof title !== "string" || typeof description !== "string") return;

    addTask(title, description);
    closeModal();
  };
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      id="error-modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <form
          onSubmit={handleSumbit}
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
        >
          <div className="sm:flex sm:items-start">
            <div className="my-3 text-center sm:mt-0 sm:text-left">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Add New To Do
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Add your to do task here
                </p>
              </div>
            </div>
          </div>
          <div>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Todo Title"
              className="w-full border border-1 rounded-md p-2 text-sm mb-2 text-gray-900"
            />
            <textarea
              id="description"
              name="description"
              cols={30}
              rows={3}
              placeholder="description"
              className="w-full border border-1 rounded-md p-2 text-sm text-gray-900"
            />
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              onClick={closeModal}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
