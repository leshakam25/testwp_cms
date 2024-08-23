import type { IPost } from '@/Blog/blog.interface'
import BlogListItem from '@/Blog/components/BlogListItem.component'
import { Container } from '@chakra-ui/react'
import React from 'react'

interface BlogListProps {
	allPosts: any
	// allPosts: IPosts | undefined
	
}

const BlogList = ({ allPosts }: BlogListProps) => {
	return (
		<Container
			maxWidth={'6xl'}
			display={'flex'}
			flexWrap={'wrap'}
			flexDirection={'row'}
			justifyContent={'flex-start'}
			alignItems={'center'}
		>
			{!!allPosts &&
				allPosts.nodes &&
				allPosts.nodes.map((el: IPost, i: number) => {
					return (
						<BlogListItem
							post={el}
							key={i}
						/>
					)
				})
			}
		</Container>
	)
}

export default BlogList