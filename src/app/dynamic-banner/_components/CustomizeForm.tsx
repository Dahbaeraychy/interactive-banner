import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full  bg-gray-100 p-6 sm:rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4 ">Customize Banner</h2>

      <label className="block font-medium text-base pb-0.5 text-neutral-600 ">
        Banner Title
      </label>
      <input
        {...register("title")}
        className="w-full border border-gray-300 rounded-md p-2 mb-4 h-12 "
        placeholder="Enter title"
      />

      <label className="block font-medium text-base pb-0.5 text-neutral-600 ">
        Banner Description
      </label>
      <textarea
        {...register("description")}
        className="w-full border border-gray-300 rounded-md p-2 mb-1 text-sm min-h-[80px] resize-y"
      />
      <p className="text-right text-xs">
        {description?.split(" ").length}/20 words
      </p>

      <label className="block font-medium text-base pb-0.5 text-neutral-600  mt-4">
        Banner Image
      </label>
      <input
        type="file"
        accept="image/*"
        {...register("image")}
        className="w-full border-2 border-dotted border-black p-2 rounded-md text-sm"
      />

      <label className="block font-medium text-base pb-0.5 text-neutral-600  mt-4">
        Background Colour
      </label>
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-56">
        <Controller
          control={control}
          name="bgColor"
          render={({ field }) => (
            <>
              <input
                type="color"
                {...field}
                className="w-16 h-10 border-none cursor-pointer"
              />
              <input
                type="text"
                value={field.value}
                readOnly
                className="flex-1 text-center text-sm p-2"
              />
            </>
          )}
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-black h-14 text-lg font-semibold text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Update
      </button>
    </form>
  );
};

export default CustomizeForm;
