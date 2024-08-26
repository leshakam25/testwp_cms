import type { IPost } from '@/Blog/blog.interface'
import DateComponent from '@/shared/components/Date.component'
import { defaultFeaturedImage } from '@/shared/lib/defaultImage'
import {
	Box,
	Card,
	CardBody,
	CardFooter, Image,
	Stack, Text
} from '@chakra-ui/react'
import { sanitize } from 'isomorphic-dompurify'
import Link from 'next/link'
import React from 'react'

interface BlogListItemProps {
	post: IPost
}

const BlogListItem = ({ post }: BlogListItemProps) => {
	
	return (
		<Link href={`/blog/${post.slug}`} style={{
			margin: '30px 15px',
			width: '340px',
			height: '506px'
		}}
		>
			<Card
				boxShadow={'none'}
				width='340px'
				height='506px'
				rounded={'none'}
				_hover={{
					background: 'lightblue',
					transition: 'background 0.4s ease-in-out'
				}}
			>
				<Stack
					direction={'column'}
					overflow='hidden'
				>
					<Image
						src={post.featuredImage?.node.mediaDetails.sizes[0].sourceUrl || defaultFeaturedImage}
						width={'100%'}
						height={'212px'}
						fit={'cover'}
						alt={'no image'}
					/>
					<CardBody>
						<Text
							fontSize={13}
							opacity={0.8}
						>
							<DateComponent dateString={post.date} />
						</Text>
						<Text
							fontSize={'24px'}
							fontWeight={'regular'}
							lineHeight={'38px'}
						>
							{post.title}
						</Text>
						<Box
							fontSize={'16px'}
							lineHeight={'28px'}
							fontWeight={'regular'}
							height={120}
							textAlign={'justify'}
							dangerouslySetInnerHTML={{ __html: sanitize(post.excerpt) }}
						>
						</Box>
					</CardBody>
					<CardFooter>
					</CardFooter>
				</Stack>
			</Card>
		</Link>
	)
}

export default BlogListItem