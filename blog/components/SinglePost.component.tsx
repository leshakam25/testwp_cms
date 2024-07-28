'use client'
import type { ISinglePost } from '@/blog/blog.interface'
import DateComponent from '@/shared/components/Date.component'
import { defaultFeaturedImage } from '@/shared/defaultImage'
import { getHiResImg } from '@/shared/getHiResImg'
import htmlCleaner from '@/shared/htmlCleaner'
import { Box, Container, Image, Text } from '@chakra-ui/react'
import '@/blog/singlePost.style.css'
import React from 'react'

interface SinglePostProps {
	singlePost: ISinglePost | undefined,
}

const SinglePost = ({ singlePost }: SinglePostProps) => {
	if (!singlePost) return null
	
	return (
		<Container>
			<Image
				src={singlePost.featuredImage?.node.mediaDetails.sizes[1].sourceUrl || defaultFeaturedImage}
				width={'full'}
				height={'200px'}
				objectFit={'cover'}
				opacity={0.8}
			/>
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
					<DateComponent
						dateString={singlePost.modified}
					/>
				</Text>
				<Text
					opacity={0.8}
					px={2}
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