import type { Metadata } from "next";
import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/ArticleContent";
import { articleContent } from "@/content/article-content";
import { getArticleBySlug, mdxArticles } from "@/content/mdx-content-list";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return mdxArticles.map((article) => ({
    slug: article.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const Content: ComponentType | undefined = articleContent[slug];

  if (!article || !Content) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <ArticleContent
        title={article.title}
        date={article.date}
        imageUrl={article.imageUrl}
      >
        <Content />
      </ArticleContent>
    </div>
  );
}
