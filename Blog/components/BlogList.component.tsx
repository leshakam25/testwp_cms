import type { IPost, IPosts } from '@/Blog/blog.interface'
import BlogListItem from '@/Blog/components/BlogListItem.component'
import { Container } from '@chakra-ui/react'
import React from 'react'

interface BlogListProps {
    // allPosts: any
    allPosts: IPosts | undefined
}

/**
 * Компонент для отображения списка блог-постов.
 * 
 * Этот компонент принимает массив блог-постов и отображает их в контейнере,
 * представляя каждый пост как компонент BlogListItem.
 *
 * @param {BlogListProps} props - Свойства, передаваемые компоненту.
 * @param {IPosts | undefined} props.allPosts - Объект, содержащий блог-посты для отображения.
 *                               Ожидается, что у него есть свойство 'nodes', которое является массивом объектов постов.
 * @returns {JSX.Element} React-компонент, отображающий список блог-постов.
 */
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