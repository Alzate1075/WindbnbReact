import React from "react";

export default function Button() {
  return (
    <div>
      {/* Boton Search */}
      <button
        id="search"
        class="bg-[#ef7979] py-3 px-6 gap-2 rounded-2xl flex items-center justify-center cursor-pointer mt-70 md:mt-0 mx-auto md:mx-0 w-auto md:mr-4 border border-gray-100 shadow-md"
      >
        <img
          src="./src/Jpg/icons/search.svg"
          alt="Search"
          class="text-white h-4 w-4 md:h-5 md:w-5"
        />
        <p class="text-[16px] md:text-lg text-white">Search</p>
      </button>
    </div>
  );
}
