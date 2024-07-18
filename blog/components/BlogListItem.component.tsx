import type { IPost } from '@/blog/blog.interface'
import FeaturedImage from '@/blog/components/FeaturedImage.component'
import DateComponent from '@/shared/components/Date.component'
import {
	Card,
	CardBody,
	CardFooter, Heading,
	Stack,
	Text
} from '@chakra-ui/react'
import React from 'react'

interface BlogListItemProps {
	post: IPost
}

const BlogListItem = ({ post }: BlogListItemProps) => {
	return (
		<Card
			direction={{ base: 'column', sm: 'row' }}
			overflow='hidden'
			variant='outline'
			bg={'gray.100'}
			border={'none'}
		>
			
			<FeaturedImage
				postImage={post.featuredImage}
				postSlug={post.slug}
			/>
			
			<Stack>
				<CardBody>
					<Heading size='md'>
						{post.title}
					</Heading>
					<Text
						dangerouslySetInnerHTML={{__html: post.excerpt}} >
					</Text>
				</CardBody>
				
				<CardFooter>
					<DateComponent dateString={post.date}/>
					{/* <Button variant='solid' colorScheme='blue'> */}
					{/*   Buy Latte */}
					{/* </Button> */}
				</CardFooter>
			</Stack>
		</Card>
	)
}

export default BlogListItem