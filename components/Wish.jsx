import React from "react";
import { MdDelete } from "react-icons/md";

const Wish = () => {
  return (
    <div
      className="max-w-4xl flex items-start justify-between mx-auto mt-5 hover:bg-blue-200 border border-[#5c73f8] rounded-lg p-3 transition-all duration-300 hover:p-4 hover:shadow-lg hover:translate-x-2
  hover:border-2 md:border-1"
    >
      <div className="w-[90%] ">
        <h2 className="text-2xl font-semibold p-2 px-1  text-[#5c5ff8] hover:text-[#1014e7]">
          Wish Title
        </h2>
        <p className="p-1  text-[#53559b]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quaerat ipsam fuga consectetur. Fugiat in sed culpa reiciendis?
          Adipisci, consequuntur.
        </p>
      </div>
      <MdDelete className="text-3xl transition-all duration-300 text-[#5c5ff8] md:text-3xl hover:text-4xl  hover:text-[#2f3091]  cursor-pointer " />
    </div>
  );
};

export default Wish;
