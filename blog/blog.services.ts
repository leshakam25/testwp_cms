import type { IPosts, ISinglePost } from '@/blog/blog.interface'
import { GET_ALL_POSTS, GET_SINGLE_POST_QUERY } from '@/blog/blog.queries'
import { graphqlRequest } from '@/shared/graphqlRequest.services'

interface SinglePostResponse {
	data: {
		post: ISinglePost;
	};
}

interface PostsResponse {
	data: {
		posts: IPosts
	}
}


// Функция для получения одного поста по фрагменту (slug)
export const getPostBySlug = async (postSlug: string): Promise<ISinglePost | undefined> => {
	const variables = { postSlug }
	
	try {
		const resJson: SinglePostResponse = await graphqlRequest(GET_SINGLE_POST_QUERY, variables)
		console.log(resJson)
		return resJson.data.post
	} catch (error) {
		console.error('Ошибка в получении поста:', error)
		return undefined
	}
}

// Функция для получения всех постов
export const getAllPosts = async (): Promise<PostsResponse['data']['posts'] | undefined> => {
	
	try {
		const resJson: PostsResponse = await graphqlRequest(GET_ALL_POSTS)
		console.log(resJson)
		return resJson.data.posts
	} catch (error) {
		console.error('Ошибка в получении всех постов:', error)
		return undefined
	}
}
