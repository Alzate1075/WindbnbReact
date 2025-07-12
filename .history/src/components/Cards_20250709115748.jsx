import React from "react";

export default function Cards({ stays }) {
  return (
    <div className="cardsContainer cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {stays.map((stay) => (
        <div
          key={stay.id}
          className="stayCard overflow-hidden transition-transform duration-400 hover:scale-105 mx-2 gap-2"
        >
          <img
            src={stay.photo}
            alt={stay.title}
            className="w-[400px] h-[250px] object-cover rounded-2xl"
          />
          <h2>{stay.title}</h2>
          <p>{stay.description}</p>
          <p>{stay.price}</p>
          <p className="flex items-center justify-between text-sm md:text-xl text-gray-500">
            {stay.superHost && (
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
