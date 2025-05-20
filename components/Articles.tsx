"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import getArticleList, { MdxArticle, mdxArticles } from "@/content/mdx-content-list";

interface ArticlesProps {
  isDarkMode?: boolean;
}

// Use a named function component to fix the display name lint error
function Articles({ isDarkMode }: ArticlesProps) {
  // State to track which images failed to load
  const [imgError, setImgError] = useState<Record<string, boolean>>({});
  const [articles, setArticles] = useState<MdxArticle[]>(mdxArticles);

  // Load articles on the client side
  useEffect(() => {
    // Get articles from our utility function
    const articleList = getArticleList();
    setArticles(articleList);
  }, []);

  return (
    <section id="articles" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Articles
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Sharing my thoughts and knowledge about web development, design, and
          technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link href={`/articles/${article.slug}`} key={article.id}>
              <div
                className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <div className="h-48 relative">
                  {imgError[article.id] ? (
                    // Fallback placeholder when image fails to load
                    <div
                      className={`w-full h-full ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-200"
                      } flex items-center justify-center`}
                    >
                      <p className="text-sm text-center p-4">
                        Image Not Available
                      </p>
                    </div>
                  ) : (
                    // Try to load the image
                    <Image
                      src={article.imageUrl || "/images/placeholder.jpg"}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      onError={() => {
                        setImgError((prev) => ({
                          ...prev,
                          [article.id]: true,
                        }));
                      }}
                    />
                  )}
                </div>
                <div className="p-6">
                  <p className="text-sm opacity-75 mb-2">{article.date}</p>
                  <h3 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="opacity-75">{article.summary}</p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm font-medium">Read More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
