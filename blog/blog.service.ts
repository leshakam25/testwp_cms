import { graphqlRequest } from '@/shared/services'

export const getAllPosts = async () => {
	
	const query = {
		query: `query getAllPosts {
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
          }`
	}
	
	const resJson = await graphqlRequest(query.query)
	return resJson.data.posts
}

export const getPostBySlug = async (postSlug: string) => {
	const query = {
		query: `query getSinglePost($postSlug: ID!) {
  post(id: $postSlug, idType: SLUG) {
    id
    content(format: RENDERED)
    excerpt(format: RENDERED)
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
}		`
	}
	
	const resJson = await graphqlRequest(query.query)
	console.log(resJson)
	// return resJson.data.posts
}