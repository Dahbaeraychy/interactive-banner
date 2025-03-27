// components/Banner.tsx
import Image from "next/image";
import React from "react";

interface BannerProps {
  title: string;
  description: string;
  image?: string | null;
  bgColor: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  image,
  bgColor,
}) => {
  return (
    <div
      className="w-full max-w-[1200px] min-h-[24rem] relative grid md:grid-cols-2 p-10 "
      style={{ backgroundColor: bgColor }}
    >
      <div className="h-full flex flex-col justify-center space-y-2 ">
        <h1 className="text-4xl font-bold dark:text-neutral-200 ">{title}</h1>
        <p className="text-lg break-words pr-6 lg:pr-10 text-justify dark:text-neutral-400 ">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={image || "/mk.svg"}
          alt="Banner"
          width={500}
          height={500}
          className="absolute top-2 right-10 max-h-[250px] max-w-[500px] object-contain z-20"
        />
      </div>
    </div>
  );
};

export default Banner;
