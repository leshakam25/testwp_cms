import type { IPost, IPosts } from '@/blog/blog.interface'
import BlogListItem from '@/blog/components/BlogListItem.component'
import { Box, Container } from '@chakra-ui/react'
import React from 'react'

interface BlogListProps {
	allPosts: IPosts
}

const BlogList = ({ allPosts }: BlogListProps) => {
	return (
		<Container
			maxWidth={'6xl'}
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			gap={2}
		>
			{!!allPosts &&
				allPosts.nodes &&
				allPosts.nodes.map((el: IPost) => {
					return (
						<BlogListItem
							post={el}
							key={el.slug}
						/>
					)
				})
			}
		</Container>
	)
}

export default BlogList