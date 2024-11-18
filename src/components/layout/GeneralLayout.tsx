'use client'

import { URL_PAGE } from '@/cfg/url.cfg'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import LayoutSortingBar from '../sorting-bar/SortingBar'
import CustomBtn from '../ui/Btn'

const GeneralLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<header className='flex items-center justify-center w-full min-h-20 sticky top-0 left-0 bg-white shadow-md shadow-black z-50'>
				<nav className='flex items-center justify-between h-full w-10/12 text-bl'>
					<LayoutSortingBar />
					<Link href={URL_PAGE.NEWS_MAKER}>
						<CustomBtn title='Создать новость' />
					</Link>

					<Link href={URL_PAGE.PROFILE}>
						<Image
							style={{ borderRadius: '50%' }}
							src={'/file.svg'}
							alt='ava'
							width={100}
							height={100}
						/>
					</Link>
				</nav>
			</header>
			<div className='wrapper mt-12'>{children}</div>
		</>
	)
}

export default GeneralLayout
