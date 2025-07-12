import React, { useState } from "react";

export default function GuestModal() {
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);

  const [guests, setGuests] = useState({
    adult: 0,
    child: 0,
    baby: 0,
  });

  const increment = (type) => {
    setGuests({ ...guests, [type]: guests[type] + 1 });
  };

  const decrement = (type) => {
    setGuests({
      ...guests,
      [type]: guests[type] > 0 ? guests[type] - 1 : 0,
    });
  };

  return (
    <div className="relative flex-1">
      <button
        onClick={() => setIsGuestModalOpen(!isGuestModalOpen)}
        className="cursor-pointer w-full flex flex-col"
      >
        <p className="text-md md:text-[10px] font-bold text-black">GUESTS</p>
        <p className="text-20 text-gray-400">
          {guests.adult + guests.child + guests.baby > 0
            ? `${guests.adult + guests.child + guests.baby} guests`
            : "Add guests"}
        </p>
      </button>

      {isGuestModalOpen && (
        <div className="absolute top-full left-0 z-50 transition bg-white border shadow-xl rounded mt-4 p-4 w-[300px] md:w-[250px]">
          <button
            onClick={() => setIsGuestModalOpen(false)}
            className="absolute top-2 right-2 text-xl font-bold hover:text-[#ef7979]"
          >
            &times;
          </button>

          {/* Adultos */}
          <div className="flex items-center justify-between py-3 border-b gap-6">
            <div>
              <p className="font-semibold text-gray-800">Adults</p>
              <p className="text-sm text-gray-500">Ages 13++</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => decrement("adult")}>-</button>
              <span>{guests.adult}</span>
              <button onClick={() => increment("adult")}>+</button>
            </div>
          </div>

          {/* Niños */}
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-semibold text-gray-800">Children</p>
              <p className="text-sm text-gray-500">Ages 2–12</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => decrement("child")}>-</button>
              <span>{guests.child}</span>
              <button onClick={() => increment("child")}>+</button>
            </div>
          </div>

          {/* Bebés */}
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold text-gray-800">Babies</p>
              <p className="text-sm text-gray-500">Under 2</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => decrement("baby")}>-</button>
              <span>{guests.baby}</span>
              <button onClick={() => increment("baby")}>+</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
