import DateComponent from '@/shared/components/Date.component'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface SinglePostTitleProps {
	imgUrl: string | undefined;
	title: string;
	modified: string;
}

const SinglePostTitle = ({ imgUrl, title, modified }: SinglePostTitleProps) => {
	return (
		<Box
			display={'flex'}
			flexFlow={'column nowrap'}
			justifyContent={'center'}
			alignItems={'center'}
			backgroundImage={imgUrl}
			backgroundSize={'cover'}
			backgroundPosition={'center'}
			height={'320px'}
		>
			<Box
				display={'flex'}
				flexFlow={'column nowrap'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<Text
					fontWeight={'500'}
					fontSize={'4.25rem'}
					textShadow={'0 0 25px rgba(255,255,255,.5), 0 0 15px rgba(255,255,255,.5)'}
				>
					{title}
				</Text>
				<Text
					display={'flex'}
					flexFlow={'nowrap row'}
					fontSize={'1.25rem'}
					pb={4}
					textShadow={'0 0 25px rgba(255,255,255,.5), 0 0 15px rgba(255,255,255,.5)'}
				>
					Последние изменение: &nbsp;
					<DateComponent
						dateString={modified}
					/>
				</Text>
			</Box>
		
		</Box>
	)
}

export default SinglePostTitle