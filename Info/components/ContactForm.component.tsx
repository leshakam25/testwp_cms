'use client'
import type { IContactForm } from '@/Info/info.interface'
import { sendContactData } from '@/Info/info.services'
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
import { useForm } from 'react-hook-form'

const ContactForm = () => {
	const {
		handleSubmit,
		register,
		reset
	} = useForm<IContactForm>()
	
	const onSubmit = async (values: IContactForm) => {
		sendContactData(values);
		reset();
	}
	return (
		<Box
			maxW='320px'
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
			
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box
					display='flex'
					flexDirection='column'
					gap={4}
					className={'contact-form'}
				>
					<FormControl>
						<FormLabel htmlFor='firstname'>Ваше имя:</FormLabel>
						<Input
							{...register('name', {
								required: 'This is required'
							})}
							id='name'
							type='text'
							variant='outline'
							placeholder='ИМЯ'
						/>
					</FormControl>
					
					<FormControl>
						<FormLabel htmlFor='email'>Электронная почта:</FormLabel>
						<Input
							{...register('email', {
								required: 'This is required'
							})}
							id='email'
							type='email'
							variant='outline'
							placeholder='E-MAIL'
						/>
					</FormControl>
					
					<FormControl>
						<FormLabel htmlFor='message'>Сообщение:</FormLabel>
						<Textarea
							{...register('message', {
								required: 'This is required'
							})}
							id='message'
							variant='outline'
							placeholder='Оставьте сообщение, и мы с вами обязательно свяжемся'
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
