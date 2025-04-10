import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "@/app/_components/Banner"; // adjust path if needed
import "@testing-library/jest-dom";

// Mock Next.js Image since it causes issues in Jest
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || "mocked image"} />;
  },
}));

describe("Banner component", () => {
  const props = {
    title: "Test Title",
    description: "Test Description",
    image: "https://example.com/test-image.jpg",
    bgColor: "#000000",
  };

  it("renders Minimal banner style correctly", () => {
    render(<Banner {...props} bannerStyle="minimal" />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByAltText("Banner")).toBeInTheDocument();
  });

  it("renders Modern banner style with image in first box", () => {
    render(<Banner {...props} bannerStyle="modern" />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByAltText("Banner")).toBeInTheDocument();
  });

  it("renders Retro banner style correctly", () => {
    render(<Banner {...props} bannerStyle="retro" />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByAltText("Banner")).toBeInTheDocument();
  });

  it("does not render if bannerStyle is unknown", () => {
    const { container } = render(<Banner {...props} bannerStyle="unknown" />);
    expect(container.firstChild?.textContent).toBe("");
  });

  it("renders without image", () => {
    render(<Banner {...props} image={null} bannerStyle="minimal" />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.queryByAltText("Banner")).not.toBeInTheDocument();
  });
});
