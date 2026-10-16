"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isInArticle={true}
      />
      {children}
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
