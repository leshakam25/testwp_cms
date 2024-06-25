import type { IPost } from '@/blog/blog.interface'
import { Box, Button, Card, CardBody, CardFooter, Heading, Stack, Text } from '@chakra-ui/react'

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
			{/* <Image */}
			{/*   objectFit='cover' */}
			{/*   maxW={{ base: '100%', sm: '200px' }} */}
			{/*   src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' */}
			{/*   alt='Caffe Latte' */}
			{/* /> */}
			
			<Stack>
				<CardBody>
					<Heading size='md'>{post.title}</Heading>
					<Text py='2'>
						{post.excerpt}
					</Text>
				</CardBody>
				
				<CardFooter>
					<Text>{post.date}</Text>
					{/* <Button variant='solid' colorScheme='blue'> */}
					{/*   Buy Latte */}
					{/* </Button> */}
				</CardFooter>
			</Stack>
		</Card>
	)
}

export default BlogListItem