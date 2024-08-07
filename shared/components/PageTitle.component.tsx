import { Box, Text } from '@chakra-ui/react'

interface PageTitleProps {
	title: string,
	subtitle?: string
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
	return (
		<Box
			display={'flex'}
			flexFlow={'column nowrap'}
			justifyContent={'center'}
			alignItems={'center'}
			h={'220px'}
			mb={4}
			rounded={'md'}
		>
			<Text
				fontSize={42}
				color={'gray.500'}
				fontWeight={300}
			>
				{title}
			</Text>
			{
				!!subtitle &&
				<Text
					fontSize={22}
					color={'gray.500'}
					fontWeight={200}
				>
					{subtitle}
				</Text>
			}
		</Box>
	)
}

export default PageTitle