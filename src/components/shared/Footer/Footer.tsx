"use client";

import React from "react";
import { WEBSITE_NAME, WEBSITE_SOCIALS } from "@/constants/company";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const socialIcons = [
    {
      name: "Linkedin",
      icon: <FaLinkedin size={24} />,
    },
  ];

  return (
    <>
      <footer className="">
        <div className="mx-auto max-w-7xl px-6">
          <div className="border-t border-neutral-300 dark:border-dark-300 py-6 md:flex md:items-center md:justify-between">
            <div className="flex gap-x-5 md:order-2">
              {WEBSITE_SOCIALS.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="text-neutral-500 dark:text-neutral-300 hover:text-black dark:hover:text-white  "
                  target="_blank"
                >
                  <span className="sr-only">{item.name}</span>
                  {socialIcons.find((icon) => icon.name === item.name)?.icon}
                </a>
              ))}
            </div>
            <p className=" text-sm text-neutral-600 dark:text-neutral-400 md:order-1 ">
              &copy; {new Date().getFullYear()} {WEBSITE_NAME}. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
