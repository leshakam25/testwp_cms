import type { ISinglePost } from '@/Blog/blog.interface'
import DateComponent from '@/shared/components/Date.component'
import { defaultFeaturedImage } from '@/shared/lib/defaultImage'
import { Box, Container, Image, Text } from '@chakra-ui/react'
import '@/shared/styles/content.style.css'
import { sanitize } from 'isomorphic-dompurify'
import React from 'react'

interface SinglePostProps {
	singlePost: ISinglePost | undefined,
}

/**
 * Функциональный компонент React, отображающий одиночный пост блога.
 *
 * @param singlePost - Данные одиночного поста блога для отображения.
 * @returns React-элемент, представляющий одиночный пост блога.
 */
const SinglePost = ({ singlePost }: SinglePostProps) => {
	// Если singlePost не определен, возвращаем null
	if (!singlePost) return null
	
	return (
		<Container
			maxW={'6xl'}
			mt={8}
		>
			{
				singlePost.featuredImage?.node &&
				singlePost.featuredImage?.node.mediaDetails.sizes[1].sourceUrl &&
				<Image
					src={singlePost.featuredImage?.node.mediaDetails.sizes[1].sourceUrl || defaultFeaturedImage}
					width={'full'}
					height={'600px'}
					objectFit={'cover'}
					opacity={0.9}
				/>
			}
			<Box
				height={120}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<Text
					opacity={0.8}
					px={2}
					fontSize={32}
					lineHeight={'38px'}
					rounded={'sm'}
					textAlign={'center'}
				>
					{singlePost.title}
				</Text>
				<Text
					fontSize={12}
					textAlign={'center'}
					px={1}
					rounded={'sm'}
					opacity={0.8}
				>
					<DateComponent
						dateString={singlePost.modified}
					/>
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