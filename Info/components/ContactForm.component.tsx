import { Box, FormControl, FormHelperText, FormLabel, Input, Text, Textarea } from '@chakra-ui/react'

const ContactForm = () => {
	return (
		<Box>
			<Text
				variant={'h2'}
			>
				Свяжитесь с нами
			</Text>
			<form>
				<Box
					display={'flex'}
					flexDirection={'column'}
					gap={4}
					width={'320px'}
				>
					<FormControl>
						<FormLabel>Ваше имя:</FormLabel>
						<Input
							id={'firstname'}
							type={'text'}
							variant='outline'
							placeholder='ФИО'
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Электронная почта:</FormLabel>
						<Input
							id={'email'}
							type={'email'}
							variant='outline'
							placeholder='E-MAIL'
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Сообщение:</FormLabel>
						<Textarea
							id={'message'}
							variant='outline'
							placeholder='ФИО'
						/>
					</FormControl>
				
				</Box>
			</form>
		</Box>
	)
}

export default ContactForm