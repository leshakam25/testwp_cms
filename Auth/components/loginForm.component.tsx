'use client'
import Link from 'next/link'
import React from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'

const LoginForm = () => {
	const submitHandler = () => {
	
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
			<form onSubmit={submitHandler}>
				<Box
					display={'flex'}
					flexDirection='column'
					gap={4}
				>
					<Text
						textAlign={'center'}
						fontSize={'32px'}
					>
						Вход
					</Text>
					<Input type='text' placeholder='Логин' />
					<Input type='password' placeholder='Пароль' />
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
						      href={'/auth/register'}>
							<Button width={'100%'} type='button'>Регистрация</Button>
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

export default LoginForm