"use client";
import { useModalStore } from "@/lib/store";
import Column from "./column";
import Modal from "./modal";
export default function Columns() {
  const {closeModal,isOpen,openModal} = useModalStore()

  console.log(isOpen)

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        OPEN THY MODAL
      </button>
      <section className="mt-10 flex gap-6 lg:gap-12">
        <Column title="Todo" status="TODO" />
        <Column title="In Progress" status="IN_PROGRESS" />
        <Column title="Done" status="DONE" />
      </section>
      {isOpen && <Modal />}
    </div>
  );
}
