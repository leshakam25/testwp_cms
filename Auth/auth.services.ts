import type { IRegisterForm } from '@/Auth/auth.interface'
import type { ISinglePostResponse } from '@/Blog/blog.interface'
import { GET_SINGLE_POST } from '@/Blog/blog.queries'
import type { PagesResponseData } from '@/Info/info.interface'
import { graphqlRequest } from '@/shared/lib/graphqlRequest'

export const userRegister = async ({values}: IRegisterForm | any): Promise<any> => {
	try {
		const query: { query: string } = {
			query: `
        mutation LoginMutation {
          login(
            input: {username: ${values.name}, password: ${values.password}, clientMutationId: "uniqueId"}
          ) {
            refreshToken
          }
        }`
		}
		const res: any = await graphqlRequest(query.query)
		if(!!res.ok){
			console.log('Успешно')
		}
		console.log("Ошибка")
		return res
	} catch (error) {
		console.error('Ошибка в получении поста:', error)
		return undefined
	}
}