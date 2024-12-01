'use client'

import { useProfile } from '@/hooks/useProfile'
import { authService } from '@/services/auth.service'
import { confirm } from '@/store/slices/passwordConfirm.slice'
import { closeWidget } from '@/store/slices/widget.slice'
import { Button, TextField } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

const PasswordConfirmWidget = () => {
	const { data } = useProfile()
	const dispatch = useDispatch()

	const email = data?.user.email || ''

	const {
		control,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<{ password: string; email: string }>({
		defaultValues: {
			email: email,
			password: '',
		},
		mode: 'onSubmit',
	})

	const { mutate } = useMutation({
		mutationKey: ['getAccessToDataChange'],
		mutationFn: (data: { password: string; email: string }) =>
			authService.getAccessToDataChange(data),
		onSuccess() {
			dispatch(confirm())
			dispatch(closeWidget())
			toast.success('Доступ разрешён на 5 мин')
		},
		onError() {
			setError('password', { message: 'Неверный пароль' })
		},
	})

	const onSubmit = (data: { password: string; email: string }) => {
		mutate(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex gap-6 flex-col'>
			Введите пароль для подтверждения:
			<div>
				{errors.password && (
					<p className='text-red-600'>{errors.password.message}</p>
				)}
				<Controller
					name='password'
					control={control}
					rules={{
						required: 'Введите пароль',
					}}
					render={({ field }) => (
						<TextField
							{...field}
							fullWidth
							size='small'
							label='Пароль'
							sx={
								errors.password
									? {
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													borderColor: 'red',
												},
												'&:hover fieldset': {
													borderColor: 'red',
												},
												'&.Mui-focused fieldset': {
													borderColor: 'red',
												},
											},
									  }
									: null
							}
						/>
					)}
				/>
			</div>
			<Button variant='contained' type='submit'>
				Отправить
			</Button>
		</form>
	)
}

export default PasswordConfirmWidget
