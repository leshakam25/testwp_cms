export const GET_INFOPAGE_QUERY: string = `
  query getInfoPage($id: ID!) {
    page(id: $id, idType: ID) {
    content(format: RENDERED)
    date
    featuredImage {
      node {
        uri
        sizes
      }
    }
    title(format: RENDERED)
    slug
  }
  }
`;

export const GET_PAGE_SLUGS: string = `
	query getPageSlugs {
    pages {
      nodes {
        slug
      }
    }
  }
`;
