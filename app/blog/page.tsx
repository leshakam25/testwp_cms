import { getAllPosts } from '@/blog/blog.service'
import BlogList from '@/blog/components/blogList.component'
import PageTitle from '@/shared/components/pageTitle.component'

const BlogPage = async () => {
	
	const allPosts = await getAllPosts()
	
	return (
		<>
			<PageTitle title={"Блог"} subtitle={"Последние посты"}/>
			<BlogList allPosts={allPosts}/>
		</>
	)
}

export default BlogPage