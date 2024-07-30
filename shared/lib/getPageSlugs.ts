import { graphqlRequest } from '@/shared/lib/graphqlRequest'

interface ISlug {
	slug: string;
}

export async function getPageSlugs(): Promise<ISlug[] | undefined> {
	const query: string =
		`query getPageSlugs {
        pages {
          nodes {
            slug
          }
        }
			}`
	
	const resJson = await graphqlRequest(query)
	console.log(resJson.data.pages.nodes)
	return resJson.data.pages.nodes
}