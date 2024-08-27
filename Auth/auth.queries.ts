export const GET_SINGLE_POST: string = `
  query getSinglePost($postSlug: ID!) {
    post(id: $postSlug, idType: SLUG) {
      id
      content(format: RENDERED)
      modified
      slug
      title(format: RENDERED)
      featuredImage {
        node {
          mediaDetails {
            sizes {
              sourceUrl
              width
              height
            }
          }
        }
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
  }
`;
