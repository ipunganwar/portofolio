export const content = {
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
};
