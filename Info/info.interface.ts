export interface IPageSlugs {
		slug: string
}

export interface IPageSlugsResponse {
	data: {
		pages: {
			nodes: IPageSlugs[]
		}
	}
}

// Тип для аргументов функции
export interface IGetSinglePageParams {
	pageSlug: string;
}

// Типы для данных страницы
export interface IPageNode {
	content: string;
	date: string;
	modified: string;
	slug: string;
	title: string;
}

export interface PagesResponseData {
	data: {
		pages: {
			nodes: IPageNode[];
		};
	};
}
