import type { IPosts } from '@/blog/blog.interface'
import { getAllPosts } from '@/blog/blog.services'
import BlogList from '@/blog/components/BlogList.component'
import PageTitle from '@/shared/components/PageTitle.component'

const BlogPage = async () => {
	const data: IPosts | undefined = await getAllPosts()
	
	return (
		<>
			<PageTitle
				title={'Блог'}
				subtitle={'Последние посты'}
			/>
			{!!data && <BlogList allPosts={data} />}
		</>
	)
}

export default BlogPage
