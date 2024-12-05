'use client'
import React from 'react'
import type { IContactForm } from '@/Info/info.interface'
import { sendContactData } from '@/Info/info.services'
import MainButton from '@/shared/ui/MainButton.component'
import {
	Box,
	Drawer, DrawerContent,
	DrawerOverlay,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerCloseButton, useDisclosure
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const firstField = React.useRef(null)  // Добавим ссылку на первое поле
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors }
	} = useForm<IContactForm>()
	
	const onSubmit = async (values: IContactForm) => {
		try {
			await sendContactData(values)
			reset()  // Очистить форму после успешной отправки
		} catch (error) {
			console.error('Ошибка отправки данных:', error)
		}
	}
	
	// Для кнопки сброса:
	const onReset = () => {
		reset()  // Является прямым вызовом reset()
	}
	
	return (
		<>
			<MainButton onClick={onOpen} title={'Свяжитесь с нами'} />
			<Drawer
				isOpen={isOpen}
				placement='top'
				initialFocusRef={firstField}  // Установить фокус на первое поле
				onClose={onClose}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth='1px'>
						Обратная связь
					</DrawerHeader>
					
					<DrawerBody py={8}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Box display='flex' flexDirection='column' className={'contact-form'} pb={4}>
								<Box display='flex' flexDirection='row' gap={4}>
									<FormControl isInvalid={!!errors.name}>
										<FormLabel lineHeight={'50%'} htmlFor='name'>
											Ваше имя:
										</FormLabel>
										<Input
											{...register('name', { required: 'This is required' })}
											ref={firstField}  // Добавление ссылки
											id='name'
											type='text'
											variant='outline'
											placeholder='ИМЯ'
											borderRadius={0}
										/>
									</FormControl>
									
									<FormControl isInvalid={!!errors.email}>
										<FormLabel lineHeight={'50%'} htmlFor='email'>
											Электронная почта:
										</FormLabel>
										<Input
											{...register('email', { required: 'This is required' })}
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
								<FormControl isInvalid={!!errors.message}>
									<FormLabel lineHeight={'50%'} htmlFor='message'>
										Сообщение:
									</FormLabel>
									<Textarea
										{...register('message', { required: 'This is required' })}
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
						<MainButton type='submit' title='Отправить' />
						<MainButton
							type='button'  // Убираем тип 'reset' и делаем сброс с помощью обработчика
							onClick={onReset}
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
