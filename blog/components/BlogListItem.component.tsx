'use client'
import type { IPost } from '@/blog/blog.interface'
import BlockListItemFeaturedImage from '@/blog/components/BlockListItemFeaturedImage.component'
import DateComponent from '@/shared/components/Date.component'
import htmlCleaner from '@/shared/htmlCleaner'
import {
	Box,
	Card,
	CardBody,
	CardFooter, Heading,
	Stack,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface BlogListItemProps {
	post: IPost
}

const BlogListItem = ({ post }: BlogListItemProps) => {
	
	return (
		<Link href={`/blog/${post.slug}`}>
			<Card
				direction={{ base: 'column', sm: 'row' }}
				overflow='hidden'
				variant='outline'
				bg={'gray.100'}
				border={'none'}
			>
				<BlockListItemFeaturedImage
					postImage={post.featuredImage}
				/>
				<Stack>
					<CardBody>
						<Heading size='md'>
							{post.title}
						</Heading>
						<Box
							dangerouslySetInnerHTML={{ __html: htmlCleaner(post.excerpt) }}
						>
						</Box>
					</CardBody>
					
					<CardFooter>
						<DateComponent dateString={post.date} />
						{/* <Button variant='solid' colorScheme='blue'> */}
						{/*   Buy Latte */}
						{/* </Button> */}
					</CardFooter>
				</Stack>
			</Card>
		</Link>
	)
}

export default BlogListItem