import LogoTheHeaderComponent from '@/theHeader/components/logoTheHeader.component'
import NavTheHeaderComponent from '@/theHeader/components/navTheHeader.component'
import { Box, Container, Input } from '@chakra-ui/react'

const TheHeaderComponent = () => {
	return (
		<Container
			maxW={'full'}
			position={'relative'}
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			py={2}
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