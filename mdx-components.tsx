import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-4 mb-2">{children}</h3>,
    p: ({ children }) => <p className="my-4">{children}</p>,
    a: ({ href, children }) => <Link href={href as string} className="text-blue-500 hover:underline">{children}</Link>,
    ul: ({ children }) => <ul className="list-disc pl-6 my-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 my-4">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    img: ({ src, alt }) => <div className="my-6"><Image src={src as string} alt={alt as string} width={800} height={450} className="rounded-lg" /></div>,
    // Add custom components
    ...components,
  };
}
