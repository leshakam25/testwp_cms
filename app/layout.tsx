import { Providers } from '@/app/providers'
import TheHeaderComponent from '@/TheHeader/components/theHeader.component'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'normalize.css'
import React from 'react'

// Инициализация шрифта
const inter = Inter({ subsets: ['latin'] })

// Метаданные приложения
export const metadata: Metadata = {
	applicationName: 'WPTest',
	title: 'WPTest | Blog',
	description: 'WPTest | Blog | description'
}

type RootLayoutProps = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang='en'>
		<body className={inter.className}>
		<Providers>
			<Grid
				className={inter.className}
				templateAreas={`
					"header"
          "main"
          `}
				display={'flex'}
				flexDirection={'column'}
				position={'relative'}
				minH={'100vh'}
			>
				{/* Компонент заголовка */}
				<GridItem area='header' as='header'>
					<TheHeaderComponent />
				</GridItem>
				
				{/* Основной контент */}
				<GridItem area='main' as='main'>
					<Container maxW='full'>
						{children}
					</Container>
				</GridItem>
				
				{/* <GridItem */}
				{/* 	area='footer' */}
				{/* 	as='footer' */}
				{/* 	position={'absolute'} */}
				{/* 	bottom={0} */}
				{/* 	width={'100%'} */}
				{/* 	 */}
				{/* > */}
				{/* 	<TheFooterComponent /> */}
				{/* </GridItem> */}
			</Grid>
		</Providers>
		</body>
		</html>
	)
}

export default RootLayout
