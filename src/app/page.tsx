"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoPencil } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import Form from "./_components/Form";

const Page = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative h-screen w-screen font-sans">
      <Image
        src="/hero-image.jpg"
        alt="Hero Image"
        fill
        objectFit="cover"
        priority
      />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 min-h-[60vh] max-w-lg w-full rounded-3xl bg-black/30 text-white backdrop-blur-md border border-white/20 shadow-2xl p-6 lg:p-10 ">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-[40px] font-[900] ">Kendall Tamara</h1>

            <button className="size-12 flex items-center justify-center text-2xl text-white bg-black rounded-full p-2 ">
              <IoPencil className="" />
            </button>
          </div>

          <div className="space-y-4 ">
            <p className="text-[19px] text-justify font-poppins">
              I am a software engineer with a passion for building web
              applications. I have experience in various technologies and
              frameworks, and I am always eager to learn new skills and improve
              my craft. I enjoy working on challenging projects and
              collaborating with others to create innovative solutions. My goal
              is to create software that makes a positive impact on
              people&apos;s lives and helps them achieve their goals. Together
              we can build amazing things!
            </p>

            <button
              onClick={() => setOpen(true)}
              className="bg-black text-white py-3 px-6 flex items-center space-x-2 rounded-lg "
            >
              <span className="">Edit Profile</span>
              {/* <IoPencil size={16} className=" " /> */}
            </button>
          </div>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          {/* <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-dark-200 transition-colors">
            <Menu className="w-6 h-6 dark:text-neutral-400 " />
          </button> */}
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[24rem] p-6 pt-8 bg-white dark:bg-black dark:text-neutral-400 border-neutral-900 "
        >
          <SheetHeader className="text-2xl font-[500] mb-2 px-0">
            <SheetTitle>Edit Profile</SheetTitle>
          </SheetHeader>
          <SheetDescription>Optional description</SheetDescription>

          <SheetDescription>Optional description</SheetDescription>

          <Form />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Page;
