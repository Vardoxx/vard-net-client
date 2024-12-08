'use client'

import { PropsWithChildren } from 'react'
import LayoutSortingBar from '../sorting-bar/SortingBar'

const NewsLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<header className='flex items-center justify-center w-full min-h-20 sticky top-0 left-0 bg-white shadow-md shadow-black z-10'>
				<nav className='flex items-center  h-full w-10/12 text-bl'>
					<LayoutSortingBar />
				</nav>
			</header>
			<div className='wrapper mt-12'>{children}</div>
		</>
	)
}

export default NewsLayout
