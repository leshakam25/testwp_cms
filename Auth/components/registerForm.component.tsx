'use client'
import { userRegister } from '@/Auth/auth.services'
import React from 'react'
import Link from 'next/link'
import type { IRegisterForm } from '@/Auth/auth.interface'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'

const RegisterForm = () => {
	const {
		handleSubmit,
		reset,
		register,
		formState: {
			errors,
			isSubmitting
		}
	} = useForm<IRegisterForm>()
	
	const onSubmit: SubmitHandler<FieldValues> = (values) => {
		userRegister(values);
		console.log(values.password)
	}
	
	return (
		<Box
			width={'100%'}
			height={'70vh'}
			display={'flex'}
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box
					display={'flex'}
					flexDirection='column'
					gap={4}
				>
					<Text
						textAlign={'center'}
						fontSize={'32px'}
					>
						Регистрация
					</Text>
					<Input
						{...register('name', {
							required: 'This is required',
						})}
						type='text'
						placeholder='Введите логин'
					/>
					{/* <Input */}
					{/* 	{...register('email', { */}
					{/* 		required: 'This is required', */}
					{/* 	})} */}
					{/* 	type='email' */}
					{/* 	placeholder='Адрес электронной почты' */}
					{/* /> */}
					<Input
						{...register('password', {
							required: 'This is required',
						})}
						type='password'
						placeholder='Пароль'
					/>
					<Box
						display={'flex'}
						flexDirection='row'
						justifyContent='space-between'
						gap={4}
					>
						<Button width={'100%'} type='submit'>ОК</Button>
						<Link style={{
							width: '100%'
						}}
						      href={'/auth'}>
							<Button width={'100%'} type='button'>Вход</Button>
						</Link>
						<Link style={{
							width: '100%'
						}}
						      href={'/auth/forgotPass'}>
							<Button width={'100%'} type='button'>Забыл пароль</Button>
						</Link>
					</Box>
				</Box>
			</form>
		</Box>
	)
}

export default RegisterForm