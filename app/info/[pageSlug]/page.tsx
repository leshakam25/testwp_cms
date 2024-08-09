import { getInfoPageBySlug } from '@/Info/info.services'
import { Box } from '@chakra-ui/react'


const InfoPageSlug = async ({params}: any) => {
	const { slug } = params
	const page: any = await getInfoPageBySlug(slug)
	return (
		<Box>
			{JSON.stringify(page)}
		</Box>
	)
}

export default InfoPageSlug