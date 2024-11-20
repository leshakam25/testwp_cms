/**
 * Выполняет GraphQL-запрос к указанному URL с указанным запросом и необязательными переменными.
 * Если в переменных окружения есть токен обновления, он будет использован для аутентификации.
 *
 * @param query - GraphQL-запрос, который необходимо выполнить.
 * @param variables - Необязательные переменные для GraphQL-запроса.
 *
 * @returns Promise, который разрешается с ответом от сервера в виде JSON.
 *
 * @throws Error - Если запрос завершается с ошибкой или если сервер не отвечает.
 */

export const graphqlRequest = async (query: string, variables?: Record<string, string>): Promise<any> => {
	const url: string | undefined = process.env.GRAPHQL_API_URL
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${process.env.WORDPRESS_AUTH_TOKEN}`
	}
	
	if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
		headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
	}
	
	try {
		const response: Response = await fetch(url as string, {
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