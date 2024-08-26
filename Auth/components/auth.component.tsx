'use client'
import LoginForm from '@/Auth/components/loginForm.component'
import React from 'react'
import { Box,  } from '@chakra-ui/react'

const AuthComponent = () => {
	return (
		<Box
			mt={'64px'}
			height={'70vh'}
			display='flex'
			alignItems='center'
			justifyContent='center'
			w='100%'
			p={4}
			bg='gray.50'
			boxShadow='0 0 20px rgba(0, 0, 0, 0.15)'
			borderRadius='lg'
			mx='auto'
			maxW={'400px'}
			border='1px solid #E2E8F0'
			transition='0.3s all ease-in-out'
			overflow='hidden'
		>
			<LoginForm />
		</Box>
	)
}

export default AuthComponent