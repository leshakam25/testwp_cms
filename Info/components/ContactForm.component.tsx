"use client"
import {
	DialogActionTrigger,
	DialogBody,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import type { IContactForm } from '@/Info/info.interface'
import { sendContactData } from '@/Info/info.services'
import MainButton from '@/shared/ui/MainButton.component'
import { Box, Button, FormControl, FormLabel, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React, { useRef } from "react"
import { useForm } from 'react-hook-form'

const ContactForm = () => {
	const ref = useRef<HTMLInputElement>(null)
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
		<DialogRoot initialFocusEl={() => ref.current}>
			<DialogTrigger asChild>
				<Button variant="outline">
					Свяжитесь с нами
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
							Свяжитесь с нами
					</DialogTitle>
				</DialogHeader>
				<DialogBody pb="4">
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
					</form>
				</DialogBody>
				<DialogFooter>
					<DialogActionTrigger asChild>
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
					</DialogActionTrigger>
					<Button>Save</Button>
				</DialogFooter>
			</DialogContent>
		</DialogRoot>
	)
}

export default ContactForm