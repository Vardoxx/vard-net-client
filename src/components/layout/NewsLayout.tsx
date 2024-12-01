'use client'

import { URL_PAGE } from '@/cfg/url.cfg'
import { useProfile } from '@/hooks/useProfile'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import LayoutSortingBar from '../sorting-bar/SortingBar'
import CustomBtn from '../ui/Btn'
import UserAvatar from '../ui/UserAvatar'

const NewsLayout = ({ children }: PropsWithChildren) => {
	const { data } = useProfile()

	return (
		<>
			<header className='flex items-center justify-center w-full min-h-20 sticky top-0 left-0 bg-white shadow-md shadow-black z-10'>
				<nav className='flex items-center justify-between h-full w-10/12 text-bl'>
					<LayoutSortingBar />
					<Link href={URL_PAGE.NEWS_MAKER}>
						<CustomBtn title='Создать новость' />
					</Link>

					<Link href={URL_PAGE.PROFILE}>
						<UserAvatar
							name={data?.user.name}
							avatar={data?.user.avatar as string}
							fontSize={30}
							width={50}
							height={50}
						/>
					</Link>
				</nav>
			</header>
			<div className='wrapper mt-12'>{children}</div>
		</>
	)
}

export default NewsLayout
