import React, { useState, useRef, useEffect } from "react";

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
            {/* LOCATION */}
            <div className="relative flex-1" ref={locationRef}>
              <button
                onClick={() => setMostrarCiudades(!mostrarCiudades)}
                className="cursor-pointer w-full flex flex-col"
              >
                <p className="text-md md:text-[10px] font-bold">LOCATION</p>
                <input
                  type="text"
                  placeholder="Where do you travel?"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                  className="text-md text-gray-400 outline-none w-50"
                  autoComplete="off"
                />
              </button>
              {mostrarCiudades && (
                <div className="absolute top-full left-0 z-50 bg-white shadow-xl border border-gray-300 mt-2 rounded-md w-[230px] p-3">
                  {ciudadesUnicas
                    .filter((c) =>
                      c.toLowerCase().includes(ciudad.toLowerCase())
                    )
                    .map((c) => (
                      <button
                        key={c}
                        onClick={() => setCiudad(c)}
                        className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                      >
                        <img
                          src="/icons/ubicacion.png"
                          alt="icon"
                          className="w-4 h-4"
                        />
                        {c}, Finland
                      </button>
                    ))}
                </div>
              )}
            </div>

            {/* GUESTS */}
            <div className="relative flex-1" ref={guestsRef}>
              <button
                onClick={() => setMostrarGuests(!mostrarGuests)}
                className="cursor-pointer w-full flex flex-col"
              >
                <p className="text-md md:text-[10px] font-bold text-black">
                  GUESTS
                </p>
                <p className="text-20 text-gray-400">
                  {totalGuests > 0 ? `${totalGuests} guests` : "Add guests"}
                </p>
              </button>
              {mostrarGuests && (
                <div className="absolute top-full left-0 z-50 mt-2 bg-white shadow-xl border border-gray-300 rounded-md p-4 w-[250px]">
                  {[
                    { label: "Adults", desc: "Ages 13++", type: "adult" },
                    { label: "Children", desc: "Ages 2–12", type: "child" },
                    { label: "Babies", desc: "Under 2", type: "baby" },
                  ].map(({ label, desc, type }) => (
                    <div
                      key={type}
                      className="flex justify-between py-2 border-b"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">{label}</p>
                        <p className="text-sm text-gray-500">{desc}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => handleGuest(type, "dec")}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span>{guests[type]}</span>
                        <button
                          onClick={() => handleGuest(type, "inc")}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
