import type { IPageSlugs } from '@/Info/info.interface'
import { getPageSlugs } from '@/Info/info.services'
import PageTitle from '@/shared/components/PageTitle.component'
import { Box } from '@chakra-ui/react'

const InfoPage = async () => {
	const pageSlugs: IPageSlugs[] | undefined = await getPageSlugs()
	return (
		<div>
			<PageTitle title={'О нас'} subtitle={'В подробностях'} />
			<Box>
				{JSON.stringify(pageSlugs)}
			</Box>
		</div>
	)
}

export default InfoPage