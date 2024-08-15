import { request, RequestDocument } from 'graphql-request';

export const swrFetcher = <TData = any>(query: RequestDocument): Promise<TData> => {
	return request<TData>(process.env.GRAPHQL_API_URL as string, query);
};

