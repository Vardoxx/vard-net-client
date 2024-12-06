'use client'

import NewCard from '@/components/new-card/NewCard'
import useSortNews from '@/hooks/useSortNews'
import { newService } from '@/services/new.service'
import { formatDate } from '@/utils/formatDate'
import { Grid2 } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

const News = () => {
	const { data, isError, isLoading } = useQuery({
		queryKey: ['getNew'],
		queryFn: () => newService.getAll(),
		refetchInterval: 300000,
	})

	const sortedArray = useSortNews(data!)

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error loading news</div>

	return (
		<Grid2 container spacing={2} justifyContent='center'>
			{sortedArray?.map(e => (
				<NewCard
					key={e.id}
					title={e.title}
					imgUrl={`http://localhost:7864/${e.imgUrl}`}
					tag={e.tag}
					author={e.author}
					description={e.description}
					createdAt={formatDate(e.createdAt)}
				/>
			))}
		</Grid2>
	)
}

export default News
