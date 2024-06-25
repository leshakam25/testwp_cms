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
