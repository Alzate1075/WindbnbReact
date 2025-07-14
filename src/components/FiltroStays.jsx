import React, { useState } from "react";
import Header from "./Header";
import Cards from "./cards/Cards";

export default function FiltroStays({ stays }) {
  const [filtro, setFiltro] = useState({ ciudad: "", huespedes: 0 });

  const staysFiltrados = stays.filter((s) => {
    const coincideCiudad =
      filtro.ciudad === "" ||
      s.city.toLowerCase() === filtro.ciudad.toLowerCase();

    const tieneCapacidad = s.maxGuests >= filtro.huespedes;

    return coincideCiudad && tieneCapacidad;
  });

  const manejarFiltro = (ciudad, huespedes) => {
    setFiltro({ ciudad, huespedes });
  };

  return (
    <>
      <Header
        stays={stays}
        onFiltrar={manejarFiltro}
        totalResultados={staysFiltrados.length}
      />
      <Cards stays={staysFiltrados} />
    </>
  );
}
