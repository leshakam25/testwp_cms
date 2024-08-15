'use client'
import type { IPosts } from '@/Blog/blog.interface'
import { GET_ALL_POSTS } from '@/Blog/blog.queries'
import BlogList from '@/Blog/components/BlogList.component'
import LoadingComponent from '@/shared/components/loading.component'
import PageTitle from '@/shared/components/PageTitle.component'
import { swrFetcher } from '@/shared/lib/swrFetcher'
import useSWR from 'swr'

const BlogPage = () => {
	const { data, error, isLoading } = useSWR<{ posts: IPosts }>(GET_ALL_POSTS, swrFetcher)
	
	return (
		<>
			<PageTitle
				title={'Блог'}
				subtitle={'Последние посты'}
			/>
			{error &&
				<div>
					Ошибка при загрузке данных
					<br />
					{error.message}
				</div>
			}
			{isLoading && <LoadingComponent/>}
			{!isLoading && data && <BlogList allPosts={data.posts} />}
		</>
	)
}

export default BlogPage
