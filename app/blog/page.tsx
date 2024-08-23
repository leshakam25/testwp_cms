import type { IPosts } from '@/Blog/blog.interface'
import { getAllPosts } from '@/Blog/blog.services'
import BlogList from '@/Blog/components/BlogList.component'
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
