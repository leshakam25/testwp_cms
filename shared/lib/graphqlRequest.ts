export const graphqlRequest = async (query: string, variables?: Record<string, string>) => {
	try {
		const response = await fetch(`${process.env.GRAPHQL_API_URL}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: query,
				variables: variables,
			}),
		});
		
		if (!response.ok) {
			throw new Error('Нет ответа от сервера');
		}
		
		return response.json();
	} catch (error) {
		console.error('Ошибка запроса:', error);
		throw error;
	}
};