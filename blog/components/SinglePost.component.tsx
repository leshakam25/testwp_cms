'use client'
import type { ISinglePost } from '@/blog/blog.interface'
import SinglePostTitle from '@/blog/components/SinglePostTitle.component'
import htmlCleaner from '@/shared/htmlCleaner'
import { Box } from '@chakra-ui/react'
import React from 'react'
import '@/blog/singlePost.style.css'

interface SinglePostProps {
	singlePost: ISinglePost | undefined,
}

const SinglePost = ({ singlePost }: SinglePostProps) => {
	
	//Функция которая проверят есть ли в массиве картинки высокого разрешения
	const getImgUrl = (post: ISinglePost) => {
		
		const sizes = post.featuredImage?.node.mediaDetails.sizes;
		if (sizes && sizes.length > 4) {
			return sizes[5].sourceUrl;
		}
		return sizes ? sizes[1].sourceUrl : '';
	}
	
	if (!singlePost) return null
	
	return (
		<>
			{!!singlePost &&
				<SinglePostTitle
					imgUrl={getImgUrl(singlePost)}
					title={singlePost.title}
					modified={singlePost.modified}
				/>
			}
			<Box
				py={20}
				className={'singlePostContent'}
				dangerouslySetInnerHTML={{ __html: htmlCleaner(singlePost.content) }}
			/>
		</>
	)
}

export default SinglePost