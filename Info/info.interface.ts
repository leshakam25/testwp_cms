/**
 * Интерфейс для хранения slug-а страницы.
 */
export interface IPageSlugs {
        slug: string
}

/**
 * Интерфейс для ответа, содержащего список slug-ов страниц.
 */
export interface IPageSlugsResponse {
    data: {
        pages: {
            nodes: IPageSlugs[]
        }
    }
}

/**
 * Интерфейс для аргументов функции, получающей данные одной страницы.
 */
export interface IGetSinglePageParams {
    pageSlug: string;
}

/**
 * Интерфейс для хранения данных одной страницы.
 */
export interface IPageNode {
    content: string;
    date: string;
    modified: string;
    slug: string;
    title: string;
}

/**
 * Интерфейс для ответа, содержащего данные одной или нескольких страниц.
 */
export interface PagesResponseData {
    data: {
        pages: {
            nodes: IPageNode[];
        };
    };
}

/**
 * Интерфейс для хранения данных контактной формы.
 */
export interface IContactForm {
    name: string;
    email: string;
    message: string;
    phone: string;
}

