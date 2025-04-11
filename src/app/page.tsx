"use client";

import React, { useRef, useState } from "react";
import Banner from "./_components/Banner";
import CustomizeForm, { FormData } from "./_components/CustomizeForm";
import BannerStyles from "./_components/BannerStyles";
import { toPng } from "html-to-image";
import Footer from "@/components/shared/Footer/Footer";

const initialData: FormData = {
  title: "Young Black Girl From Africa",
  description:
    "Curiosity started it, creativity fuels it. From 17-year-old app builder to product thinker, I build meaningful, accessible experiences that spark connection, insight, and the occasional “aha.”",
  image: "/hero-image.png",
  bgColor: "#222222",
};

export default function BannerPage() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [selectedBannerStyle, setSelectedBannerStyle] = useState("modern");

  const componentRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!componentRef.current) return;

    try {
      const dataUrl = await toPng(componentRef.current);
      const link = document.createElement("a");
      link.download = "banner.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Error exporting image:", err);
    }
  };

  return (
    <main className="max-w-[1200px] mx-auto w-full space-y-10 font-sans sm:p-10 ">
      <Banner
        {...formData}
        ref={componentRef}
        bannerStyle={selectedBannerStyle}
      />
      <div className="grid lg:grid-cols-3 w-full bg-neutral-50 dark:bg-dark-150 p-6 lg:py-12 divide-x-2 divide-neutral-200 dark:divide-dark-200 rounded-md ">
        <div className="col-span-2">
          <CustomizeForm defaultValues={formData} onUpdate={setFormData} />
        </div>
        <BannerStyles
          onClick={handleDownload}
          bannerStyle={selectedBannerStyle}
          onChangeBannerStyle={(style: string) => {
            setSelectedBannerStyle(style);
          }}
        />
      </div>

      <Footer />
    </main>
  );
}