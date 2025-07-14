import React from "react";

export default function LocationModal({
  ciudad,
  setCiudad,
  mostrarCiudades,
  setMostrarCiudades,
  locationRef,
  ciudadesUnicas,
}) {
  return (
    <div className="relative flex-1" ref={locationRef}>
      <div
        onClick={() => setMostrarCiudades(!mostrarCiudades)}
        className="cursor-pointer w-full flex flex-col"
      >
        <p className="text-md md:text-[10px] font-bold">LOCATION</p>
      </div>

      <input
        type="text"
        placeholder="Where do you travel?"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
        className="text-md text-gray-400 outline-none w-50"
        autoComplete="off"
        onFocus={() => setMostrarCiudades(true)}
      />

      {mostrarCiudades && (
        <div className="absolute top-full left-0 z-50 bg-white shadow-xl border border-gray-300 mt-2 rounded-md w-[230px] p-3">
          {ciudadesUnicas
            .filter((c) => c.toLowerCase().includes(ciudad.toLowerCase()))
            .map((c) => (
              <button
                key={c}
                onClick={() => setCiudad(c)}
                className="block w-full text-left px-2 py-1 hover:bg-gray-100"
              >
                <img
                  src="/icons/ubicacion.png"
                  alt="icon"
                  className="w-4 h-4 inline-block mr-2"
                />
                {c}, Finland
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
