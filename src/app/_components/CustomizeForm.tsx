/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { ColorPicker } from "@/components/ui/color-picker";
import FileUpload from "@/components/shared/FileUpload/FileUpload";

const schema = z.object({
  title: z.string().min(3, "Title is too short"),
  description: z
    .string()
    .max(200, "Too long")
    .transform((val) => val.split(" ").slice(0, 20).join(" ")),
  image: z.any().nullable(),
  bgColor: z.string(),
});

export type FormData = z.infer<typeof schema>;

interface CustomizeFormProps {
  defaultValues: FormData;
  onUpdate: (data: FormData) => void;
}

const Label: React.FC<{
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ htmlFor, children, className }) => (
  <label
    htmlFor={htmlFor}
    className={`block font-medium text-base pb-0.5 text-neutral-600 dark:text-neutral-400 ${className}`}
  >
    {children}
  </label>
);

const CustomizeForm: React.FC<CustomizeFormProps> = ({
  defaultValues,
  onUpdate,
}) => {
  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues,
    resolver: zodResolver(schema),
  });

  const values = useWatch({ control });

  const color = watch("bgColor");

  const buttonRef = React.useRef<HTMLButtonElement>(undefined!);

  useEffect(() => {
    const rawImage = values.image;

    const isFileList = rawImage instanceof FileList;
    const isFile = rawImage instanceof File;

    const file = isFileList ? rawImage[0] : isFile ? rawImage : null;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdate({
          title: values.title || "",
          description: values.description || "",
          bgColor: values.bgColor || "",
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    } else if (
      typeof rawImage === "string" ||
      rawImage === null ||
      rawImage === undefined
    ) {
      // Accept base64 or null
      onUpdate({
        title: values.title || "",
        description: values.description || "",
        bgColor: values.bgColor || "",
        image: rawImage,
      });
    }
  }, [values.title, values.description, values.bgColor, values.image]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 dark:text-neutral-200">
        Customize Banner
      </h2>

      <form className="pr-3 grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Banner Title</Label>
            <Input
              {...register("title")}
              id="title"
              className="w-full rounded-md p-2 h-12 !text-[18px] font-[500] focus:outline-none dark:border-dark-300 dark:text-neutral-300"
              placeholder="Enter title"
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="description">Banner Description</Label>
            <textarea
              {...register("description")}
              id="description"
              className="w-full h-60 border-[1.5px] border-neutral-300 dark:border-dark-400 rounded-md p-2.5 text-base resize-y dark:text-neutral-400 focus-visible:outline-none focus-visible:border-black dark:focus-visible:border-neutral-200  dark:bg-dark-200"
            />
            <p className="text-right text-xs dark:text-neutral-400">
              {values.description?.split(" ").length || 0}/20 words
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="bgColor">Background Colour</Label>
            <div className="flex items-end space-x-3 ">
              <Input
                type="text"
                id="bgColor"
                aria-label="Background Color"
                onFocus={() => buttonRef.current?.click()}
                required
                placeholder="#000000"
                {...register("bgColor")}
                className="h-12 w-full font-[500] !text-[18px] dark:text-neutral-300 dark:border-dark-300 rounded-md p-2 outline-none"
              />

              <ColorPicker
                onChange={(color) => {
                  setValue("bgColor", color, {
                    shouldValidate: true,
                  });
                }}
                buttonRef={buttonRef}
                value={color}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="image">Banner Image</Label>
            <FileUpload register={register} />
          </div>
        </div>

        {/*  */}
      </form>
    </div>
  );
};

export default CustomizeForm;
