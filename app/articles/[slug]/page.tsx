"use client";

import React, { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import articleDetails from "@/content";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ArticlePage({ params }: ArticlePageProps) {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  // Find the article with the matching slug
  const article = articleDetails.find((article) => article.slug === slug);

  // If article not found, return 404
  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isInArticle={true}
      />
      <div
        className={`pt-24 pb-16 px-4 md:px-8 lg:px-16 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <Link
            href="/articles"
            className="inline-flex items-center mb-6 text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Articles
          </Link>

          <div className="mb-8">
            <p className="text-sm opacity-75 mb-2">{article.date}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {article.title}
            </h1>
            <p className="text-lg opacity-75">{article.summary}</p>
          </div>

          <div className="h-64 md:h-80 w-full relative mb-8">
            {/* Replace with your actual images */}
            <div
              className={`w-full h-full ${
                isDarkMode ? "bg-gray-800" : "bg-gray-200"
              } flex items-center justify-center rounded-lg`}
            >
              <p className="text-center p-4">Article Featured Image</p>
            </div>
          </div>

          <div className="prose max-w-none prose-lg">
            {/* Render markdown content */}
            <div
              dangerouslySetInnerHTML={{
                __html: article.content
                  .replace(
                    /^# (.*$)/gim,
                    '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>'
                  )
                  .replace(
                    /^## (.*$)/gim,
                    '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>'
                  )
                  .replace(
                    /^### (.*$)/gim,
                    '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>'
                  )
                  .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
                  .replace(/\*(.*)\*/gim, "<em>$1</em>")
                  .replace(/\n/gim, "<br />")
                  .replace(/```(.+?)```/g, (match, p1) => {
                    const code = p1
                      .trim()
                      .replace(/^(bash|jsx|js|html)/m, "")
                      .trim();
                    return `<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>${code}</code></pre>`;
                  }),
              }}
            />
          </div>
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
