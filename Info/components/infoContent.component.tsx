import type { IPageNode } from '@/Info/info.interface'
import DateComponent from '@/shared/components/Date.component'
import htmlCleaner from '@/shared/lib/htmlCleaner'
import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import '@/shared/content.style.css'

interface InfoContentProps {
	pageData: IPageNode | undefined
}

const InfoContent = ({ pageData }: InfoContentProps) => {
	if (!pageData) {
		return <Box>Страница не найдена</Box>
	}
	
	return (
		<Container
			maxW={'6xl'}
			mt={8}
		>
			<Box
				height={120}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<Text
					fontSize={14}
					textAlign={'center'}
					px={1}
					rounded={'sm'}
					opacity={0.8}
				>
					{/* <DateComponent */}
					{/* 	dateString={pageData.modified} */}
					{/* /> */}
				</Text>
				<Text
					opacity={0.8}
					px={2}
					fontSize={24}
					lineHeight={'38px'}
					rounded={'sm'}
					textAlign={'center'}
				>
					{pageData.title}
				</Text>
			</Box>
			<Box
				className={'singlePostContent'}
				fontSize={'16px'}
				lineHeight={'28px'}
				fontWeight={'regular'}
				height={120}
				textAlign={'justify'}
				dangerouslySetInnerHTML={{ __html: htmlCleaner(pageData.content) }}
			>
			</Box>
		</Container>
	)
}

export default InfoContent