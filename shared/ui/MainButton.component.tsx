import { Button } from '@chakra-ui/react'

interface MainButtonProps {
	title: string
}

const MainButton = ({ title }: MainButtonProps) => {
	return (
		<Button
			variant={'outline'}
			rounded={'none'}
			border='none'
			color={'gray.600'}
			outline={`1px solid`}
			outlineColor={'gray.400'}
			textTransform={'uppercase'}
			fontWeight={300}
			_hover={{
				bg: 'gray.200',
				color: 'red.300',
				outline: 'none',
				transition: '0.4s ease-in-out'
			}}
		>
			{title}
		</Button>
	)
}

export default MainButton