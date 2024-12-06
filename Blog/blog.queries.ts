/**
 * Эта константа представляет собой GraphQL-запрос для получения одного поста по его слагу.
 *
 * @remarks
 * Запрос включает в себя идентификатор поста, содержимое, дату изменения, слаг, заголовок и детали изображения.
 * Он также извлекает категории, связанные с постом.
 *
 * @param postSlug - Уникальный идентификатор поста в виде слага.
 * @returns Строка GraphQL-запроса.
 */
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

/**
 * Эта константа представляет собой GraphQL-запрос для получения всех постов.
 *
 * @remarks
 * Запрос включает в себя узлы постов, включая идентификатор, дату, слаг, заголовок, анонс,
 * детали изображения и категории.
 * Он также предоставляет информацию о страницах, включая курсоры, наличие следующей и предыдущей страниц.
 *
 * @returns Строка GraphQL-запроса.
 */
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