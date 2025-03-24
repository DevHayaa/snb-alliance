"use client";
import { createContext, useState, useContext, ReactNode } from "react";

// Define the context type
type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

// Create Context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider Component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en"); // Default language is English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom Hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
