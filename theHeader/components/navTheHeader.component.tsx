import MainButton from '@/shared/ui/MainButton.component'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'

interface INavListItem {
	title: string;
	href: string;
}

const navLinks: INavListItem[] = [
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
			gap={1}
		>
			{!!navLinks &&
				navLinks.map((el, i) => (
					<Link key={i} href={el.href}>
						<MainButton title={el.title} />
					</Link>
				))
			}
		</Box>
	)
}

export default NavTheHeaderComponent