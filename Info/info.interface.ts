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