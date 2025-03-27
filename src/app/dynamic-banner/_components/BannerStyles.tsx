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
    <div className="w-full  bg-gray-100 p-6 sm:rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 ">Banner Styles</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
        {bannerStyles.map((style, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white ">
            <h3 className="text-lg font-semibold ">{style.title}</h3>
            <p>{style.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerStyles;
