import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BannerStyles from "@/app/_components/BannerStyles";

describe("BannerStyles", () => {
  const mockOnClick = jest.fn();
  const mockOnChangeBannerStyle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all banner styles", () => {
    render(
      <BannerStyles
        bannerStyle="modern"
        onClick={mockOnClick}
        onChangeBannerStyle={mockOnChangeBannerStyle}
      />
    );

    expect(screen.getByText("Retro")).toBeInTheDocument();
    expect(screen.getByText("Modern")).toBeInTheDocument();
    expect(screen.getByText("Minimal")).toBeInTheDocument();
  });

  it("calls onChangeBannerStyle with correct style on click", () => {
    render(
      <BannerStyles
        bannerStyle=""
        onClick={mockOnClick}
        onChangeBannerStyle={mockOnChangeBannerStyle}
      />
    );

    const retroButton = screen.getByText("Retro");
    fireEvent.click(retroButton);

    expect(mockOnChangeBannerStyle).toHaveBeenCalledWith("retro");
  });

  it("calls onClick when download button is clicked", () => {
    render(
      <BannerStyles
        bannerStyle=""
        onClick={mockOnClick}
        onChangeBannerStyle={mockOnChangeBannerStyle}
      />
    );

    const downloadBtn = screen.getByRole("button", {
      name: /download banner/i,
    });

    fireEvent.click(downloadBtn);

    expect(mockOnClick).toHaveBeenCalled();
  });

  it("applies selected style class when active", () => {
    render(
      <BannerStyles
        bannerStyle="minimal"
        onClick={mockOnClick}
        onChangeBannerStyle={mockOnChangeBannerStyle}
      />
    );

    const minimalButton = screen.getByText("Minimal").closest("button");
    expect(minimalButton).toHaveClass("bg-neutral-200/70");
  });
});
