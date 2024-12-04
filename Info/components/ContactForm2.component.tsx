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

const ContactForm2 = () => {
	const {
		handleSubmit,
		register,
		reset
	} = useForm<IContactForm>()
	
	const onSubmit = async (values: IContactForm) => {
		sendContactData(values)
		reset()
	}
	return (
		<Box
			maxW='full'
			border='1px solid lightgray'
			p={4}
			bgColor={'blue.50'}
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
					className={'contact-form'}
					pb={4}
				>
					<Box
						display='flex'
						flexDirection='row'
						gap={4}
					>
						<FormControl>
							<FormLabel
								lineHeight={'50%'}
								htmlFor='firstname'
							>
								Ваше имя:
							</FormLabel>
							<Input
								{...register('name', {
									required: 'This is required'
								})}
								id='name'
								type='text'
								variant='outline'
								placeholder='ИМЯ'
								borderRadius={0}
							/>
						</FormControl>
						
						<FormControl>
							<FormLabel
								lineHeight={'50%'}
								htmlFor='email'
							>
								Электронная почта:
							</FormLabel>
							<Input
								{...register('email', {
									required: 'This is required'
								})}
								id='email'
								type='email'
								variant='outline'
								placeholder='E-MAIL'
								borderRadius={0}
							/>
						</FormControl>
					</Box>
				</Box>
				
				<Box>
					<FormControl>
						<FormLabel
							lineHeight={'50%'}
							htmlFor='message'
						>
							Сообщение:</FormLabel>
						<Textarea
							{...register('message', {
								required: 'This is required'
							})}
							id='message'
							variant='outline'
							placeholder='Оставьте сообщение, и мы с вами обязательно свяжемся'
							borderRadius={0}
						/>
					</FormControl>
				</Box>
				
				<Box
					pt={4}
					gap={4}
					display='flex'
					flexDirection={'row'}
					justifyContent='left'
					alignItems={'center'}
				>
					<Box>
						<MainButton
							type='submit'
							title='Отправить'
						/>
					</Box>
					<Box>
						<MainButton
							type='reset'
							title='Сброс'
							textColor='red.300'
							outlineColor='red.200'
						/>
					</Box>
				</Box>
			</form>
		</Box>
	)
}

export default ContactForm2
