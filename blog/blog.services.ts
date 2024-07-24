import type { IPosts, ISinglePost } from '@/blog/blog.interface'
import { graphqlRequest } from '@/shared/services'

export const getAllPosts = async (): Promise<IPosts | undefined> => {
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
	
	try {
		const resJson = await graphqlRequest(query.query)
		return resJson.data.posts
	} catch (error) {
		console.error('Ошибка в получении постов:', error)
	}
}

export const getPostBySlug = async (postSlug: string): Promise<ISinglePost | undefined> => {
	const query = {
		query: `query getSinglePost($postSlug: ID!) {
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
    }`,
		variables: {
			postSlug: postSlug
		}
	}
	
	try {
		const resJson = await graphqlRequest(query.query, query.variables)
		console.log(resJson)
		return resJson.data.post
	} catch (error) {
		console.error('Ошибка в получении поста:', error)
	}
}
