/**
 * Это GraphQL-запросы, используемые для получения данных из CMS WordPress.
 *
 * @remarks
 * Запрос `GET_PAGE_SLUGS` извлекает список слагов страниц из CMS.
 * Запрос `GET_SINGLE_PAGE` извлекает подробную информацию о единственной странице,
 * используя ее имя.
 */

export const GET_PAGE_SLUGS: string = `
    query getPageSlugs {
    pages {
      nodes {
        slug
      }
    }
  }
`

/**
 * @param pageName - Имя страницы для получения.
 *
 * @returns Строка GraphQL-запроса, которая извлекает подробную информацию о единственной странице.
 * Возвращаемые данные включают контент страницы, дату, дату изменения, слаг и заголовок.
 */
export const GET_SINGLE_PAGE: string = `
    query getSinglePage($pageName: String!) {
    pages(where: {name: $pageName}) {
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