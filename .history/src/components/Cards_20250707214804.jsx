import React from "react";

export default function Cards({ stays }) {
  return (
    <div className="cardsContainer">
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
