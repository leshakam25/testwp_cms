'use client'
import type { ISinglePost } from '@/blog/blog.interface'
import DateComponent from '@/shared/components/Date.component'
import { getHiResImg } from '@/shared/getHiResImg'
import htmlCleaner from '@/shared/htmlCleaner'
import { Box, Container, Text } from '@chakra-ui/react'
import '@/blog/singlePost.style.css'
import React from 'react'

interface SinglePostProps {
	singlePost: ISinglePost | undefined,
}

const SinglePost = ({ singlePost }: SinglePostProps) => {
	if (!singlePost) return null
	
	return (
		<Container>
			<Box
				bgImage={getHiResImg(singlePost.featuredImage)}
				bgPos={'center'}
				bgSize={'cover'}
				height={'120px'}
				display={'flex'}
				flexFlow={'column nowrap'}
				justifyContent={'center'}
				alignItems={'center'}
				gap={1}
			>
				<Text
					fontSize={14}
					textAlign={'center'}
					bgColor={'lightcyan'}
					px={1}
					rounded={'sm'}
					opacity={0.8}
				>
					<DateComponent
						dateString={singlePost.modified}
					/>
				</Text>
				<Text
					opacity={0.8}
					px={2}
					bgColor={'lightcyan'}
					fontSize={24}
					lineHeight={'38px'}
					rounded={'sm'}
					textAlign={'center'}
				>
					{singlePost.title}
				</Text>
			</Box>
			<Box
				className={'singlePostContent'}
				dangerouslySetInnerHTML={{ __html: htmlCleaner(singlePost.content) }}
			/>
		</Container>
	)
}

export default SinglePost