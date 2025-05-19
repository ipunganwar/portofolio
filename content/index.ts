import { content as buildModernNext } from "./md/build-modern-next";
import { content as optimizeReact } from "./md/optimize-react";
import { content as introductionTailwind } from "./md/introduction-tailwind";
import { content as reactConcept } from "./md/react-concept";

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
  reactConcept,
];

export default articleDetails;
