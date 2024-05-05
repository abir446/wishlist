"use client";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

const Done = ({ id }) => {
  const router = useRouter();
  const handleDone = async () => {
    const confirmed = confirm("Are you sure you want to remove?");
    if (confirmed) {
      const res = await fetch(
        `https://wishlist-icfb.vercel.app/api/wishes/?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        window.location.href = "/";
      }
    }
  };

  return (
    <div>
      <MdDelete
        onClick={handleDone}
        className="text-3xl transition-all duration-300 text-[#5c5ff8] md:text-3xl hover:text-4xl  hover:text-[#2f3091]  cursor-pointer "
      />
    </div>
  );
};

export default Done;
