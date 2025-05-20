"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/ThemeContext";

interface ArticleContentProps {
  slug: string;
  title?: string;
  date?: string;
  imageUrl?: string;
}

// Use a named function component to fix the display name lint error
function ArticleContent({ slug, title, date, imageUrl }: ArticleContentProps) {
  const { isDarkMode } = useTheme();

  // Dynamically import the MDX component based on the slug
  const MDXContent = dynamic(
    () =>
      import(`@/content/${slug}.mdx`).catch((err) => {
        console.error(`Error loading MDX file: ${err}`);
        // eslint-disable-next-line react/display-name
        return () => (
          <div className="py-10">
            <h2 className="text-2xl font-bold mb-4">Error Loading Content</h2>
            <p>The article content could not be loaded.</p>
          </div>
        );
      }),
    {
      loading: () => (
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6 mb-6"></div>
        </div>
      ),
      ssr: false, // Disable server-side rendering for MDX
    }
  );

  return (
    <div className="max-w-4xl mx-auto">
      {title && (
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          {date && (
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } mb-6`}
            >
              {date}
            </p>
          )}
          {imageUrl && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}
        </div>
      )}

      <article
        className={`prose max-w-none ${isDarkMode ? "prose-invert" : ""}`}
      >
        <MDXContent />
      </article>
    </div>
  );
}

export default ArticleContent;
