import React from "react";

export default function Cards({ stays }) {
  return (
    <div className="cardsContainer w-[20%] h-[10%] flex flex-wrap justify-center gap-6 p-4">
      {stays.map((stay) => (
        <div key={stay.id} className="stayCard">
          <img src={stay.photo} alt={stay.title} />
          <h2>{stay.title}</h2>
          <p>{stay.description}</p>
          <p>{stay.price}</p>
        </div>
      ))}
    </div>
  );
}
