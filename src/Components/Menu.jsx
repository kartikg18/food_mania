import React from "react";

const Menu = () => {
  return (
    <div className="ml-6">
      <h3>Find Your Faviorate Food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button className="px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-600 hover:text-white flex-auto">All</button>
        <button className="px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-600 hover:text-white flex-auto">Lunch</button>
        <button className="px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-600 hover:text-white flex-auto">BreakFast</button>
        <button className="px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-600 hover:text-white flex-auto">Dinner</button>
        <button className="px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-600 hover:text-white flex-auto">Snacks</button>
     
      </div>
    </div>
  );
};

export default Menu;
