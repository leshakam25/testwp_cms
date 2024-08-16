import type { ISinglePost } from '@/blog/blog.interface'
import DateComponent from '@/shared/components/Date.component'
import { defaultFeaturedImage } from '@/shared/lib/defaultImage'
import { Box, Container, Image, Text } from '@chakra-ui/react'
import '@/shared/styles/content.style.css'
import { sanitize } from 'isomorphic-dompurify'
import React from 'react'

interface SinglePostProps {
	singlePost: ISinglePost | undefined,
}

const SinglePost = ({ singlePost }: SinglePostProps) => {
	if (!singlePost) return null
	
	return (
		<Container
			maxW={'6xl'}
			mt={8}
		>
			<Image
				src={singlePost.featuredImage?.node.mediaDetails.sizes[5].sourceUrl || defaultFeaturedImage}
				width={'full'}
				height={'400px'}
				objectFit={'cover'}
				opacity={0.9}
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
				dangerouslySetInnerHTML={{ __html: sanitize(singlePost.content) }}
			/>
		</Container>
	)
}

export default SinglePost