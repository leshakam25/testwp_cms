export const graphqlRequest = async (query: string, variables?: Record<string, string>) => {
	const url = process.env.GRAPHQL_API_URL
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${process.env.WORDPRESS_AUTH_TOKEN}`
	}
	
	if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
		headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
	}
	
	try {
		const response = await fetch(url as string, {
			headers,
			method: 'POST',
			body: JSON.stringify({
				query: query,
				variables: variables
			})
		})
		
		if (!response.ok) {
			throw new Error('Нет ответа от сервера')
		}
		
		return response.json()
	} catch (error) {
		console.error('Ошибка запроса:', error)
		throw error
	}
}