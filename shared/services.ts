export const graphqlRequest = async (query: string) =>  {
	const url = process.env.GRAPHQL_API_URL
	const headers = { 'Content-Type': 'application/json' }
	
	const res = await fetch(url as string, {
		headers,
		method: 'POST',
		body: JSON.stringify({ query })
	})

	return await res.json()
}