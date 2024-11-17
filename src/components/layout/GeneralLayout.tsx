'use client'

import { URL_PAGE } from '@/cfg/url.cfg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'
import LayoutSortingBar from '../sorting-bar/SortingBar'
import CustomBtn from '../ui/CustomBtn'

const GeneralLayout = ({ children }: PropsWithChildren) => {
	const router = useRouter()

	return (
		<>
			<header className='flex items-center justify-center w-full min-h-20 sticky top-0 left-0 bg-white shadow-md shadow-black z-50'>
				<nav className='flex items-center justify-between h-full w-10/12 text-bl'>
					<LayoutSortingBar />
					<CustomBtn
						title='Создать новость'
						onClick={() => router.push(URL_PAGE.NEWS_MAKER)}
					/>

					<div
						className='max-w-14 cursor-pointer'
						onClick={() => router.push(URL_PAGE.PROFILE)}
					>
						<Image
							style={{ borderRadius: '50%' }}
							src={'/file.svg'}
							alt='ava'
							width={100}
							height={100}
						/>
					</div>
				</nav>
			</header>
			<div className='wrapper mt-12'>{children}</div>
		</>
	)
}

export default GeneralLayout
