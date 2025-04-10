// CustomizeForm.test.tsx
import { render, screen } from "@testing-library/react";
import CustomizeForm, { FormData } from "@/app/_components/CustomizeForm";
import userEvent from "@testing-library/user-event";

const mockUpdate = jest.fn();

const defaultValues: FormData = {
  title: "",
  description: "",
  image: null,
  bgColor: "#000000",
};

describe("CustomizeForm", () => {
  it("renders the form with all fields", () => {
    render(
      <CustomizeForm defaultValues={defaultValues} onUpdate={mockUpdate} />
    );

    expect(screen.getByLabelText(/Banner Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Banner Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Background Colour/i)).toBeInTheDocument();
  });

  it("validates required fields", async () => {
    render(
      <CustomizeForm defaultValues={defaultValues} onUpdate={mockUpdate} />
    );

    const input = screen.getByLabelText(/Banner Title/i);
    await userEvent.clear(input);
    await userEvent.type(input, "A");

    // Move focus to trigger validation
    await userEvent.tab();

    expect(await screen.findByText(/Title is too short/i)).toBeInTheDocument();
  });
});
