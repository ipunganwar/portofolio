import { content as buildModernNext } from "./build-modern-next";
import { content as optimizeReact } from "./optimize-react";
import { content as introductionTailwind } from "./introduction-tailwind";

interface ArticleDetails {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  slug: string;
  content: string;
}

const articleDetails: ArticleDetails[] = [
  buildModernNext,
  optimizeReact,
  introductionTailwind,
];

export default articleDetails;
