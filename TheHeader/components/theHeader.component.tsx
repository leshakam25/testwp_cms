
import LogoTheHeaderComponent from '@/TheHeader/components/logoTheHeader.component'
import NavTheHeaderComponent from '@/TheHeader/components/navTheHeader.component'
import { Box, Container, Input } from '@chakra-ui/react'

const TheHeaderComponent = () => {
	return (
		<Container
			zIndex={10}
			maxW={'full'}
			position={'fixed'}
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			py={2}
			bgColor={'white'}
		>
			<LogoTheHeaderComponent />
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				gap={2}
			>
				<Input
					variant='flushed'
					placeholder='Поиск'
				/>
				<NavTheHeaderComponent />
			</Box>
		</Container>
	)
}

export default TheHeaderComponent