import React from "react";

export default function Cards({ stays }) {
  return (
    <div className="cardsContainer cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {stays.map((stays) => (
        <div
          key={stays.id}
          className="hotelCard overflow-hidden transition-transform duration-400 hover:scale-105 mx-2 gap-2"
        >
          <img
            src={stays.photo}
            alt={stays.title}
            className="w-[450px] h-[260px] object-cover rounded-2xl"
          />
          <h2>{stays.title}</h2>
          <p>{stays.description}</p>
          <p>{stays.price}</p>
          <p className="flex items-center justify-between text-sm md:text-xl text-gray-500">
            {stays.superHost && (
              <span className="superHost flex items-center justify-between text-sm md:text-xl text-gray-500">
                Super Host
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
