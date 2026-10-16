"use client";

import Articles from "@/components/Articles";
import { useTheme } from "@/context/ThemeContext";

export default function ArticlesPage() {
  const { isDarkMode } = useTheme();

  return (
    <div className="pt-24">
      <Articles isDarkMode={isDarkMode} />
    </div>
  );
}
