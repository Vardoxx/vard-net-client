'use client'

import { URL_PAGE } from '@/cfg/url.cfg'
import UserAvatar from '@/components/ui/UserAvatar'
import { emailRegex, lettersRegex } from '@/constants/regex.constants'
import { useLogout } from '@/hooks/useLogout'
import { useProfile } from '@/hooks/useProfile'
import { useWidget } from '@/hooks/useWidget'
import { userService } from '@/services/user.service'
import { block } from '@/store/slices/passwordConfirm.slice'
import { RootState } from '@/store/store'
import { IUser } from '@/types/auth.types'
import { validateFile } from '@/utils/validateFile'
import { Button, Skeleton, TextField } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BiUpload } from 'react-icons/bi'
import { FaDoorOpen, FaPenAlt } from 'react-icons/fa'
import { GiConfirmed } from 'react-icons/gi'
import { MdCancel } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'

const Profile = () => {
	const passwordStatus = useSelector(
		(state: RootState) => state.passwordConfirm.status
	)

	const dispatch = useDispatch()

	useEffect(() => {
		setTimeout(() => {
			dispatch(block())
		}, 300000)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [passwordStatus])

	const { data, isLoading, refetch } = useProfile()

	const role = data?.user.role

	const name = useMemo(() => data?.user.name || '', [data])

	const email = useMemo(() => data?.user.email || '', [data])

	const [open] = useWidget()

	const {
		control,
		register,
		handleSubmit,

		formState: { errors },
	} = useForm<IUser>({
		defaultValues: {
			name,
			email,
		},
		values: data?.user,
		mode: 'onSubmit',
	})

	const [logout] = useLogout(true)

	const { mutate } = useMutation({
		mutationKey: ['dataChange'],
		mutationFn: (data: IUser) => userService.update(data),
		onSuccess() {
			toast.success('Данные профиля обновлены')
			dispatch(block())
			refetch()
		},
		onError(e) {
			console.log(e)
		},
	})

	const onSubmit = (data: IUser) => {
		mutate(data)
	}

	return (
		<>
			<form
				className='flex w-full h-min p-6 gap-6 rounded-3xl bg-white'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='relative'>
					<UserAvatar
						avatar={data?.user.avatar as string}
						name={data?.user.name}
						width={250}
						height={250}
						fontSize={110}
					/>
					{passwordStatus ? (
						<Button
							style={{
								borderRadius: '50%',
								width: '250px',
								height: '250px',
								position: 'absolute',
								top: 0,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
							component='label'
							variant='contained'
							tabIndex={-1}
						>
							Сменить аватар
							<BiUpload
								style={{ borderRadius: '50%', width: '100px', height: '100px' }}
							/>
							<input
								{...register('avatar', {
									validate: value => validateFile(value as File[]),
								})}
								style={{ opacity: '0', width: 0 }}
								type='file'
								multiple
							/>
						</Button>
					) : null}
				</div>

				<ul className='flex flex-col gap-5'>
					{!isLoading ? (
						<Controller
							name='email'
							control={control}
							rules={{
								pattern: {
									value: emailRegex,
									message: 'Только буквы',
								},
								minLength: {
									value: 2,
									message: 'Минимальное кол-во символов: 6!',
								},
							}}
							render={({ field }) => (
								<TextField
									{...field}
									fullWidth
									disabled={passwordStatus ? false : true}
									size='small'
									label='Почта'
									sx={
										errors.name
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
					) : (
						<Skeleton
							variant='rectangular'
							width={235}
							height={40}
							className='rounded-2xl'
						/>
					)}

					{!isLoading ? (
						<Controller
							name='name'
							control={control}
							rules={{
								pattern: {
									value: lettersRegex,
									message: 'Только буквы',
								},
								minLength: {
									value: 2,
									message: 'Минимальное кол-во символов: 6!',
								},
							}}
							render={({ field }) => (
								<TextField
									{...field}
									fullWidth
									disabled={passwordStatus ? false : true}
									size='small'
									label='Имя'
									sx={
										errors.name
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
					) : (
						<Skeleton
							variant='rectangular'
							width={235}
							height={40}
							className='rounded-2xl'
						/>
					)}

					<li>
						{role === 'admin' ? (
							<Link href={URL_PAGE.PROFILE} className='btn bg-blue-400'>
								Перейти к панели админа!
							</Link>
						) : null}
					</li>

					<li>
						{passwordStatus ? (
							<div className='flex gap-3'>
								<Button
									onClick={() => dispatch(block())}
									variant='contained'
									startIcon={<MdCancel />}
									color='error'
								>
									Отмена
								</Button>

								<Button
									type='submit'
									variant='contained'
									endIcon={<GiConfirmed />}
									color='success'
								>
									Подтвердить
								</Button>
							</div>
						) : (
							<div className='flex gap-3'>
								<Button
									onClick={() => logout()}
									variant='contained'
									startIcon={<FaDoorOpen />}
									color='error'
								>
									Выйти
								</Button>

								<Button
									onClick={() => open('PasswordConfirm')}
									endIcon={<FaPenAlt />}
									variant='contained'
								>
									Редактировать
								</Button>
							</div>
						)}
					</li>
				</ul>
			</form>
		</>
	)
}

export default Profile
