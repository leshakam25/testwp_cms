import PageTitle from '@/shared/components/PageTitle.component'
import { getPageSlugs } from '@/shared/lib/getPageSlugs'
import { Box } from '@chakra-ui/react'

const AboutPage = async () => {
	
	const getSlugs: any = await getPageSlugs()
	return (
		<div>
			<PageTitle title={"О нас"} subtitle={"В подробностях"}/>
			
			<Box>
			</Box>
		</div>
	)
}

export default AboutPage