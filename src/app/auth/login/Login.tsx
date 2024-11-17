'use client'

import { URL_PAGE } from '@/cfg/url.cfg'
import CustomBtn from '@/components/ui/CustomBtn'
import CustomInput from '@/components/ui/CustomInput'
import { emailRegex } from '@/constants/regex.constants'
import { authService } from '@/services/auth.service'
import { ILoginForm } from '@/types/auth.types'
import { InputType } from '@/types/custom-input.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { GiBeastEye, GiEyelashes } from 'react-icons/gi'
import { toast } from 'sonner'

const Login = () => {
	const router = useRouter()

	const [showPass, setShowPass] = useState<InputType>('password')

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginForm>({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onSubmit',
	})

	const onSubmit = (data: ILoginForm) => {
		mutate(data)
	}

	const { mutate } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: ILoginForm) => authService.login(data),
		onSuccess() {
			toast.success('Успешный вход')
			router.push(URL_PAGE.MAIN)
		},
		onError() {
			toast.error('Пользователя с таким email не существует')
		},
	})

	const handleShowPass = () => {
		if (showPass === 'password') {
			setShowPass('text')
		} else {
			setShowPass('password')
		}
	}

	return (
		<form
			className='flex flex-col w-6/12 min-h-40 border-2 border-gray-400 p-6 rounded-2xl gap-4'
			onSubmit={handleSubmit(onSubmit)}
		>
			<div>
				<div className='min-h-6'>
					{errors.email && (
						<p className='text-red-600'>{errors.email.message}</p>
					)}
				</div>
				<Controller
					name='email'
					control={control}
					rules={{
						required: 'Поле обязательно!',
						maxLength: {
							value: 255,
							message: 'Превышено максимальное кол-во символов: 255!',
						},
						pattern: { value: emailRegex, message: 'Почта не корректна!' },
					}}
					render={({ field }) => (
						<CustomInput
							{...field}
							placeholder='Почта'
							type='text'
							dirty={errors.email === undefined ? 'none' : '2px solid red'}
						/>
					)}
				/>
			</div>

			<div className='mb-6 relative'>
				<div className='min-h-6'>
					{errors.password && (
						<span className='text-red-600'>{errors.password.message}</span>
					)}
				</div>
				<Controller
					name='password'
					control={control}
					rules={{
						required: 'Поле обязательно!',
						maxLength: {
							value: 255,
							message: 'Превышено максимальное кол-во символов: 255!',
						},
					}}
					render={({ field }) => (
						<CustomInput
							{...field}
							placeholder='Пароль'
							type={showPass}
							dirty={errors.password === undefined ? 'none' : '2px solid red'}
						/>
					)}
				/>
				{showPass === 'password' ? (
					<GiBeastEye onClick={handleShowPass} className='password-eye' />
				) : (
					<GiEyelashes onClick={handleShowPass} className='password-eye' />
				)}
			</div>

			<CustomBtn title='Войти' type='submit' />
		</form>
	)
}

export default Login