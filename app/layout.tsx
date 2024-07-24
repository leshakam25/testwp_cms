import { Providers } from '@/app/providers'
import TheHeaderComponent from '@/theHeader/components/theHeader.component'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'normalize.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	applicationName: 'WPTest | Blog | applicationName',
	title: 'WPTest | Blog',
	description: 'WPTest | Blog | description'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang='en'>
		<body className={inter.className}>
		<Providers>
			<Grid
				className={inter.className}
				templateAreas={
					`"header"
            	"main"`
				}
				gridTemplateRows={'1fr 30px'}
				gridTemplateColumns={'1fr'}
				display={'flex'}
				flexDirection={'column'}
			>
				
				{/* Компонент заголовка */}
				<GridItem
					area={'header'}
					as={'header'}
				>
					<TheHeaderComponent />
				</GridItem>
				
				<GridItem
					area={'main'}
					as={'main'}
				>
					<Container
						maxW={'full'}
					>
						{children}
					</Container>
				</GridItem>
			</Grid>
		</Providers>
		</body>
		</html>
	)
}
