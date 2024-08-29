// import type { IRegisterForm } from '@/Auth/auth.interface'
// import { graphqlRequest } from '@/shared/lib/graphqlRequest'
//
// export const userRegister = async ({ values }: IRegisterForm ): Promise<any> => {
// 	try {
// 		const query: { query: string } = {
// 			query: `
//         mutation LoginMutation($username: String!, $password: String!, $clientMutationId: String!) {
//           login(input: {username: $username, password: $password, clientMutationId: $clientMutationId}) {
//             refreshToken
//           }
// 			}
//       `
// 		}
// 		const res: any = await graphqlRequest(query.query)
// 		if (!!res.ok) {
// 			console.log('Успешно')
// 		}
// 		console.log('Ошибка')
// 		return res
// 	} catch (error) {
// 		console.error('Ошибка в получении поста:', error)
// 		return undefined
// 	}
// }