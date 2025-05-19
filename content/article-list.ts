// Define the article data structure
interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  slug: string;
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
  },
  {
    id: "2",
    title: "Optimizing React Performance",
    summary:
      "Discover techniques to improve your React application's performance and user experience.",
    date: "May 10, 2025",
    imageUrl: "/assets/article-2.jpg",
    slug: "optimizing-react-performance",
  },
  {
    id: "3",
    title: "Introduction to Tailwind CSS",
    summary:
      "A beginner's guide to using Tailwind CSS for rapid UI development.",
    date: "May 5, 2025",
    imageUrl: "/assets/article-3.jpg",
    slug: "intro-tailwind-css",
  },
  {
    id: "4",
    title: "All React Concepts Explained",
    summary:
      "A comprehensive guide that walks through 20 key React concepts — from JSX and props to portals and error boundaries — in a single, readable article.",
    date: "May 14, 2025",
    imageUrl: "/articles/react-concept.webp",
    slug: "react-concept",
  },
];

export default articles;
