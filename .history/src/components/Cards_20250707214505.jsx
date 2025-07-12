import React from "react";

export default function Cards({ stays }) {
  return (
    <div className="cards-container">
      {stays.map((stay) => (
        <div key={stay.id} className="stay-card">
          <img src={stay.photo} alt={stay.title} />
          <h2>{stay.title}</h2>
          <p>{stay.description}</p>
          <p>{stay.price}</p>
        </div>
      ))}
    </div>
  );
}
