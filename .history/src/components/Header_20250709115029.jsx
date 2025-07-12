import React from "react";

export default function Header() {
  return (
    <header id="cabecera" className="mx-6 pt-6 z-40 pb-4">
      <div className="flex md:flex-col items-center gap-4 md:flex-row md:justify-between md:items-center">
        <div id="logoWind">
          <img
            src="/public/icons/logo2.png"
            className="w-[120px] md:w-[170px] md:ml-5"
          />
          <div
            id="abrirModal"
            className="flex items-center justify-center border border-gray-50 cursor-pointer text-[12px] md:text-base rounded-2xl shadow-md bg-white py-3 md:py-4 md:mt-4 md:mr-5 hover:shadow-lg"
          >
            <div className="border-r border-gray-100 text-gray-800 pl-5 pr-5">
              Where do you travel?
            </div>
            <div className="border-r border-gray-100 text-gray-400 pl-5 pr-5">
              Add guests
            </div>
            <div>
              <button className="pl-5 pr-5">
                <img
                  src="/icons/search.svg"
                  alt=""
                  className="text-[#ef7979] cursor-pointer h-4 w-4 md:h-5 md:w-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
