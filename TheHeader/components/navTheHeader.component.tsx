import MainButton from '@/shared/ui/MainButton.component'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'

interface INavListItem {
	title: string;
	href: string;
}

const navLinks: INavListItem[] = [
	{
		title: 'Вход',
		href: '/auth'
	},
	{
		title: 'Главная',
		href: '/'
	},
	{
		title: 'О себе',
		href: '/info/o-nas'
	},
	{
		title: 'Блог',
		href: '/blog'
	},
	{
		title: 'Контакты',
		href: '/info/kontakty'
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
				navLinks.map((el: INavListItem, i: number) => (
					<Link key={i} href={el.href}>
						<MainButton title={el.title} />
					</Link>
				))
			}
		</Box>
	)
}

export default NavTheHeaderComponent