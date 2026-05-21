export interface Post {
  id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage: { url: string } | null;
  publishedAt: string;
  content: { markdown: string; html: string };
  tags: { name: string; slug: string }[];
  author: { name: string; profilePicture: string | null };
}

export interface Publication {
  id: string;
  title: string;
  displayTitle: string | null;
  description: { html: string } | null;
  posts: {
    edges: { node: Post }[];
    pageInfo: { hasNextPage: boolean; endCursor: string | null };
    totalDocuments: number;
  };
}
