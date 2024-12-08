'use client'

import sortingBarItems from '@/constants/sorting-bar.constants'
import { sortByName, sortByTag } from '@/store/slices/sort.slice'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const SortingBar = () => {
	const dispatch = useDispatch()

	const [isTitle, setTitle] = useState<string>('')

	useEffect(() => {
		if (!isTitle) dispatch(sortByName(''))

		console.log(isTitle)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isTitle])

	return (
		<>
			<div className='w-72 gap-1 flex flex-wrap items-center'>
				{sortingBarItems.map(e => (
					<div
						onClick={() => dispatch(sortByTag(e.title.toLowerCase()))}
						key={e.id}
						className={`flex cursor-pointer items-center border-2 gap-2 p-1 rounded-lg ${e.border} transition-all hover:scale-105 active:bg-gray-300`}
					>
						<div className={`text-xl ${e.color}`}>{e.Icon}</div>
						<h1 className='text-sm font-bold'>{e.title}</h1>
					</div>
				))}
			</div>

			<div className='w-60 relative'>
				<input
					type='text'
					className='w-full text-sm bg-slate-200 p-2 rounded-tl-3xl rounded-bl-3xl'
					placeholder='Поиск по названию...'
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setTitle(e.target.value)
					}
				/>
				<button
					onClick={() => dispatch(sortByName(isTitle))}
					className='bg-white p-2 text-sm absolute transition-all rounded-tr-full rounded-br-full hover:bg-blue-600 hover:text-white'
				>
					Найти
				</button>
			</div>
		</>
	)
}

export default SortingBar
