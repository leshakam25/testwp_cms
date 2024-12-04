import PageTitle from '@/shared/components/PageTitle.component'
import MainButton from '@/shared/ui/MainButton.component'
import { Box, Button, Text } from '@chakra-ui/react'
import Link from 'next/link'

const HomePage = () => {
	return (
		<Box>
			<PageTitle
				title={'Домашняя страница'}
			/>
			<Text
				fontSize={32}
				fontWeight={200}
				color={'gray.700'}
			>
				Добро пожаловать
			</Text>
			<Box mt={1}>
				<Link href={'/blog'}>
					<MainButton title={'Перейти в блог'} />
				</Link>
			</Box>
		</Box>
	)
}

export default HomePage