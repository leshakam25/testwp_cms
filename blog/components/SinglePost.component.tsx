import type { ISinglePost } from '@/blog/blog.interface'
import FeaturedImage from '@/blog/components/FeaturedImage.component'
import DateComponent from '@/shared/components/Date.component'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface SinglePostProps {
	singlePost: ISinglePost | undefined,
}

const SinglePost = ({ singlePost }: SinglePostProps) => {
	if (singlePost) return (
		<>
			{/* <FeaturedImage */}
			{/* 	postImage={singlePost.featuredImage} */}
			{/* 	postSlug={singlePost.slug} */}
			{/* /> */}
			<Text
				fontWeight={'500'}
				fontSize={'24px'}
			>
				{singlePost.title}
			</Text>
			<Text
				display={'flex'}
				flexFlow={'nowrap row'}
				pb={4}
			>
				Последние изменение: &nbsp;
				<DateComponent
					dateString={singlePost.modified}
				/>
			</Text>
			<Box
				className={'singlePostContent'}
				dangerouslySetInnerHTML={{ __html: singlePost.content }}
			/>
		</>
	)
}

export default SinglePost