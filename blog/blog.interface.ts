export interface IPosts {
	nodes: IPost[];
	pageInfo: IPageInfo;
	totalCount: number;
	totalPages: number;
}


export interface IPost {
	id: string;
	title: string;
	slug: string;
	excerpt: string;
	date: string;
	featuredImage?: IFeaturedImage;
	categories?: ICategories[]
}

export interface ISinglePost extends Omit<IPost, 'date'> {
	modified: string;
}

interface IPageInfo {
	endCursor: string;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	startCursor: string;
}

export interface IFeaturedImage {
	node: {
		mediaDetails: {
			file: string;
			sizes: IFeaturedImageSizes[]
		};
	};
}

export interface IFeaturedImageSizes {
	sourceUrl: string,
	width: number,
	height: number
}

export interface ICategories {
	nodes: {
		name: string;
		slug: string;
	}[]
}
