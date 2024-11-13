
import React from "react";

function NavBar({ setSearchTerm }) {
  return (
    <header className="container text-gray-400 bg-gray-900 body-font sticky top-0 z-10">
      <div className="container mx-auto flex justify-between flex-wrap p-5 flex-col md:flex-row items-center ">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-teal-500 p-2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tech Heaven</span>
        </a>
        <div className="flex justify-center">
          <input
            className="rounded-lg"
            type="text"
            placeholder="Search?..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></input>
        </div>
        <div>
        <nav className="md:m-auto flex flex-wrap items-center text-base ">
          <a className="mr-5 hover:text-white cursor-pointer">Featured Products</a>
          <a className="mr-5 hover:text-white cursor-pointer">On Sale Products</a>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-teal-900 rounded text-base mt-4 md:mt-0">
            goto Cart
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokewidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;