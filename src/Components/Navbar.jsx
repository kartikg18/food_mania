import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-6 mx-6">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {" "}
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold text-black"> Food Buzz</h1>
      </div>
      <div>
        <input
          type="search"
          name="Search"
          id=""
          placeholder="Search items here"
          autoComplete="off"
          className="p-3 border border-gray-400 text-small rounded-lg outline-none width w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
