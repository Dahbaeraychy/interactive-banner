"use client";
import React from "react";
import { FaCameraRetro, FaFireAlt, FaRegLightbulb } from "react-icons/fa";

const BannerStyles = ({ onClick }: { onClick: () => void }) => {
  const bannerStyles = [
    {
      icon: <FaCameraRetro className="text-3xl dark:text-neutral-400" />,
      title: "Retro",
      description: "A nostalgic style with vintage vibes.",
    },
    {
      icon: <FaRegLightbulb className="text-3xl dark:text-neutral-400" />,
      title: "Modern",
      description: "A sleek and contemporary design.",
    },
    {
      icon: <FaFireAlt className="text-3xl dark:text-neutral-400" />,
      title: "Gen Z",
      description: "A bold and trendy aesthetic.",
    },
  ];

  const [selectedStyle, setSelectedStyle] = React.useState(0);

  return (
    <div className="pl-3 space-y-4 flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 dark:text-neutral-100 ">
        Banner Style
      </h2>

      <div className="grid grid-cols-1 gap-[1rem] ">
        {bannerStyles.map((style, index) => (
          <button
            key={index}
            className={`text-start rounded-lg p-4 bg-white dark:bg-dark-150 cursor-pointer hover:bg-neutral-100 dark:hover:bg-dark-200 transition-all duration-300 ease-in-out flex items-center space-x-2 ${
              selectedStyle === index ? " dark:bg-dark-200 " : ""
            } `}
            onClick={() => setSelectedStyle(index)}
          >
            <div className="w-12 h-12 flex items-center justify-center ">
              {style.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold dark:text-neutral-200 ">
                {style.title}
              </h3>
              <p className="dark:text-neutral-500 ">{style.description}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="pt-2 border-t dark:border-dark-300 border-neutral-200">
        <button
          onClick={onClick}
          className="w-full dark:bg-dark-150 bg-white dark:text-neutral-200 text-neutral-900  p-4 hover:bg-neutral-100 dark:hover:bg-dark-300 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2"
        >
          <span className="font-[600] font-sans text-lg dark:text-white ">
            Download Banner
          </span>
        </button>
      </div>
    </div>
  );
};

export default BannerStyles;
