import type { IPost, IPosts } from '@/blog/blog.interface'
import BlogListItem from '@/blog/components/BlogListItem.component'
import { Box } from '@chakra-ui/react'
import React from 'react'

interface BlogListProps {
	allPosts: IPosts
}

const BlogList = ({ allPosts }: BlogListProps) => {
	return (
		<Box
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
		</Box>
	)
}

export default BlogList