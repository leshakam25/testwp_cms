import { Box, Button } from '@chakra-ui/react'
import Link from 'next/link'

interface IListItem {
	title: string;
	href: string;
}

const navLinks: IListItem[] = [
	{
		title: 'Home',
		href: '/'
	},
	{
		title: 'About',
		href: '/about'
	},
	{
		title: 'Blog',
		href: '/blog'
	},
	{
		title: 'Contact',
		href: '/contact'
	}
]

const NavTheHeaderComponent = () => {
	return (
		<Box
			as={'nav'}
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			listStyleType={'none'}
			gap={2}
		>
			{!!navLinks &&
				navLinks.map((el, i) => (
					<Link key={i} href={el.href}>
						<Button
							colorScheme={'green'}
							variant={'outline'}
						>
							{el.title}
						</Button>
					</Link>
				))
			}
		</Box>
	)
}

export default NavTheHeaderComponent