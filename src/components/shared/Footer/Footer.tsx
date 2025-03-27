"use client";

import React from "react";
import { COMPANY_NAME, COMPANY_SOCIALS } from "@/constants/company";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import BrandLogo from "../BrandLogo/BrandLogo";
import { Body3, Body4, Heading4, Heading5 } from "../Typography/Typography";

const Footer = () => {
  const socialIcons = [
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
    },
    {
      name: "Twitter",
      icon: <FaXTwitter size={24} />,
    },
  ];

  return (
    <>
      <footer className="">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-8 sm:pt-20 lg:pt-32">
          <div className="md:grid grid-cols-2 gap-8 space-y-10 md:space-y-0 border-t border-gray-900/10 dark:border-dark-300 ">
            <div className="py-6 space-y-3  md:pr-10 ">
              <div className="space-y-1.5">
                <BrandLogo size={140} />
                <Heading4
                  text={COMPANY_NAME}
                  className="text-black dark:text-neutral-200 "
                />
              </div>

              <Body3
                text="AsteroidSB is a streetwear brand inspired by cosmic energy and bold self-expression. We create trend-setting apparel for those who dare to stand out. Elevate your style. Defy gravity. With full force."
                className="max-w-md dark:text-neutral-400 "
              />
            </div>

            <div className="flex items-center">
              <div className=" ">
                <Heading5
                  text="Subscribe to our newsletter"
                  className="mt-1 dark:text-neutral-300 "
                />
                <Body4
                  text="The latest news, articles, and resources, sent to your inbox weekly."
                  className="dark:text-neutral-500 text-[15px] "
                />

                <form
                  className="mt-6 sm:flex sm:max-w-md"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="w-full min-w-0 rounded-md border border-input dark:border-dark-300 h-12 bg-white dark:bg-dark-300 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-primary sm:w-64 sm:text-sm/6 xl:w-full"
                  />

                  <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md bg-primary px-5 py-2 h-12 text-md font-semibold text-white shadow-xs hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-12  border-t border-gray-900/10 dark:border-dark-300 pt-8 sm:mt-20 md:flex md:items-center md:justify-between">
            <div className="flex gap-x-5 md:order-2">
              {COMPANY_SOCIALS.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="text-gray-600 dark:text-neutral-300 hover:text-primary "
                >
                  <span className="sr-only">{item.name}</span>
                  {socialIcons.find((icon) => icon.name === item.name)?.icon}
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-600 dark:text-neutral-400 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} {COMPANY_NAME} All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
