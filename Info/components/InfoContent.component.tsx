import ContactForm from '@/shared/components/ContactForm.component'
import ContactForm2 from '@/shared/components/ContactForm.component'
import type { IPageNode } from '@/Info/info.interface'
import { Box, Container, Text } from '@chakra-ui/react'
import { sanitize } from 'isomorphic-dompurify'
import React from 'react'
import '@/shared/styles/content.style.css'

interface InfoContentProps {
	pageData: IPageNode | undefined
}

/**
 * Функциональный компонент, который отображает содержимое страницы на основе предоставленных `pageData`.
 * Он включает заголовок, контент и компонент ContactForm, если слаг страницы равен 'kontakty'.
 *
 * @param pageData - Данные страницы для отображения. Они должны быть объектом типа `IPageNode` или `undefined`.
 * @returns React-элемент, представляющий содержимое страницы.
 */
const InfoContent = ({ pageData }: InfoContentProps) => {
    if (!pageData) {
        return <Box>Страница не найдена</Box>
    }
    
    return (
        <Container
            maxW={'6xl'}
            mt={8}
        >
            <Box
                height={120}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Text
                    opacity={0.8}
                    px={2}
                    fontSize={24}
                    lineHeight={'38px'}
                    rounded={'sm'}
                    textAlign={'center'}
                >
                    {pageData.title}
                </Text>
            </Box>
            {!!pageData.slug &&
                pageData.slug === 'kontakty' &&
                <ContactForm />
            }
            <Box
                className={'singlePostContent'}
                fontSize={'16px'}
                lineHeight={'28px'}
                fontWeight={'regular'}
                height={120}
                textAlign={'justify'}
                dangerouslySetInnerHTML={{
                    __html: sanitize(pageData.content)
                }}
            >
            </Box>
        </Container>
    )
}

export default InfoContent