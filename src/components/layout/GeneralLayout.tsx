'use client'

import { URL_PAGE } from '@/cfg/url.cfg'
import { useProfile } from '@/hooks/useProfile'
import { authService } from '@/services/auth.service'
import { Avatar } from '@mui/material'
import Link from 'next/link'
import { PropsWithChildren, useEffect, useState } from 'react'
import LayoutSortingBar from '../sorting-bar/SortingBar'
import CustomBtn from '../ui/Btn'
import StringAvatar from '../ui/StringAvatar'

const GeneralLayout = ({ children }: PropsWithChildren) => {
	const { data } = useProfile()

	const [name, setName] = useState<string>('')

	useEffect(() => {
		setName(data?.user.name || '')
		// console.log(data?.name)
	}, [data])

	return (
		<>
			<header className='flex items-center justify-center w-full min-h-20 sticky top-0 left-0 bg-white shadow-md shadow-black z-50'>
				<nav className='flex items-center justify-between h-full w-10/12 text-bl'>
					<LayoutSortingBar />
					<Link href={URL_PAGE.NEWS_MAKER}>
						<CustomBtn title='Создать новость' />
					</Link>

					<Link onClick={() => authService.logout()} href={URL_PAGE.PROFILE}>
						{data?.user.avatar ? (
							<Avatar alt='avatar' src={data!.user.avatar} />
						) : (
							<StringAvatar name={name} fontSize={30} width={50} height={50} />
						)}
					</Link>
				</nav>
			</header>
			<div className='wrapper mt-12'>{children}</div>
		</>
	)
}

export default GeneralLayout
