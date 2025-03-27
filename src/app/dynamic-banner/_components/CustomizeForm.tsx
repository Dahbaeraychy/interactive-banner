import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

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

const CustomizeForm: React.FC<CustomizeFormProps> = ({
  defaultValues,
  onUpdate,
}) => {
  const { register, handleSubmit, control, watch } = useForm<FormData>({
    mode: "onChange",
    defaultValues,
    resolver: zodResolver(schema),
  });

  const description = watch("description");

  const onSubmit = (data: FormData) => {
    const file = data.image?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        onUpdate({ ...data, image: reader.result as string });
      reader.readAsDataURL(file);
    } else {
      onUpdate({ ...data, image: null });
    }
  };

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

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4 dark:text-neutral-200 ">
        Customize Banner
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pr-3 grid grid-cols-2 gap-6 "
      >
        <div className="space-y-4 ">
          <div className="">
            <Label htmlFor="title" className="">
              Title
            </Label>
            <Input
              {...register("title")}
              className="w-full rounded-md p-2  h-12 outline-none dark:border-dark-300 dark:text-neutral-300 "
              placeholder="Enter title"
            />
          </div>

          <div className="">
            <Label>Banner Description</Label>
            <textarea
              {...register("description")}
              className="w-full border border-gray-300 dark:border-dark-400 rounded-md p-2.5 text-base min-h-[200px] resize-y dark:text-neutral-400"
            />
            <p className="text-right text-xs dark:text-neutral-400 ">
              {description?.split(" ").length}/20 words
            </p>
          </div>
        </div>

        <div className="space-y-4 ">
          <div className="">
            <Label>Banner Image</Label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              className="w-full border-2 border-dotted border-black dark:border-dark-400 dark:text-neutral-300 p-2 rounded-md text-sm file:h-9 "
            />
          </div>

          <div className="">
            <Label>Background Colour</Label>
            <div className="flex items-center border dark:border-dark-300 h-12 rounded-md overflow-hidden w-full ">
              <Controller
                control={control}
                name="bgColor"
                render={({ field }) => (
                  <>
                    <input
                      type="color"
                      {...field}
                      className="w-12 h-12 rounded-lg border-none cursor-pointer"
                    />
                    <input
                      type="text"
                      value={field.value}
                      readOnly
                      className="flex-1 text-start text-base p-2 h-12 dark:text-neutral-300 "
                    />
                  </>
                )}
              />
            </div>
          </div>
        </div>

        {/* <button
        type="submit"
        className="mt-6 w-full bg-black h-14 text-lg font-semibold text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Update
      </button> */}
      </form>
    </div>
  );
};

export default CustomizeForm;
