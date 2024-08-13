export const GET_PAGE_SLUGS: string = `
	query getPageSlugs {
    pages {
      nodes {
        slug
      }
    }
  }
`

export const GET_SINGLE_PAGE: string = `
	query getSinglePage {
    pages(where: {name: ""}) {
      nodes {
        content(format: RENDERED)
        date
        modified
        slug
        title(format: RENDERED)
      }
    }
	}
`
