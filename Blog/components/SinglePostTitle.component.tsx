import DateComponent from '@/shared/components/Date.component'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface SinglePostTitleProps {
	imgUrl: string | undefined;
	title: string;
	modified: string;
}

/**
 * Функциональный компонент, отображающий заголовок одиночного поста с фоновым изображением.
 *
 * @param imgUrl - URL фонового изображения.
 * @param title - Заголовок поста.
 * @param modified - Дата и время последнего изменения в формате ISO 8601.
 *
 * @returns React-элемент, представляющий заголовок одиночного поста с фоновым изображением.
 */
const SinglePostTitle = ({ imgUrl, title, modified }: SinglePostTitleProps) => {
    return (
        <Box
            display={'flex'}
            flexFlow={'column nowrap'}
            justifyContent={'center'}
            alignItems={'center'}
            backgroundImage={imgUrl}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            height={'320px'}
        >
            <Box
                display={'flex'}
                flexFlow={'column nowrap'}
                justifyContent={'center'}
                alignItems={'center'}
                bgColor={'white'}
                opacity={0.5}
                px={8}
                py={2}
                rounded={'3xl'}
            >
                <Text
                    fontWeight={'500'}
                    fontSize={'4.25rem'}
                >
                    {title}
                </Text>
                <Text
                    display={'flex'}
                    flexFlow={'nowrap row'}
                    fontSize={'1.25rem'}
                    pb={4}
                    textShadow={'0 0 25px rgba(255,255,255,.5), 0 0 15px rgba(255,255,255,.5)'}
                >
                    Последние изменения: &nbsp;
                    <DateComponent
                        dateString={modified}
                    />
                </Text>
            </Box>
        </Box>
    )
}

export default SinglePostTitle