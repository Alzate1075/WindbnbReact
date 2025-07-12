import React, { useState } from "react";

export default function LocationModal() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const openLocationModal = () => {
    setIsLocationModalOpen(true);
  };

  const closeLocationModal = () => {
    setIsLocationModalOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === "locationModalBackdrop") {
      closeLocationModal();
    }
  };

  return (
    <div className="relative flex-1">
      <button
        onClick={openLocationModal}
        className="cursor-pointer w-full flex flex-col"
      >
        <p className="text-md md:text-[10px] font-bold">LOCATION</p>
        <input
          type="text"
          placeholder="Where do you travel?"
          className="text-md text-gray-400 outline-none focus:outline-none w-50"
          autoComplete="off"
        />
      </button>

      {isLocationModalOpen && (
        <div
          id="locationModalBackdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 backdrop-brightness-50 flex items-center justify-center"
        >
          <div className="relative bg-white h-[200px] w-[300px] md:w-[230px] md:h-[300px] shadow-xl hover:shadow-2xl border border-gray-300 p-4">
            <button
              onClick={closeLocationModal}
              className="absolute top-2 right-2 text-gray-900 hover:text-[#ef7979] text-xl font-bold z-50"
            >
              &times;
            </button>
            <div className="flex flex-col items-center justify-center gap-3 mt-8">
              <button className="border p-2 rounded-md hover:bg-gray-100">
                Helsinki
              </button>
              <button className="border p-2 rounded-md hover:bg-gray-100">
                Turku
              </button>
              <button className="border p-2 rounded-md hover:bg-gray-100">
                Vaasa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
