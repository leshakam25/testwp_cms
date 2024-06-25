import type { IPost } from '@/blog/blog.interface'
import BlogListItem from '@/blog/components/BlogListItem.component'
import BlogListItemComponent from '@/blog/components/BlogListItem.component'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface BlogListProps {
	allPosts: {
		nodes: IPost[];
		pageInfo: {
			endCursor: string;
			hasNextPage: boolean;
			hasPreviousPage: boolean;
			startCursor: string;
		};
		totalCount: number;
		totalPages: number;
	};
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
							key={el.id}
						/>
					)
				})
			}
		</Box>
	)
}

export default BlogList