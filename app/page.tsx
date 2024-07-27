import PageTitle from '@/shared/components/PageTitle.component'
import { Box, Button, Text } from '@chakra-ui/react'
import Link from 'next/link'

const HomePage = () => {
	return (
		<Box>
			<PageTitle
				title={"Домашняя страница"}
				subtitle={"Дашборд"}
			/>
			
			<Text as={'h1'}>
				Welcome to TestWP blog
			</Text>
			<Box mt={1}>
				<Link href={'/blog'}>
					<Button
						variant={'outline'}
						colorScheme={'blue'}
					>
						<Text>
							Go to blog
						</Text>
					</Button>
				</Link>
			</Box>
		</Box>
	)
}

export default HomePage