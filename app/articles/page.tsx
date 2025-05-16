"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Articles from "@/components/Articles";
import { useTheme } from "@/context/ThemeContext";

export default function ArticlesPage() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isInArticle={true}
      />
      <div className="pt-24">
        <Articles isDarkMode={isDarkMode} />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
