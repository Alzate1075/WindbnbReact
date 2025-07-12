import React from "react";

export default function Cards() {
  return (
    <div>
      <img src={stay.photo} alt={stay.title} />
      <h2>{stay.title}</h2>
      <p>{stay.description}</p>
      <p>{stay.price}</p>
    </div>
  );
}
