import React from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<{
    title: string;
    description: string;
    bgColor: string;
    image?: File;
  }>;
};

const FileUpload = ({ register }: Props) => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-dark-200 hover:bg-gray-100 dark:border-dark-300 dark:hover:border-dark-400 dark:hover:bg-dark-300"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-10 h-10 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF{" "}
              <span className="font-[600] ">(MAX. 5MB)</span>
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            accept="image/*"
            {...register("image")}
            className="hidden"
          />
        </label>
      </div>
    </>
  );
};

export default FileUpload;
