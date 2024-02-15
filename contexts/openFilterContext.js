"use client";

import { createContext, useState } from "react";

export const OpenFilterContext = createContext();

export const OpenFilterProvider = ({ children }) => {

  const [open, setOpen] = useState(false);

  return (
    <OpenFilterContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenFilterContext.Provider>
  );
};