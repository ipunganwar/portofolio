import { Suspense } from "react";
import { mdxArticles } from "@/content/mdx-content-list";
import ArticleContent from "@/components/ArticleContent";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// This is a server component that fetches article metadata
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  // Find the article metadata from our MDX articles list
  const article = mdxArticles.find((a: { slug: string }) => a.slug === slug);

  return (
    <>
      {/* ArticleContent is a client component that will handle the dynamic MDX import */}
      <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
        <Suspense
          fallback={
            <div className="max-w-4xl mx-auto py-10">Loading article...</div>
          }
        >
          {article ? (
            <ArticleContent
              slug={slug}
              title={article.title}
              date={article.date}
              imageUrl={article.imageUrl}
            />
          ) : (
            <div className="container mx-auto py-10 px-4">
              <h1 className="text-3xl font-bold mb-6">Article not found</h1>
              <p>
                Sorry, the article you&apos;re looking for could not be loaded.
              </p>
            </div>
          )}
        </Suspense>
      </div>
    </>
  );
}

export function generateStaticParams() {
  // Generate static params for all MDX articles
  return mdxArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Allow dynamic params for articles that might be added later
export const dynamicParams = true;
