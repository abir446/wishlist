"use client";
import React, { useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Wish from "@/components/Wish";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-6xl h-screen bg-blue-50 hover:bg-blue-100 transition-all duration-1000  rounded-xl flex flex-col items-center justify-start mx-auto pt-10 p-4">
      <Link className="w-[80%]" href={"/addWish"}>
        <button className="p-2 w-full text-center flex items-center justify-center gap-2 bg-blue-600 rounded-lg text-lg text-white font-semibold hover:bg-blue-800 transition-colors duration-200">
          Add Wishes
          <CiCirclePlus className="text-2xl " />
        </button>
      </Link>

      <Wish />
      <Wish />
    </div>
  );
};

export default Hero;
