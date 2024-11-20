import InfoContent from '@/Info/components/InfoContent.component'
import type { IPageNode, IPageSlugs, IPageSlugsResponse } from '@/Info/info.interface'
import { getPageSlugs, getSinglePage } from '@/Info/info.services'

interface InfoPageSlugProps {
	params: {
		pageSlug: string;
	};
}

const InfoPage = async ({ params }: InfoPageSlugProps) => {
	// const pageSlugs: IPageSlugs[] | undefined = await getPageSlugs()
	const { pageSlug } = params
	const data: IPageNode | undefined = await getSinglePage({ pageSlug: pageSlug })
	
	return (
		<>
			{/* {JSON.stringify(pageSlugs)} */}
			{!!data && <InfoContent pageData={data} />}
		</>
	)
}

export default InfoPage