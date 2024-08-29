// Функция для получения одного поста по фрагменту (slug)
import type {
	IContactForm,
	IPageNode,
	IPageSlugsResponse,
	PagesResponseData
} from '@/Info/info.interface'
import {
	GET_PAGE_SLUGS
} from '@/Info/info.queries'
import { graphqlRequest } from '@/shared/lib/graphqlRequest'


export const getPageSlugs = async (): Promise<{ slug: string }[] | undefined> => {
	try {
		const resJson: IPageSlugsResponse = await graphqlRequest(GET_PAGE_SLUGS)
		return resJson.data.pages.nodes
	} catch (error) {
		console.error('Ошибка в получении списка страниц:', error)
		return undefined
	}
}

export const getSinglePage = async ({ pageSlug }: { pageSlug: string }): Promise<IPageNode | undefined> => {
	try {
		const query: { query: string } = {
			query: `
			query getSinglePage {
				pages(where: {name: "${pageSlug}"}) {
					nodes {
						content(format: RENDERED)
						date
						modified
						slug
						title(format: RENDERED)
					}
				}
			}`
		}
		const resJson: PagesResponseData = await graphqlRequest(query.query)
		return resJson.data.pages.nodes[0]
	} catch (error) {
		console.error('Ошибка в получении списка страниц:', error)
		return undefined
	}
}

export const sendContactData = async (values: IContactForm) => {
	
	try {
		const res = await fetch('/api/form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		})
		
		// Проверка, что ответ есть и статус успешен
		if (!res.ok) {
			throw new Error(`Ошибка: ${res.status} ${res.statusText}`)
		}
		
		const data = await res.json()
		
		// Проверка, что данные существуют
		if (!data) {
			throw new Error('Пустой ответ от сервера')
		}
		return data
	} catch (error) {
		console.error('Ошибка при отправке формы:', error)
		throw error // Пробрасываем ошибку дальше, если нужно
	}
}
