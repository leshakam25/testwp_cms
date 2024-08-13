import type { ISinglePost } from '@/Blog/blog.interface'
import { getPostBySlug } from '@/Blog/blog.services'
import SinglePost from '@/Blog/components/SinglePost.component'
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