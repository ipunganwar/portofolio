import Image from "next/image";
import type { ReactNode } from "react";

interface ArticleContentProps {
  title: string;
  date?: string;
  imageUrl?: string;
  children: ReactNode;
}

function ArticleImage({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <p className="text-sm text-center p-4 text-gray-600 dark:text-gray-300">
          Image Not Available
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 896px) 100vw, 896px"
      className="object-cover"
    />
  );
}

function ArticleContent({
  title,
  date,
  imageUrl,
  children,
}: ArticleContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        {date ? (
          <p className="text-gray-500 dark:text-gray-400 mb-6">{date}</p>
        ) : null}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <ArticleImage src={imageUrl} alt={title} />
        </div>
      </div>

      <article className="max-w-none">{children}</article>
    </div>
  );
}

export default ArticleContent;
