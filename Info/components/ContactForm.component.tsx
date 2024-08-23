'use client'
import React from 'react'
import MainButton from '@/shared/ui/MainButton.component'
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Text,
	Textarea
} from '@chakra-ui/react'

interface IFormData {
	name: string;
  email: string;
  message: string;
}

const ContactForm =  () => {
	const handleSubmit = async  (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		
		const data: IFormData = {
			name: event.target.name.value,
			email: event.target.email.value,
			message: event.target.message.value
		}
		
		const jsonData = JSON.stringify(data)
		
		const response = await fetch('', {
			method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
		})
		
		const result = await response.json()
		console.log(result.data)
		
	}
	
	return (
		<Box
			maxW='320px'
			rounded='lg'
			border='1px solid lightgray'
			p={4}
		>
			<Text
				fontSize='30px'
				lineHeight='100%'
				mb={3}
				color='gray.700'
			>
				Свяжитесь с нами
			</Text>
			
			<form onSubmit={handleSubmit}>
				<Box
					display='flex'
					flexDirection='column'
					gap={4}
					className={'contact-form'}
				>
					<FormControl>
						<FormLabel htmlFor='firstname'>Ваше имя:</FormLabel>
						<Input
							id='firstname'
							type='text'
							variant='outline'
							placeholder='ИМЯ'
							isRequired
						/>
					</FormControl>
					
					<FormControl>
						<FormLabel htmlFor='email'>Электронная почта:</FormLabel>
						<Input
							id='email'
							type='email'
							variant='outline'
							placeholder='E-MAIL'
							isRequired
						/>
					</FormControl>
					
					<FormControl>
						<FormLabel htmlFor='message'>Сообщение:</FormLabel>
						<Textarea
							id='message'
							variant='outline'
							placeholder='Оставьте сообщение, и мы с вами обязательно свяжемся'
							isRequired
						/>
					</FormControl>
					
					<MainButton
						type='submit'
						title='Отправить'
					/>
					<MainButton
						type='reset'
						title='Сброс'
						textColor='red.300'
						outlineColor='red.200'
					/>
				</Box>
			</form>
		</Box>
	)
}

export default ContactForm
