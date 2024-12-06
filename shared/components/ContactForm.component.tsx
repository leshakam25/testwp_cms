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

/**
 * Компонент, отображающий форму обратной связи в модальном окне.
 * Форма включает поля для имени, электронной почты, телефона и сообщения.
 * Кроме того, она содержит кнопку отправки и кнопку сброса.
 *
 * @returns {React.FC} - Функциональный компонент для формы обратной связи.
 */
const ContactForm = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const firstField = React.useRef(null)  // Ссылка на первое поле ввода
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors }
	} = useForm<IContactForm>()
	
	/**
	 * Обрабатывает отправку формы, отправляя данные контакта на сервер.
	 *
	 * @param {IContactForm} values - Объект, содержащий данные контакта.
	 */
	const onSubmit = async (values: IContactForm) => {
		try {
			await sendContactData(values)
			reset()  // Очищает форму после успешной отправки
		} catch (error) {
			console.error('Ошибка отправки данных:', error)
		}
	}
	
	/**
	 * Обрабатывает сброс формы, очищая все поля ввода.
	 */
	const onReset = () => {
		reset()  // Прямой вызов reset() для очистки формы
	}
	
	return (
		<>
			<MainButton onClick={onOpen} title={'Свяжитесь с нами'} />
			<Drawer
				isOpen={isOpen}
				placement='top'
				initialFocusRef={firstField}  // Устанавливает фокус на первом поле ввода
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
											{...register('name', { required: 'Обязательное поле' })}
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
											{...register('email', {
												required: 'Обязательное поле',
												pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
											})}
											id='email'
											type='email'
											variant='outline'
											placeholder='E-MAIL'
											borderRadius={0}
										/>
									</FormControl>
									
									<FormControl isInvalid={!!errors.phone}>
										<FormLabel lineHeight={'50%'} htmlFor='phone'>
											Телефон:
										</FormLabel>
										<Input
											{...register('phone', { required: 'Обязательное поле', pattern: /^\+?[1-9]\d{1,14}$/ })}
											id='phone'
											type='tel'
											variant='outline'
											placeholder='НОМЕР ТЕЛЕФОНА'
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
										{...register('message', { required: 'Обязательное поле' })}
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