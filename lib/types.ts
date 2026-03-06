export interface Project {
  name: string;
  url: string;
  description: string;
  logo: string;
  revenueSource: "paddle" | "revenuecat" | "none";
  revenueKey: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}
