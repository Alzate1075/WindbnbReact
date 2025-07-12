import React from "react";

export default function Cards({ stays }) {
  return (
    {/* <div className="cardsContainer cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
          <p className="text-center items-center border border-gray-800 rounded-full px-2 py-1 text-xs md:text-md font-bold text-gray-800">
            {stays.superHost && (
              <span className="superHost flex items-center justify-between text-sm md:text-xl text-gray-500">
                Super Host
              </span>
            )}
          </p>
          <h2>{stays.title}</h2>
          <p>{stays.description}</p>
          <p>{stays.price}</p>
        </div>
      ))}
    </div> */}
    <div>
      <div class="overflow-hidden transition-transform duration-400 hover:scale-105 mx-2 gap-2">
          <img class="w-[450px] h-[260px] object-cover rounded-2xl" src="${hotel.photo}" alt="Foto de ${hotel.title}" />
          <div class="p-4 flex flex-col gap-2">
            <div class="flex items-center justify-between text-sm md:text-xl text-gray-500">
              ${hotel.superHost ? '<span class="text-center items-center border border-gray-800 rounded-full px-2 py-1 text-xs md:text-md font-bold text-gray-800">SUPER HOST</span>' : ''}
              <span class="md:text-lg">${hotel.type}${hotel.beds ? ` · ${hotel.beds} beds` : ''}</span>
              <span class="text-[#ef7979] font-semibold flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.377 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.63 9.392c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.965z"/>
                </svg>
                ${hotel.rating}
              </span>
            </div>
            <h3 class="text-base md:text-lg font-semibold italic font-serif text-gray-800">${hotel.title}</h3>
          </div>
        </div>
      </div>
  );
}
