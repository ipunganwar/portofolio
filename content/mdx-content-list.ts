// Define the MDX article interface
export interface MdxArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  slug: string;
}

// Simple list of available MDX articles
export const mdxArticles: MdxArticle[] = [
  {
    id: "mdx-1",
    title: "Welcome",
    summary: "Welcome to our portfolio site.",
    date: "May 19, 2025",
    imageUrl: "/assets/welcome.jpg",
    slug: "welcome",
  },
  {
    id: "mdx-2",
    title: "How to Build a Portfolio with Next.js",
    summary:
      "Learn how to create a modern portfolio using Next.js and Tailwind CSS.",
    date: "May 19, 2025",
    imageUrl: "/assets/build-portfolio-nextjs.jpg",
    slug: "build-portfolio-nextjs",
  },
];

// Manually defined articles (as a fallback)
export const staticArticles: MdxArticle[] = [
  {
    id: "mdx-1",
    title: "Welcome",
    summary: "Welcome to our portfolio site.",
    date: "May 19, 2025",
    imageUrl: "/assets/welcome.jpg",
    slug: "welcome",
  },
  {
    id: "mdx-2",
    title: "How to Build a Portfolio with Next.js",
    summary:
      "Learn how to create a modern portfolio using Next.js and Tailwind CSS.",
    date: "May 19, 2025",
    imageUrl: "/assets/build-portfolio-nextjs.jpg",
    slug: "build-portfolio-nextjs",
  },
];

// Export a function to get the article list
export default function getArticleList(): MdxArticle[] {
  // Combine MDX articles with static articles
  // MDX articles take precedence if they exist
  return mdxArticles.length > 0 ? mdxArticles : staticArticles;
}
