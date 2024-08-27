'use client'
import Link from 'next/link'
import React from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'

const ForgotPassForm = () => {
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
						Вспомнить пароль
					</Text>
					<Input type='email' placeholder='Введите адрес почты' />
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
						      href={'/auth/register'}>
							<Button width={'100%'} type='button'>Регистрация</Button>
						</Link>
					</Box>
				</Box>
			</form>
		</Box>
	)
}

export default ForgotPassForm;