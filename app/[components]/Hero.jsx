"use client";
import React, { useState, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Wish from "./Wish";
import Link from "next/link";

const Hero = () => {
  const [wishes, setWishes] = useState([]);
  useEffect(() => {
    const getWishes = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/wishes/", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to get topics");
        }
        const data = await res.json();
        setWishes(data);
      } catch (error) {
        console.log(error);
      }
    };

    getWishes();
  }, []);
  return (
    <div className="max-w-6xl min-h-screen bg-blue-50 hover:bg-blue-100 transition-all duration-1000  rounded-xl flex flex-col items-center justify-start mx-auto pt-10 p-4">
      <Link className="w-[80%]" href={"/addWish"}>
        <button className="p-2 w-full text-center flex items-center justify-center gap-2 bg-blue-600 rounded-lg text-lg text-white font-semibold hover:bg-blue-800 transition-colors duration-200">
          Add Wishes
          <CiCirclePlus className="text-2xl " />
        </button>
      </Link>

      {wishes.map((wish) => (
        <Wish
          key={wish._id}
          title={wish.title}
          description={wish.description}
          id={wish._id}
        />
      ))}
    </div>
  );
};

export default Hero;
