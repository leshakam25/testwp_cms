import LogoTheHeaderComponent from '@/theHeader/components/logoTheHeader.component'
import NavTheHeaderComponent from '@/theHeader/components/navTheHeader.component'
import { Box, Container, Text } from '@chakra-ui/react'

const TheHeaderComponent = () => {
	return (
		<Container
			maxW={'full'}
			zIndex={10}
			position={'relative'}
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			py={2}
		>
			<LogoTheHeaderComponent />
			<NavTheHeaderComponent />
			<Text>
				Header
			</Text>
		</Container>
	)
}

export default TheHeaderComponent