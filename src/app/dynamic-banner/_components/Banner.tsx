import Image from "next/image";
import React, { forwardRef } from "react";

interface BannerProps {
  title: string;
  description: string;
  image?: string | null;
  bgColor: string;
}

const Banner = forwardRef<HTMLDivElement, BannerProps>(
  ({ title, description, image, bgColor }, ref) => {
    return (
      <div
        ref={ref}
        className="w-full max-w-[1200px] min-h-[24rem] relative grid md:grid-cols-2 p-10 "
        style={{ backgroundColor: bgColor }}
      >
        <div className="h-full flex flex-col justify-center space-y-2 ">
          <h1 className="text-4xl font-bold dark:text-neutral-200 ">{title}</h1>
          <p className="text-lg break-words pr-6 lg:pr-10 text-justify dark:text-neutral-400 ">
            {description}
          </p>
        </div>

        <div className="flex justify-center items-center relative ">
          {image && (
            <Image
              src={image}
              alt="Banner"
              width={500}
              height={500}
              className="max-h-[250px] max-w-[500px] object-contain z-20"
            />
          )}
        </div>
      </div>
    );
  }
);

Banner.displayName = "Banner";

export default Banner;
