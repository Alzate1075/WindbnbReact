import React from "react";

export default function Cards({ hotel }) {
  return (
    <div className="cardsContainer cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {hotel.map((hotel) => (
        <div
          key={hotel.id}
          className="hotelCard overflow-hidden transition-transform duration-400 hover:scale-105 mx-2 gap-2"
        >
          <img
            src={hotel.photo}
            alt={hotel.title}
            className="w-[450px] h-[260px] object-cover rounded-2xl"
          />
          <h2>{hotel.title}</h2>
          <p>{hotel.description}</p>
          <p>{hotel.price}</p>
          <p className="flex items-center justify-between text-sm md:text-xl text-gray-500">
            {hotel.superHost && (
              <span className="superHost text-center items-center border border-gray-800 rounded-full px-2 py-1 text-xs md:text-md font-bold text-gray-800">
                Super Host
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
