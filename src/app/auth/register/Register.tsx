'use client'

import { URL_PAGE } from '@/cfg/url.cfg'
import CustomBtn from '@/components/ui/Btn'
import { emailRegex, lettersRegex } from '@/constants/regex.constants'
import { authService } from '@/services/auth.service'
import { IRegisterForm } from '@/types/auth.types'
import { InputType } from '@/types/input.types'
import { TextField } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { GiBeastEye, GiEyelashes } from 'react-icons/gi'
import { toast } from 'sonner'

const Register = () => {
	const router = useRouter()

	const [showPass, setShowPass] = useState<InputType>('password')
	const {
		control,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<IRegisterForm>({
		defaultValues: {
			email: '',
			password: '',
			repeatPassword: '',
			name: '',
		},
		mode: 'onSubmit',
	})

	const onSubmit = async (data: IRegisterForm) => {
		const password = data.password
		const repeatPassword = data.repeatPassword

		if (password !== repeatPassword) {
			setError('repeatPassword', {
				message: 'Пароли не совпадают',
			})
		} else {
			mutate(data)
		}
	}

	const { mutate } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IRegisterForm) => authService.register(data),
		onSuccess() {
			toast.success('Вы успешно зарегистрировались')
			router.push(URL_PAGE.LOGIN)
		},
		onError() {
			toast.success('Пользователь с таким email уже существует')
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
					{errors.name && <p className='text-red-600'>{errors.name.message}</p>}
				</div>
				<Controller
					name='name'
					control={control}
					rules={{
						required: 'Поле обязательно!',
						minLength: {
							value: 6,
							message: 'Минимальное кол-во символов: 6!',
						},
						maxLength: {
							value: 255,
							message: 'Превышено максимальное кол-во символов: 255!',
						},
						pattern: { value: lettersRegex, message: 'Только буквы' },
					}}
					render={({ field }) => (
						<TextField
							{...field}
							label='Имя'
							fullWidth
							size='medium'
							sx={
								errors.name
									? {
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'red', // Цвет рамки по умолчанию
												},
												'&:hover fieldset': {
													borderColor: 'red', // Цвет при наведении
												},
												'&.Mui-focused fieldset': {
													borderColor: 'red', // Цвет при фокусе
												},
											},
									  }
									: null
							}
						/>
					)}
				/>
			</div>
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
						<TextField
							{...field}
							label='Почта'
							fullWidth
							size='medium'
							sx={
								errors.email
									? {
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'red', // Цвет рамки по умолчанию
												},
												'&:hover fieldset': {
													borderColor: 'red', // Цвет при наведении
												},
												'&.Mui-focused fieldset': {
													borderColor: 'red', // Цвет при фокусе
												},
											},
									  }
									: null
							}
						/>
					)}
				/>
			</div>

			<div className='relative'>
				<div className='min-h-6'>
					{errors.password && (
						<p className='text-red-600'>{errors.password.message}</p>
					)}
				</div>
				<Controller
					name='password'
					control={control}
					rules={{
						required: 'Поле обязательно!',
						minLength: { value: 6, message: 'Минимальное кол-во символов: 6' },
						maxLength: {
							value: 255,
							message: 'Превышено максимальное кол-во символов: 255!',
						},
					}}
					render={({ field }) => (
						<TextField
							{...field}
							label='Пароль'
							fullWidth
							size='medium'
							type={showPass}
							sx={
								errors.password
									? {
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'red', // Цвет рамки по умолчанию
												},
												'&:hover fieldset': {
													borderColor: 'red', // Цвет при наведении
												},
												'&.Mui-focused fieldset': {
													borderColor: 'red', // Цвет при фокусе
												},
											},
									  }
									: null
							}
						/>
					)}
				/>
				{showPass === 'password' ? (
					<GiBeastEye onClick={handleShowPass} className='password-eye' />
				) : (
					<GiEyelashes onClick={handleShowPass} className='password-eye' />
				)}
			</div>

			<div className='mb-6'>
				<div className='min-h-6'>
					{errors.repeatPassword && (
						<p className='text-red-600'>{errors.repeatPassword.message}</p>
					)}
				</div>
				<Controller
					name='repeatPassword'
					control={control}
					rules={{
						required: 'Поле обязательно!',
						maxLength: {
							value: 255,
							message: 'Превышено максимальное кол-во символов: 255!',
						},
					}}
					render={({ field }) => (
						<TextField
							{...field}
							label='Повторите пароль'
							fullWidth
							size='medium'
							sx={
								errors.repeatPassword
									? {
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'red', // Цвет рамки по умолчанию
												},
												'&:hover fieldset': {
													borderColor: 'red', // Цвет при наведении
												},
												'&.Mui-focused fieldset': {
													borderColor: 'red', // Цвет при фокусе
												},
											},
									  }
									: null
							}
						/>
					)}
				/>
			</div>

			<CustomBtn title='Зарегистрироваться' type='submit' />
		</form>
	)
}

export default Register
