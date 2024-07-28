import { Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

const LogoTheHeaderComponent = () => {
	return (
		<Link href={'/'} >
			<Text
				position={'absolute'}
				top={2}
				padding={0}
				margin={0}
				lineHeight={'23px'}
				fontSize={'32px'}
				fontWeight={'100'}
				textAlign={'center'}
				_hover={{
					color: 'red.300',
					lineHeight: '36px',
					letterSpacing:'12px',
					transition: '1s ease-in-out',
				}}
			>
				ЛО
				<br />
				ГО
			</Text>
		</Link>
	)
}

export default LogoTheHeaderComponent