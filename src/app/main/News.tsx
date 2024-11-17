'use client'

import NewCard from '@/components/new-card/NewCard'
import useSortNews from '@/hooks/useSortNews'
import { newService } from '@/services/new.service'
import { useQuery } from '@tanstack/react-query'

const News = () => {
	const { data, isError, isLoading } = useQuery({
		queryKey: ['getNew'],
		queryFn: () => newService.getAll(),
	})

	const sortedArray = useSortNews(data!)

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error loading news</div>

	return (
		<>
			{sortedArray?.map(e => (
				<NewCard
					key={e.id}
					title={e.title}
					imgUrl={`http://localhost:7864/${e.imgUrl}`}
					tag={e.tag}
					author={e.author}
					description={e.description}
				/>
			))}
		</>
	)
}

export default News
