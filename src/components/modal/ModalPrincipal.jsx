import React, { useState, useRef, useEffect } from "react";
import LocationModal from "./LocationModal";
import ModalGuest from "./ModalGuest";

export default function ModalPrincipal({ stays, onFiltrar, closeModal }) {
  const [ciudad, setCiudad] = useState("");
  const [mostrarCiudades, setMostrarCiudades] = useState(false);
  const [mostrarGuests, setMostrarGuests] = useState(false);
  const [guests, setGuests] = useState({ adult: 0, child: 0, baby: 0 });
  const modalRef = useRef();
  const locationRef = useRef();
  const guestsRef = useRef();

  const ciudadesUnicas = [...new Set(stays.map((s) => s.city))];

  const handleGuest = (type, operation) => {
    setGuests((prev) => ({
      ...prev,
      [type]:
        operation === "inc" ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  const totalGuests = guests.adult + guests.child + guests.baby;

  const handleSearch = () => {
    const total = guests.adult + guests.child + guests.baby;
    onFiltrar(ciudad, total);
    closeModal();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setMostrarCiudades(false);
      }

      if (guestsRef.current && !guestsRef.current.contains(event.target)) {
        setMostrarGuests(false);
      }

      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center backdrop-brightness-50">
      <button
        onClick={closeModal}
        className="absolute top-5 right-4 text-gray-900 hover:text-[#ef7979] text-xl font-bold z-50"
      >
        &times;
      </button>

      <div
        ref={modalRef}
        className="flex justify-center bg-white w-full h-[90%] md:h-[70%] relative"
      >
        <div className="w-[90%] h-[30%] md:h-[70px] flex flex-col md:flex-row items-center md:justify-between text-[12px] md:text-base rounded-2xl shadow-md bg-white hover:shadow-lg border border-gray-100 m-5 md:mt-15 mt-20">
          <div className="w-[80%] h-[70%] md:h-[70px] flex flex-col md:flex-row items-start justify-center md:justify-between md:ml-4 mt-12 mb-5 gap-4">
            <LocationModal
              ciudad={ciudad}
              setCiudad={setCiudad}
              mostrarCiudades={mostrarCiudades}
              setMostrarCiudades={setMostrarCiudades}
              locationRef={locationRef}
              ciudadesUnicas={ciudadesUnicas}
            />
            <ModalGuest
              guests={guests}
              handleGuest={handleGuest}
              totalGuests={totalGuests}
              mostrarGuests={mostrarGuests}
              setMostrarGuests={setMostrarGuests}
              guestsRef={guestsRef}
            />
          </div>

          {/* BOTÓN SEARCH */}
          <button
            onClick={handleSearch}
            className="bg-[#ef7979] py-3 px-6 gap-2 rounded-2xl flex items-center justify-center mt-5 md:mt-0 mx-auto md:mx-0 w-auto md:mr-4 border border-gray-100 shadow-md cursor-pointer"
          >
            <img
              src="/icons/search.svg"
              alt="Search"
              className="text-white h-4 w-4 md:h-5 md:w-5"
            />
            <p className="text-[16px] md:text-lg text-white">Search</p>
          </button>
        </div>
      </div>
    </div>
  );
}
