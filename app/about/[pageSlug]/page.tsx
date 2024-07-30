import type { IPosts } from '@/blog/blog.interface'
import { getPageSlugs } from '@/shared/lib/getPageSlugs'
import { Box } from '@chakra-ui/react'


const AboutPageSlug = async () => {
	const getSlugs: any = await getPageSlugs()
	return (
		<Box>
			{JSON.stringify(getSlugs)}
		</Box>
	)
}

export default AboutPageSlug