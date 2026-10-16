import type { ComponentType } from "react";
import Welcome from "./welcome.mdx";
import BuildPortfolioNextjs from "./build-portfolio-nextjs.mdx";

export const articleContent: Record<string, ComponentType> = {
  welcome: Welcome,
  "build-portfolio-nextjs": BuildPortfolioNextjs,
};
