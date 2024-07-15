export interface IPosts {
	nodes: IPost[];
	pageInfo: {
		endCursor: string;
		hasNextPage: boolean;
		hasPreviousPage: boolean;
		startCursor: string;
	};
	totalCount: number;
	totalPages: number;
}

export interface IPost {
	id: string;
	title: string;
	slug: string;
	excerpt: string;
	date: string;
	featureImage?: string;
	categories?: ICategories[]
}

export interface ICategories {
	nodes: {
		name: string;
		slug: string;
	}
}
