import React from "react";

const get_in_touch_button = () => {
  return (
    <div>
      <button
        type="submit"
        className="
        relative z-10 flex items-center justify-center gap-2 px-4 py-2 mx-auto 
        text-lg text-[#0F1314] lg:font-semibold shadow-xl border-2 rounded-full group
        bg-[#B5A642] border-[#B5A642] backdrop-blur-md isolation-auto overflow-hidden

        before:content before:absolute before:w-full before:h-full before:-left-full 
        before:transition-all before:duration-700 before:rounded-full before:bg-emerald-500 
        before:-z-10 before:aspect-square before:hover:left-0 before:hover:w-full 
        before:hover:scale-150 before:hover:duration-700

        hover:text-gray-300
      "
      >
        Get In Touch
        <svg
          className="
          w-8 h-8 p-2 border border-gray-700 rounded-full rotate-45 ease-linear duration-300
          text-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 group-hover:border-none
        "
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            className="fill-gray-800 group-hover:fill-gray-800"
          />
        </svg>
      </button>
    </div>
  );
};

export default get_in_touch_button;
