import { Box, Button, ListItem, UnorderedList } from '@chakra-ui/react'
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
		<Box as={'nav'}>
			<UnorderedList
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				listStyleType={'none'}
				gap={2}
			>
				{!!navLinks &&
					navLinks.map((el, i) => (
						<ListItem key={i}>
							<Link href={el.href}>
								<Button
									colorScheme={'green'}
								>
									{el.title}
								</Button>
							</Link>
						</ListItem>
					))
				}
			</UnorderedList>
		</Box>
	)
}

export default NavTheHeaderComponent