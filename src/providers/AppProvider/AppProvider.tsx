"use client";
import React from "react";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <>{children}</>
    </ThemeProvider>
  );
};

export default AppProvider;
