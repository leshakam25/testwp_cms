import type { IPosts, ISinglePost } from '@/Blog/blog.interface'
import { GET_ALL_POSTS, GET_SINGLE_POST_QUERY } from '@/Blog/blog.queries'
import { graphqlRequest } from '@/shared/lib/graphqlRequest'

export interface ISinglePostResponse {
	data: {
		post: ISinglePost;
	};
}

export interface IPostsResponse {
	data: {
		posts: IPosts
	}
}

// Функция для получения одного поста по фрагменту (slug)
export const getPostBySlug = async (postSlug: string): Promise<ISinglePost | undefined> => {
	const variables = { postSlug }
	
	try {
		const resJson: ISinglePostResponse = await graphqlRequest(GET_SINGLE_POST_QUERY, variables)
		console.log(resJson.data.post)
		return resJson.data.post
	} catch (error) {
		console.error('Ошибка в получении поста:', error)
		return undefined
	}
}

// Функция для получения всех постов
export const getAllPosts = async (): Promise<IPostsResponse['data']['posts'] | undefined> => {
	try {
		const resJson: IPostsResponse = await graphqlRequest(GET_ALL_POSTS)
		console.log(resJson)
		return resJson.data.posts
	} catch (error) {
		console.error('Ошибка в получении всех постов:', error)
		return undefined
	}
}
