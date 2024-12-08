'use client'

import NewCard from '@/components/ui/NewCard'
import SkeletonLoaders from '@/components/ui/SkeletonLaders'
import { newService } from '@/services/new.service'
import { RootState } from '@/store/store'
import { TTag } from '@/types/new.types'
import { formatDate } from '@/utils/formatDate'
import { Grid2 } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NotFound from './NotFound'

const News = () => {
	const tag = useSelector((state: RootState) => state.sortNews.sortByTag)
	const title = useSelector((state: RootState) => state.sortNews.sortByName)

	const { data, isError, isLoading, refetch } = useQuery({
		queryKey: ['getNew'],
		queryFn: () => newService.getNews(sortMethod, tag as TTag, title),
	})

	const [sortMethod, setSortMethod] = useState<'tag' | 'title' | 'all'>('all')

	useEffect(() => {
		setSortMethod('tag')
		refetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tag])

	useEffect(() => {
		if (!title) {
			refetch()
			setSortMethod('all')
		}
		setSortMethod('title')
		refetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [title])

	if (isLoading) {
		return (
			<Grid2 container spacing={2} justifyContent='center'>
				<SkeletonLoaders count={20} />
			</Grid2>
		)
	}

	if (isError) return <div>Error loading news</div>
	if (!data?.length) return <NotFound />

	return (
		<Grid2 container spacing={2} justifyContent='center'>
			{data?.map(e => (
				<NewCard
					key={e.id}
					title={e.title}
					imgUrl={`http://localhost:7864/${e.imgUrl}`}
					tag={e.tag}
					authorAvatar={e.authorAvatar}
					authorName={e.authorName}
					description={e.description}
					createdAt={formatDate(e.createdAt)}
				/>
			))}
		</Grid2>
	)
}

export default News
