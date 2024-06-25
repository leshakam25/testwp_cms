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
                  excerpt
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
	console.log(resJson.data.posts)
	
	return resJson.data.posts
}