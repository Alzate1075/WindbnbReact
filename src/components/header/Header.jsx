import React, { useState } from "react";
import ModalPrincipal from "../modal/ModalPrincipal";

export default function Header({ stays, onFiltrar }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <header className="mx-6 pt-6 z-40 pb-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <img
            src="/icons/logoWind.png"
            className="w-[120px] md:w-[170px] md:ml-5"
            alt="Logo"
          />
        </div>

        <div
          onClick={handleOpenModal}
          className="flex items-center justify-center border border-gray-50 cursor-pointer text-[12px] md:text-base rounded-2xl shadow-md bg-white py-3 md:py-4 md:mt-4 md:mr-5 hover:shadow-lg"
        >
          <div className="border-r border-gray-100 text-gray-800 px-5">
            Where do you travel?
          </div>
          <div className="border-r border-gray-100 text-gray-400 px-5">
            Add guests
          </div>
          <div className="px-5">
            <img
              src="/icons/search.svg"
              alt="Search"
              className="h-4 w-4 md:h-5 md:w-5 text-[#ef7979]"
            />
          </div>
        </div>
      </div>

      {openModal && (
        <ModalPrincipal
          stays={stays}
          onFiltrar={(ciudad, huespedes) => {
            onFiltrar(ciudad, huespedes);
            handleCloseModal();
          }}
          closeModal={handleCloseModal}
        />
      )}
    </header>
  );
}
