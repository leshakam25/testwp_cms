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
						rounded={'none'}
						border='none'
						outline={'1px solid black'}
						_hover={{
							bg: 'gray.200',
							color: 'red.300',
							outline: 'none',
							transition: '0.4s ease-in-out',
						}}
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