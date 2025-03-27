"use client";

import React, { useState } from "react";
import Banner from "./_components/Banner";
import CustomizeForm, { FormData } from "./_components/CustomizeForm";
import BannerStyles from "./_components/BannerStyles";

const initialData: FormData = {
  title: "My Favorite Game - Mortal Kombat.",
  description:
    "It’s in our blood, Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!",
  image: null,
  bgColor: "#283E68",
};

export default function BannerPage() {
  const [formData, setFormData] = useState<FormData>(initialData);

  return (
    <main className="max-w-[1200px] mx-auto w-full space-y-10 font-sans sm:p-10 ">
      <Banner {...formData} />
      <div className="grid grid-cols-2 gap-6 lg:gap-10 ">
        <CustomizeForm defaultValues={formData} onUpdate={setFormData} />
        <BannerStyles />
      </div>
    </main>
  );
}
