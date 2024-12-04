import { Button } from '@chakra-ui/react'

interface MainButtonProps {
	title: string
	type?: 'button' | 'submit' | 'reset' | undefined
	outlineColor?: string | undefined
	textColor?: string | undefined
	onClick?: () => void
}

const MainButton = ({
	                    title,
	                    type,
	                    textColor,
	                    outlineColor,
	                    onClick
                    }: MainButtonProps) => {
	return (
		<Button
			variant={'outline'}
			rounded={'none'}
			border='none'
			onClick={onClick || undefined}
			color={textColor || 'gray.600'}
			outline={`1px solid`}
			outlineColor={outlineColor || 'gray.400'}
			textTransform={'uppercase'}
			fontWeight={300}
			type={type || 'button'}
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