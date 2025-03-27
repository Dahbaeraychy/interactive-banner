import React from "react";

const BannerStyles = () => {
  const bannerStyles = [
    { title: "Retro", description: "A nostalgic style with vintage vibes." },
    { title: "Modern", description: "A sleek and contemporary design." },
    {
      title: "Gen Z",
      description: "A bold and trendy aesthetic for the new generation.",
    },
  ];

  return (
    <div className="pl-3">
      <h2 className="text-[22px] font-semibold mb-4 dark:text-neutral-100 ">
        Banner Style
      </h2>

      <div className="grid grid-cols-1 gap-[1rem] ">
        {bannerStyles.map((style, index) => (
          <div
            key={index}
            className="border dark:border-dark-200 rounded-lg p-4 bg-white dark:bg-dark-150 "
          >
            <h3 className="text-lg font-semibold dark:text-neutral-200 ">
              {style.title}
            </h3>
            <p className="dark:text-neutral-500 ">{style.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerStyles;
