const HASHNODE_GQL = "https://gql.hashnode.com";
const HOST = process.env.HASHNODE_HOST || "marcosv4.cloud";

async function fetchGQL(query: string, variables?: Record<string, unknown>) {
  const res = await fetch(HASHNODE_GQL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 300 },
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

export async function getPublication() {
  const query = `
    query Publication($host: String!) {
      publication(host: $host) {
        id
        title
        displayTitle
        description { html }
        posts(first: 20) {
          edges {
            node {
              id
              title
              brief
              slug
              publishedAt
              coverImage { url }
              tags { name slug }
              author { name profilePicture }
            }
          }
          pageInfo { hasNextPage endCursor }
          totalDocuments
        }
      }
    }
  `;
  const data = await fetchGQL(query, { host: HOST });
  return data.publication;
}

export async function getPost(slug: string) {
  const query = `
    query Post($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          id
          title
          brief
          slug
          publishedAt
          coverImage { url }
          content { markdown html }
          tags { name slug }
          author { name profilePicture }
        }
      }
    }
  `;
  const data = await fetchGQL(query, { host: HOST, slug });
  return data.publication?.post || null;
}

export async function getAllPostSlugs() {
  const query = `
    query Slugs($host: String!) {
      publication(host: $host) {
        posts(first: 100) {
          edges { node { slug } }
        }
      }
    }
  `;
  const data = await fetchGQL(query, { host: HOST });
  return data.publication?.posts.edges.map((e: { node: { slug: string } }) => e.node.slug) || [];
}
