import Image from "next/image";
import React from "react";
import card1 from "../public/card1img.webp";

const HomePage = () => {
  return (
    <div className="mt-40">
      <div className="lg:container flex flex-col md:flex-row mx-auto">
        <div className="md:w-[50%] text-center md:text-start">
          <h1 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500">
            DALL·E, GPT, Midjourney, Stable Diffusion, ChatGPT
          </h1>
          <p className="text-3xl md:text-5xl font-semibold text-black dark:text-white ">
            Prompt Marketplace
          </p>
          <p className="mt-8 text-lg md:text-2xl font-semibold">
            Find top prompts, produce better results,
            <br /> save on API costs, sell your own prompts.
          </p>
          <div className="max-w-md flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 text-md md:text-xl mx-auto md:mx-0">
            <button className=" w-3/4 md:w-1/2 bg-black dark:bg-white text-white dark:text-black font-bold rounded-md px-8 py-2 whitespace-nowrap">
              Find a prompt
            </button>
            <button className="w-3/4 md:w-1/2 px-12 py-2 border-[1px] dark:border-gray-500 border-gray-300 dark:hover:border-white hover:border-black rounded-md font-bold duration-500 whitespace-nowrap">
              Sell a prompt
            </button>
          </div>
        </div>
        <div className="md:w-[50%] lg:w-[40%] grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto">
          {cardData.map((items) => (
            <div
              className="w-full rounded-lg shadow-md lg:max-w-sm hover:-mt-2 hover:mb-2 duration-500 mt-10 md:mt-0"
              key={items.title}>
              <Image
                className="object-cover w-full h-36 rounded-t-lg"
                src={items.img}
                alt="image"
                width={200}
                height={50}
              />
              <div className="p-2 dark:bg-gray-800 ">
                <h4 className="text-md font-semibold text-black dark:text-white whitespace-nowrap overflow-hidden text-ellipsis ">
                  {items.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

const cardData = [
  {
    img: "/card1img.webp",
    title: "Abstract Halftone Risograph Prints",
  },
  {
    img: "/card1img.webp",
    title: "Minimal Pastel Diagram Art",
  },
  {
    img: "/card1img.webp",
    title: "Butterfly Cliparts",
  },
  {
    img: "/card1img.webp",
    title: "Turbo E-book Writer",
  },
];
