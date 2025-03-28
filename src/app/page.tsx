"use client";

import React, { useState } from "react";
import Banner from "./dynamic-banner/_components/Banner";
import CustomizeForm, {
  FormData,
} from "./dynamic-banner/_components/CustomizeForm";
import BannerStyles from "./dynamic-banner/_components/BannerStyles";

const initialData: FormData = {
  title: "My Favorite Game - Mortal Kombat.",
  description:
    "It’s in our blood, Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!",
  image: null,
  bgColor: "#222222",
};

export default function BannerPage() {
  const [formData, setFormData] = useState<FormData>(initialData);

  return (
    <main className="max-w-[1200px] mx-auto w-full space-y-10 font-sans sm:p-10 ">
      <Banner {...formData} />
      <div className="grid lg:grid-cols-3 w-full bg-neutral-100 dark:bg-dark-150 p-6 lg:py-12 divide-x-2 dark:divide-dark-200 ">
        <div className="col-span-2">
          <CustomizeForm defaultValues={formData} onUpdate={setFormData} />
        </div>
        <BannerStyles />
      </div>
    </main>
  );
}
