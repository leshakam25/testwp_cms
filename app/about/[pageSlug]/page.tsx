import type { IPosts, ISinglePost } from '@/blog/blog.interface'
import { getPostBySlug } from '@/blog/blog.services'
import { getInfoPageById } from '@/Info/info.services'
import { getPageSlugs } from '@/shared/lib/getPageSlugs'
import { Box } from '@chakra-ui/react'


const AboutPageSlug = async ({params}: any) => {
	const { id } = params
	const page: any = await getInfoPageById(id)
	return (
		<Box>
			{JSON.stringify(page)}
		</Box>
	)
}

export default AboutPageSlug