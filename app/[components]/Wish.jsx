import React from "react";

import Done from "./Done";
import { useRouter } from "next/navigation";

const Wish = ({ title, description, id }) => {
  const router = useRouter();
  const handleDone = async (id) => {
    const res = await fetch(`http://localhost:3000/api/wishes/?id=${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <div
      className="max-w-4xl w-[80%] flex items-start justify-between mx-auto mt-5 hover:bg-blue-200 border border-[#5c73f8] rounded-lg p-3 transition-all duration-300 hover:p-4 hover:shadow-lg hover:translate-x-2
  hover:border-2 md:border-1"
    >
      <div className="w-[90%] ">
        <h2 className="text-2xl font-semibold p-2 px-1  text-[#5c5ff8] hover:text-[#1014e7]">
          {title}
        </h2>
        <p className="p-1  text-[#53559b]">{description}</p>
      </div>
      <Done id={id} />
    </div>
  );
};

export default Wish;
