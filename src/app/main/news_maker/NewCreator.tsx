'use client'

import { URL_PAGE } from '@/cfg/url.cfg'
import CustomBtn from '@/components/ui/Btn'
import { MenuProps, options } from '@/constants/tag-select.constants'
import { newService } from '@/services/new.service'
import { INewRequire } from '@/types/new.types'
import { validateFile } from '@/utils/validateFile'
import {
	Button,
	Checkbox,
	FormControl,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	TextField,
} from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BiUpload } from 'react-icons/bi'
import { toast } from 'sonner'

const NewCreator = () => {
	const router = useRouter()

	const {
		register,
		control,
		handleSubmit,
		reset,
		clearErrors,
		formState: { errors },
	} = useForm<INewRequire>({
		defaultValues: {
			title: '',
			description: '',
			tag: [],
		},
		mode: 'onSubmit',
	})

	const onSubmit = (data: INewRequire) => {
		if (data.tag.length !== 0) {
			clearErrors('tag')
			console.log(data.tag.length)
		}
		console.log(data)
		mutate({ ...data, img: data.img })
	}

	const { mutate } = useMutation({
		mutationKey: ['new'],
		mutationFn: (data: INewRequire) => newService.create(data, data.img[0]),
		onSuccess() {
			toast.success(
				'Новость создана и появится на главной странице, как только её рассмотрит администрация'
			)
			reset()
			router.push(URL_PAGE.NEWS)
		},
		onError() {
			toast.error('Ошибка при создании')
		},
	})

	const [personName, setPersonName] = useState<string[]>([])

	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
		if (event) {
			clearErrors('tag')
		}
		const {
			target: { value },
		} = event
		setPersonName(typeof value === 'string' ? value.split(',') : value)
	}

	return (
		<form
			className='flex flex-col w-6/12 min-h-40 border-2 border-gray-400 p-6 rounded-2xl gap-4'
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className='min-h-6'>
				{errors.img && <p className='text-red-600'>{errors.img.message}</p>}
				<Button
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
					component='label'
					variant='contained'
					tabIndex={-1}
					startIcon={<BiUpload />}
				>
					Выберите картинку JPG или PNG
					<input
						{...register('img', {
							required: 'Выберите картинку',
							validate: value => validateFile(value as File[]),
						})}
						style={{ opacity: '0', width: 0 }}
						type='file'
						multiple
					/>
				</Button>
			</div>

			<div>
				<div className='min-h-6'>
					{errors.title && (
						<span className='text-red-600'>{errors.title.message}</span>
					)}
				</div>
				<Controller
					name='title'
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
							label='Название'
							type='text'
							fullWidth
							sx={
								errors.title
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

			<div>
				<div className='min-h-6'>
					{errors.description && (
						<span className='text-red-600'>{errors.description.message}</span>
					)}
				</div>
				<Controller
					name='description'
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
							label='Описание'
							fullWidth
							minRows={5}
							multiline
							sx={
								errors.description
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
					{errors.tag && (
						<span className='text-red-600'>{errors.tag.message}</span>
					)}
				</div>
			</div>

			<FormControl
				fullWidth
				sx={
					errors.tag
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
			>
				<InputLabel id='demo-multiple-checkbox-label'>Теги</InputLabel>
				<Select
					{...register('tag', { required: 'Выберите хотя-бы один тег!' })}
					labelId='demo-multiple-checkbox-label'
					id='demo-multiple-checkbox'
					label='Теги'
					multiple
					value={personName}
					onChange={handleChange}
					input={<OutlinedInput label='Теги' />}
					renderValue={selected => selected.join(', ')}
					MenuProps={MenuProps}
				>
					{options.map(e => (
						<MenuItem key={e} value={e}>
							<Checkbox checked={personName.includes(e)} />
							<ListItemText primary={e} />
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<CustomBtn title='Создать' type='submit' />
		</form>
	)
}

export default NewCreator
