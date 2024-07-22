import type { ISinglePost } from '@/blog/blog.interface'
import FeaturedImage from '@/blog/components/FeaturedImage.component'
import DateComponent from '@/shared/components/Date.component'
import { Text } from '@chakra-ui/react'
import React from 'react'

interface SinglePostProps {
	singlePost: ISinglePost | undefined,
}

const SinglePost = ({ singlePost }: SinglePostProps) => {
	if (singlePost) return (
		<>
			<FeaturedImage
				postImage={singlePost.featuredImage}
				postSlug={singlePost.slug}
			/>
			<Text>
				{singlePost.title}
			</Text>
			<Text
				dangerouslySetInnerHTML={{ __html: singlePost.excerpt }}
			/>
			
			<Text>
				Последние изменение: &nbsp;
				<DateComponent
					dateString={singlePost.modified}
				/>
			</Text>
		</>
	)
}

export default SinglePost