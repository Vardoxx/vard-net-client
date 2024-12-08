import { Grid2, Skeleton } from '@mui/material'
import { FC } from 'react'

const SkeletonLoaders: FC<{ count: number }> = ({ count }) => (
	<Grid2 container spacing={2} justifyContent='center'>
		{Array(count)
			.fill(1)
			.map((_, index) => (
				<div key={index} className='relative'>
					<Skeleton variant='rounded' width={400} height={600} />
					<Skeleton
						variant='rectangular'
						width={360}
						height={200}
						className='absolute top-4 left-5'
					/>
				</div>
			))}
	</Grid2>
)

export default SkeletonLoaders
