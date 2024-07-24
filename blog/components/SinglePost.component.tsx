import type { ISinglePost } from '@/blog/blog.interface'
import SinglePostTitle from '@/blog/components/SinglePostTitle.component'
import { Box } from '@chakra-ui/react'
import React from 'react'
import '@/blog/singlePost.style.css'

interface SinglePostProps {
	singlePost: ISinglePost | undefined,
}

const SinglePost = ({ singlePost }: SinglePostProps) => {
	// console.log(singlePost.featuredImage?.node.mediaDetails)
	if (singlePost) return (
		<>
			<SinglePostTitle
				imgUrl={singlePost.featuredImage?.node.mediaDetails.sizes[1].sourceUrl}
				title={singlePost.title}
				modified={singlePost.modified}
			/>
			<Box
				py={20}
				className={'singlePostContent'}
				dangerouslySetInnerHTML={{ __html: singlePost.content }}
			/>
		</>
	)
}

export default SinglePost