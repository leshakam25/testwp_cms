import InfoContent from '@/Info/components/InfoContent.component'
import type { IPageNode  } from '@/Info/info.interface'
import { getSinglePage } from '@/Info/info.services'

interface InfoPageSlugProps {
	params: {
		pageSlug: string;
	};
}

const InfoPageSlug = async ({ params }: InfoPageSlugProps) => {
	const { pageSlug } = params
	const data: IPageNode | undefined = await getSinglePage({ pageSlug: `${pageSlug}` })
	
	return (
		<>
			{!!data && <InfoContent pageData={data} />}
		</>
	)
}

export default InfoPageSlug