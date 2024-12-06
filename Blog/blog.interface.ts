/**
 * Этот интерфейс представляет собой информацию о постах блога, полученную из GraphQL API.
 *
 * @property nodes - Массив постов.
 * @property pageInfo - Информация о страницах.
 * @property totalCount - Общее количество постов.
 * @property totalPages - Общее количество страниц.
 */
export interface IPosts {
    nodes: IPost[];
    pageInfo: IPageInfo;
    totalCount: number;
    totalPages: number;
}

/**
 * Этот интерфейс представляет собой информацию о посте блога.
 *
 * @property id - Уникальный идентификатор поста.
 * @property title - Заголовок поста.
 * @property slug - Слаг поста.
 * @property excerpt - Краткое описание поста.
 * @property date - Дата публикации поста.
 * @property featuredImage - Изображение поста.
 * @property categories - Категории, к которым относится пост.
 */
export interface IPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    featuredImage?: IFeaturedImage;
    categories?: ICategories[]
}

/**
 * Этот интерфейс представляет собой информацию о посте блога, полученную из одного запроса.
 *
 * @property modified - Дата последнего изменения поста.
 * @property content - Содержимое поста.
 */
export interface ISinglePost extends Omit<IPost, 'date' & 'excerpt'> {
    modified: string;
    content: string;
}

/**
 * Этот интерфейс представляет собой информацию о страницах постов.
 *
 * @property endCursor - Курсор для последнего поста в запрошенной странице.
 * @property hasNextPage - Логическое значение, указывающее, есть ли следующая страница.
 * @property hasPreviousPage - Логическое значение, указывающее, есть ли предыдущая страница.
 * @property startCursor - Курсор для первого поста в запрошенной странице.
 */
interface IPageInfo {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
}

/**
 * Этот интерфейс представляет собой информацию об изображении поста.
 *
 * @property node - Содержимое изображения.
 */
export interface IFeaturedImage {
    node: {
        mediaDetails: {
            file: string;
            sizes: IFeaturedImageSizes[]
        };
    };
}

/**
 * Этот интерфейс представляет собой информацию о размерах изображения поста.
 *
 * @property sourceUrl - URL изображения.
 * @property width - Ширина изображения.
 * @property height - Высота изображения.
 */
export interface IFeaturedImageSizes {
    sourceUrl: string,
    width: number,
    height: number
}

/**
 * Этот интерфейс представляет собой информацию о категориях поста.
 *
 * @property nodes - Массив категорий.
 */
export interface ICategories {
    nodes: {
        name: string;
        slug: string;
    }[]
}

/**
 * Этот интерфейс представляет собой информацию об ответе GraphQL, содержащем один пост.
 *
 * @property data - Содержимое ответа.
 */
export interface ISinglePostResponse {
    data: {
        post: ISinglePost;
    };
}

/**
 * Этот интерфейс представляет собой информацию об ответе GraphQL, содержащем список постов.
 *
 * @property data - Содержимое ответа.
 */
export interface IPostsResponse {
    data: {
        posts: IPosts
    }
}
