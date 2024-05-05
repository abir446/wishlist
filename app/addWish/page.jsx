"use client";
import React, { useState, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { useRouter } from "next/navigation";

const Addwish = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, description);

    if (!title || !description) {
      alert("Input cannot be empty!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/wishes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        console.log("Data Posted");
        router.push("/");
      } else {
        throw new Error("Failed to POST data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl h-screen bg-blue-50 hover:bg-blue-100 transition-all duration-300  rounded-xl flex flex-col items-center justify-start mx-auto pt-10 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-xl flex-col gap-4 items-center justify-center"
      >
        <div className="w-full flex flex-col gap-1">
          <label
            className="text-lg font-semibold text-[#1014e7]"
            htmlFor="wish"
          >
            What do you wish for:
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full h-10 rounded-lg p-2  focus:p-4 transition-all duration-200"
            placeholder="Become full-stack developer"
            type="text"
            name="wish"
            id="wish"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label
            className="text-lg font-semibold text-[#1014e7]"
            htmlFor="description"
          >
            descriptionribe your wish:
          </label>
          <input
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="w-full h-24  rounded-lg p-2 focus:p-4 transition-all duration-200"
            placeholder="By practing everyday, and being consistent..."
            type="text"
            name="description"
            id="wish"
          />
        </div>

        <button
          type="submit"
          className="p-2 w-full text-center flex items-center justify-center gap-2 bg-blue-600 rounded-lg text-lg text-white font-semibold hover:bg-blue-800 transition-colors duration-200"
        >
          Add to Wishes
          <CiCirclePlus className="text-2xl " />
        </button>
      </form>
    </div>
  );
};

export default Addwish;
