import React from "react";

export default function Cards({ stays }) {
  return (
    <div className="cardsContainer cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {stays.map((stay) => (
        <div key={stay.id} className="stayCard">
          <img
            src={stay.photo}
            alt={stay.title}
            className="w-[450px] h-[260px] object-cover rounded-2xl"
          />
          <h2>{stay.title}</h2>
          <p>{stay.description}</p>
          <p>{stay.price}</p>
        </div>
      ))}
    </div>
  );
}
