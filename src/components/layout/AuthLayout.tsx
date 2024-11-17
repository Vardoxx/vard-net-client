'use client'

import { URL_PAGE } from '@/cfg/url.cfg'
import { usePathname, useRouter } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'

const AuthLayout = ({ children }: PropsWithChildren) => {
	const [isCurrentForm, setCurrentForm] = useState<'login' | 'register'>(
		'login'
	)

	const currentPath = usePathname()
	const router = useRouter()

	const handleIsisCurrentForm = () => {
		if (currentPath === URL_PAGE.LOGIN) {
			setCurrentForm('register')
			router.push(URL_PAGE.REGISTER)
		}
		if (currentPath === URL_PAGE.REGISTER) {
			setCurrentForm('login')
			router.push(URL_PAGE.LOGIN)
		}
	}

	useEffect(() => {
		if (currentPath === URL_PAGE.LOGIN) setCurrentForm('login')
		if (currentPath === URL_PAGE.REGISTER) setCurrentForm('register')
	}, [currentPath])

	return (
		<div className='wrapper'>
			<div className='form-container'>
				<h1 className='text-5xl mb-5 title-shadow text-gray-200'>
					{isCurrentForm === 'login' ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}
				</h1>

				{children}
				<p className='mt-4'>
					{isCurrentForm === 'login'
						? 'Ещё нет аккаунта?'
						: 'Уже есть аккаунт?'}
					<a
						onClick={handleIsisCurrentForm}
						className='cursor-pointer border-b-2 border-gray-800 text-black ml-2 font-black '
					>
						{isCurrentForm === 'login' ? 'Зарегистрироваться' : 'Войти'}
					</a>
				</p>
			</div>
		</div>
	)
}

export default AuthLayout
