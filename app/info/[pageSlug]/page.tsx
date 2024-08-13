import InfoContent from '@/Info/components/infoContent.component'
import type { IPageNode } from '@/Info/info.interface'
import { getSinglePage } from '@/Info/info.services'

interface InfoPageSlugProps {
	params: {
		pageSlug: string;
	};
}

const InfoPageSlug = async ({ params }: InfoPageSlugProps) => {
	const { pageSlug } = params
	const pageData: IPageNode | undefined = await getSinglePage({ pageSlug: `${pageSlug}` })
	
	return (
		<InfoContent pageData={pageData}/>
	)
}

export default InfoPageSlug