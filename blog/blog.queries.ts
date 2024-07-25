export const GET_SINGLE_POST_QUERY: string = `
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

export const GET_ALL_POSTS: string = `
  query getAllPosts {
    posts {
      nodes {
        id
        date
        slug
        title
        excerpt(format: RENDERED)
        featuredImage {
          node {
            mediaDetails {
              file
              sizes {
                sourceUrl
                width
                height
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
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
