import type { IPosts } from '@/blog/blog.interface'
import { getAllPosts, getPostBySlug } from '@/blog/blog.service'
import PageTitle from '@/shared/components/PageTitle.component'
import { Box } from '@chakra-ui/react'

interface BlogPostPageProps {
	params: {
		postSlug: string;
	};
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
	const { postSlug } = params
	const singlePost: any = await getPostBySlug(postSlug)
	
	return (
		<Box>
				{!!postSlug && postSlug}
			{!!singlePost &&
				JSON.stringify(singlePost)}
			<PageTitle title={''} subtitle={''} />
		</Box>
	)
}

export default BlogPostPage