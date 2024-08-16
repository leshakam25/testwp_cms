import type { ISinglePost } from '@/blog/blog.interface'
import { getPostBySlug } from '@/blog/blog.services'
import SinglePost from '@/blog/components/SinglePost.component'
import { Box } from '@chakra-ui/react'

interface BlogPostPageProps {
	params: {
		postSlug: string;
	};
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
	const { postSlug } = params
	const singlePost: ISinglePost | undefined = await getPostBySlug(postSlug)
	
	return (
		<Box>
			{!!singlePost &&
				<SinglePost
					singlePost={singlePost}
				/>
			}
		</Box>
	)
}

export default BlogPostPage