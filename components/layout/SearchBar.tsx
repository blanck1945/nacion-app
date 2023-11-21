import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div className="item-center  w-full justify-center hidden md:flex">
      <input
        className="rounded-l-full border pl-3 bg-transparent w-1/4 text-white"
        type="text"
        placeholder="Busca un comercio..."
      />
      <input
        className="rounded-r-full border pl-3 bg-transparent w-1/4 text-white"
        type="text"
        placeholder="Ingresa una ubicacion..."
      />
      <div className="rounded-full bg-blue-500 ml-3 p-3 flex items-center justify-center">
        <FaMagnifyingGlass className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
