'use client'
import type { IPost } from '@/blog/blog.interface'
import DateComponent from '@/shared/components/Date.component'
import htmlCleaner from '@/shared/htmlCleaner'
import {
	Box,
	Card,
	CardBody,
	CardFooter, Heading, Image,
	Stack, Text
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface BlogListItemProps {
	post: IPost
}

const BlogListItem = ({ post }: BlogListItemProps) => {
	const defaultFeaturedImage: string = 'https://www.shutterstock.com/shutterstock/photos/2155242945/display_1500/stock-vector-image-coming-soon-no-photo-no-thumbnail-image-available-missing-picture-icon-vector-illustration-2155242945.jpg'
	
	return (
		<Link href={`/blog/${post.slug}`} style={{
			margin:'30px 15px',
			width:'340px',
			height:'506px'
		}}
		>
			<Card
				boxShadow={'none'}
				width='340px'
				height='506px'
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
							fontSize={'12px'}
							fontWeight={'regular'}
							lineHeight={'24px'}
						>
							<DateComponent dateString={post.date} />
							{/* <Button variant='solid' colorScheme='blue'> */}
							{/*   Buy Latte */}
							{/* </Button> */}
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
							dangerouslySetInnerHTML={{ __html: htmlCleaner(post.excerpt) }}
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