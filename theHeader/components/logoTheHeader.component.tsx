import { Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

const LogoTheHeaderComponent = () => {
	return (
		<Link href={'/'}>
			<Text
				padding={0}
				margin={0}
				lineHeight={'22px'}
				fontSize={'32px'}
				fontWeight={'100'}
				textAlign={'center'}
			>
				ЛО
				<br />
				ГО
			</Text>
			{/* <Image */}
			{/*   src={'https://www.shutterstock.com/shutterstock/photos/2195761841/display_1500/stock-vector-hexagonal-letter-s-number-logo-coolest-logo-monogram-logo-2195761841.jpg'} */}
			{/*   alt='Image' */}
			{/*   w={'12'} */}
			{/*   h={'12'} */}
			{/*   rounded={'lg'} */}
			{/* /> */}
		</Link>
	)
}

export default LogoTheHeaderComponent