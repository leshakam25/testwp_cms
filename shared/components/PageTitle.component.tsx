import { Box, Text } from '@chakra-ui/react'

interface PageTitleProps {
	title: string,
	subtitle?: string
}

/**
 * Компонент для отображения заголовка страницы с необязательным подзаголовком.
 *
 * @param title - Основной заголовок для отображения.
 * @param subtitle - Необязательный подзаголовок, отображаемый под основным заголовком.
 *
 * @returns Компонент Box, содержащий заголовок и, при наличии, подзаголовок.
 */

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
    return (
        <Box
            display={'flex'}
            flexFlow={'column nowrap'}
            justifyContent={'center'}
            alignItems={'center'}
            h={'220px'}
            mb={4}
            rounded={'md'}
        >
            <Text
                fontSize={42}
                color={'gray.500'}
                fontWeight={300}
            >
                {title}
            </Text>
            {
                !!subtitle &&
                <Text
                    fontSize={22}
                    color={'gray.500'}
                    fontWeight={200}
                >
                    {subtitle}
                </Text>
            }
        </Box>
    )
}

export default PageTitle