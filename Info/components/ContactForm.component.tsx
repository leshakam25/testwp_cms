'use client'
import React from 'react'
import type { IContactForm } from '@/Info/info.interface'
import { sendContactData } from '@/Info/info.services'
import MainButton from '@/shared/ui/MainButton.component'
import {
	Box,
	Button,
	Drawer, DrawerContent,
	DrawerOverlay,
	FormControl,
	FormLabel,
	Input,
	Text,
	Textarea,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerCloseButton, useDisclosure, Stack,
	Select
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const firstField = React.useRef()
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
		<>
			<MainButton onClick={onOpen} title={'Свяжитесь с нами'} />
			<Drawer
				isOpen={isOpen}
				placement='top'
				// initialFocusRef={firstField}
				onClose={onClose}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth='1px'>
						Обратная связь
					</DrawerHeader>
					
					<DrawerBody
						py={8}
					>
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
											// ref={firstField}
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
					</DrawerBody>
					
					<DrawerFooter borderTopWidth='1px'>
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
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default ContactForm