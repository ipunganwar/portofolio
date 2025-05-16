"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define the article data structure
interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  slug: string;
  content: string;
}

// Sample articles data (you can replace with your own)
const articles: Article[] = [
  {
    id: "1",
    title: "How to Build a Modern Portfolio with Next.js",
    summary:
      "Learn the best practices for creating a professional portfolio using Next.js and Tailwind CSS.",
    date: "May 14, 2025",
    imageUrl: "/assets/article-1.jpg",
    slug: "build-portfolio-nextjs",
    content: `
# How to Build a Modern Portfolio with Next.js

Creating a professional portfolio is essential for showcasing your work and skills to potential employers or clients. Next.js provides an excellent framework for building such portfolios due to its performance, SEO capabilities, and developer experience.

## Why Choose Next.js for Your Portfolio?

Next.js offers several advantages:

- **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)** for optimal performance
- **Automatic code splitting** for faster page loads
- **Built-in image optimization** with the Image component
- **File-based routing** that makes navigation structure intuitive
- **API routes** for backend functionality without needing a separate server

## Getting Started

First, create a new Next.js project:

\`\`\`bash
npx create-next-app@latest my-portfolio
cd my-portfolio
\`\`\`

## Adding Essential Components

Your portfolio should include these key sections:

1. **Header/Hero Section**: Make a strong first impression
2. **About Me**: Share your background and skills
3. **Projects**: Showcase your best work
4. **Contact Information**: Make it easy for people to reach you

## Styling Your Portfolio

Tailwind CSS is an excellent choice for styling your portfolio:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## Deployment

Deploy your portfolio to Vercel for the best Next.js hosting experience:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Conclusion

Building a portfolio with Next.js allows you to create a fast, SEO-friendly site that effectively showcases your work. The combination of Next.js and Tailwind CSS provides the perfect balance of performance and design flexibility.
    `,
  },
  {
    id: "2",
    title: "Optimizing React Performance",
    summary:
      "Discover techniques to improve your React application's performance and user experience.",
    date: "May 10, 2025",
    imageUrl: "/assets/article-2.jpg",
    slug: "optimizing-react-performance",
    content: `
# Optimizing React Performance

React applications can sometimes suffer from performance issues, especially as they grow in complexity. This article explores various techniques to optimize your React applications for better user experience.

## Common Performance Issues in React

- Unnecessary re-renders
- Large bundle sizes
- Unoptimized images
- Inefficient state management

## Using React.memo for Component Memoization

\`\`\`jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
\`\`\`

React.memo is a higher-order component that memoizes your component, preventing unnecessary re-renders when props haven't changed.

## Code Splitting with React.lazy

\`\`\`jsx
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </React.Suspense>
  );
}
\`\`\`

This technique allows you to load components only when they're needed, reducing the initial load time of your application.

## Virtualization for Long Lists

When rendering long lists, consider using virtualization libraries like react-window or react-virtualized to only render items that are currently visible in the viewport.

## Conclusion

By implementing these optimization techniques, you can significantly improve the performance of your React applications, leading to better user experiences and potentially higher conversion rates.
    `,
  },
  {
    id: "3",
    title: "Introduction to Tailwind CSS",
    summary:
      "A beginner's guide to using Tailwind CSS for rapid UI development.",
    date: "May 5, 2025",
    imageUrl: "/assets/article-3.jpg",
    slug: "intro-tailwind-css",
    content: `
# Introduction to Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. Unlike other CSS frameworks that provide pre-designed components, Tailwind gives you low-level utility classes that let you build completely custom designs.

## Getting Started with Tailwind

Install Tailwind CSS via npm:

\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

Configure your template paths in tailwind.config.js:

\`\`\`js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## Basic Usage

Tailwind allows you to style elements directly in your HTML:

\`\`\`html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div>
    <div class="text-xl font-medium text-black">Tailwind CSS</div>
    <p class="text-gray-500">The utility-first CSS framework</p>
  </div>
</div>
\`\`\`

## Responsive Design

Tailwind makes responsive design simple with built-in breakpoint prefixes:

\`\`\`html
<div class="text-center sm:text-left">
  <!-- This will be centered on mobile, but left-aligned on screens 640px and wider -->
</div>
\`\`\`

## Customization

Tailwind is highly customizable through the tailwind.config.js file:

\`\`\`js
module.exports = {
  theme: {
    colors: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }
  }
}
\`\`\`

## Conclusion

Tailwind CSS provides a different approach to styling that can significantly speed up your development process once you're familiar with its utility classes. Its flexibility and customization options make it suitable for projects of any size.
    `,
  },
];

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { slug } = params;

  // Find the article with the matching slug
  const article = articles.find((article) => article.slug === slug);

  // If article not found, return 404
  if (!article) {
    notFound();
  }

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

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
