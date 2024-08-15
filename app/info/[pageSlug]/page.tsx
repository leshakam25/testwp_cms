"use client"
import type { IPosts } from '@/Blog/blog.interface'
import { GET_ALL_POSTS } from '@/Blog/blog.queries'
import BlogList from '@/Blog/components/BlogList.component'
import InfoContent from '@/Info/components/infoContent.component'
import type { IPageNode, PagesResponseData } from '@/Info/info.interface'
import { getSinglePage } from '@/Info/info.services'
import LoadingComponent from '@/shared/components/loading.component'
import { swrFetcher } from '@/shared/lib/swrFetcher'
import { Box } from '@chakra-ui/react'
import useSWR from 'swr'

interface InfoPageSlugProps {
	params: {
		pageSlug: string;
	};
}

const InfoPageSlug = ({ params }: InfoPageSlugProps) => {
	const { pageSlug } = params
	// const pageData: IPageNode | undefined = await getSinglePage({ pageSlug: `${pageSlug}` })
	
	const { data, error, isLoading } = useSWR<any>(`
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
			}` as string, swrFetcher)
	
	
	return (
		<>
			{error &&
				<div>
					Ошибка при загрузке данных
					<br />
					{error.message}
				</div>
			}
			{isLoading && <LoadingComponent/>}
			{!isLoading && data && <InfoContent pageData={data.pages.nodes[0]} />}
		</>
	)
}

export default InfoPageSlug