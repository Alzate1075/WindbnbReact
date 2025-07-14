import React from "react";

export default function ModalGuest({
  guests,
  handleGuest,
  totalGuests,
  mostrarGuests,
  setMostrarGuests,
  guestsRef,
}) {
  return (
    <div className="relative flex-1" ref={guestsRef}>
      <button
        onClick={() => setMostrarGuests(!mostrarGuests)}
        className="cursor-pointer w-full flex flex-col"
      >
        <p className="text-md md:text-[10px] font-bold text-black">GUESTS</p>
        <p className="text-20 text-gray-400">
          {totalGuests > 0 ? `${totalGuests} guests` : "Add guests"}
        </p>
      </button>

      {mostrarGuests && (
        <div className="absolute top-full left-0 z-50 mt-2 bg-white shadow-xl border border-gray-300 rounded-md p-4 w-[250px]">
          {[
            { label: "Adults", desc: "Ages 13++", type: "adult" },
            { label: "Children", desc: "Ages 2–12", type: "child" },
            { label: "Babies", desc: "Under 2", type: "baby" },
          ].map(({ label, desc, type }) => (
            <div key={type} className="flex justify-between py-2 border-b">
              <div>
                <p className="font-semibold text-gray-800">{label}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => handleGuest(type, "dec")}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{guests[type]}</span>
                <button
                  onClick={() => handleGuest(type, "inc")}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
