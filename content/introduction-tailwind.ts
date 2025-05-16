export const content = {
  id: "3",
  title: "Introduction to Tailwind CSS",
  summary: "A beginner's guide to using Tailwind CSS for rapid UI development.",
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
};
