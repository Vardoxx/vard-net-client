/* eslint-disable @next/next/no-img-element */
import { INewCard } from '@/types/new-card.types'
import { FC } from 'react'
import UserAvatar from './UserAvatar'

const NewCard: FC<INewCard> = ({
	imgUrl,
	title,
	description,
	tag,
	authorName,
	authorAvatar,
	createdAt,
}) => {
	return (
		<div className='card'>
			<div className='card__img'>
				<img src={imgUrl} alt='new img' className='card__img' />
			</div>

			<div className='card__title'>
				<h1>{title}</h1>
			</div>

			<div className='border-t-2 border-yellow-400 w-full opacity-70' />
			<div className='card__description'>
				<h1>{description}</h1>
			</div>
			<div className='border-b-2 border-yellow-400 w-full opacity-70' />

			<div className='card__tag-container'>
				{tag.map(e => (
					<div key={e} className='card-tag'>
						{e}
					</div>
				))}
			</div>

			<div className='flex w-full h-min items-center justify-between'>
				{createdAt}
				<div className='card__author-container'>
					<div className='card__author'>
						<UserAvatar
							width={30}
							height={30}
							name={authorName}
							avatar={authorAvatar}
						/>
						{authorName}
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewCard
