import React from "react";
import LocationModal from "./LocationModal";
import GuestModal from "./GuestModal";
import SearchButton from "./buton/SearchButton";

export default function ModalPrincipal({ closeModal }) {
  return (
    <div
      className="fixed inset-0 z-50 backdrop-brightness-50 flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[90%] md:w-[80%] h-[90%] p-6 rounded-2xl shadow-2xl relative overflow-auto"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-xl font-bold text-gray-800 hover:text-[#ef7979]"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row gap-6 items-start justify-between h-full">
          <LocationModal />
          <GuestModal />
          <SearchButton />
        </div>
      </div>
    </div>
  );
}
