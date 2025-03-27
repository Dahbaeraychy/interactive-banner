import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";

// Define the form data interface
interface FormData {
  imageType: "upload" | "link";
  image: FileList | string;
  description: string;
}

// Define the validation schema with strong typing
const schema: yup.ObjectSchema<FormData> = yup.object({
  imageType: yup
    .mixed<"upload" | "link">()
    .oneOf(["upload", "link"], "Invalid image type")
    .required("Image type is required"),
  image: yup
    .mixed<FileList | string>()
    .test("fileSize", "File size is too large", (value) => {
      if (!value) return false;
      if (typeof value === "string") return true;
      if (value instanceof FileList && value.length > 0) {
        return value[0].size <= 2 * 1024 * 1024; // 2MB
      }
      return false;
    })
    .required("Image is required"),
  description: yup.string().required("Description is required"),
});

const Form: React.FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      imageType: "upload",
      image: "",
      description: "",
    },
  });

  const imageType = watch("imageType");

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 font-sans "
      aria-label="Image form"
    >
      {/* Image Type Switch */}
      <Controller
        control={control}
        name="imageType"
        render={({ field }) => (
          <div role="radiogroup" aria-labelledby="image-type-label">
            <label id="image-type-label" className="block font-semibold">
              Image Type:
            </label>
            <div className="flex gap-2 mt-1">
              <button
                type="button"
                onClick={() => field.onChange("upload")}
                className={`px-4 py-2 rounded border ${
                  field.value === "upload" ? "bg-black text-white" : "bg-white"
                }`}
                aria-pressed={field.value === "upload"}
              >
                Upload
              </button>
              <button
                type="button"
                onClick={() => field.onChange("link")}
                className={`px-4 py-2 rounded border ${
                  field.value === "link" ? "bg-black text-white" : "bg-white"
                }`}
                aria-pressed={field.value === "link"}
              >
                Link
              </button>
            </div>
            {errors.imageType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.imageType.message}
              </p>
            )}
          </div>
        )}
      />

      {/* Image Input */}
      <Controller
        control={control}
        name="image"
        render={({ field }) =>
          imageType === "upload" ? (
            <div>
              <label htmlFor="image-upload" className="block font-semibold">
                Upload Image
              </label>
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={(e) => field.onChange(e.target.files)}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
                aria-describedby="image-upload-error"
                defaultValue={
                  typeof field.value === "string" ? field.value : ""
                }
                className="h-12 "
              />
              {errors.image && (
                <p
                  id="image-upload-error"
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.image.message}
                </p>
              )}
            </div>
          ) : (
            <div>
              <label htmlFor="image-link" className="block font-semibold">
                Image URL
              </label>
              <Input
                id="image-link"
                type="text"
                placeholder="Enter image URL"
                value={typeof field.value === "string" ? field.value : ""}
                onChange={(e) => field.onChange(e.target.value || "")}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
                aria-describedby="image-link-error"
                defaultValue={
                  typeof field.value === "string" ? field.value : ""
                }
                className="h-12 "
              />
              {errors.image && (
                <p id="image-link-error" className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>
          )
        }
      />

      {/* Description */}
      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <div>
            <label htmlFor="description" className="block font-semibold">
              Description
            </label>
            <textarea
              id="description"
              {...field}
              className="w-full p-2 border rounded"
              aria-describedby="description-error"
              placeholder="Enter description"
            />
            {errors.description && (
              <p id="description-error" className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
        )}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-black text-white h-14 text-[18px] font-medium py-2 rounded hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
