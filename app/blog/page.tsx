
import type { IPosts } from '@/Blog/blog.interface'
import { getAllPosts } from '@/Blog/blog.services'
import BlogList from '@/Blog/components/BlogList.component'
import PageTitle from '@/shared/components/PageTitle.component'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	applicationName: 'WPTest | Blog ',
	title: 'WPTest | Blog',
	description: 'WPTest | Blog | description'
}

const BlogPage = async () => {
	
	const allPosts: IPosts | undefined = await getAllPosts()
	
	return (
		<>
			<PageTitle
				title={'Блог'}
				subtitle={'Последние посты'}
				
			/>
			<BlogList allPosts={allPosts} />
		</>
	)
}

export default BlogPage