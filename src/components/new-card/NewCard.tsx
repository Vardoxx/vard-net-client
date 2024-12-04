/* eslint-disable @next/next/no-img-element */
import { INewCard } from '@/types/new-card.types'
import UserAvatar from '../ui/UserAvatar'

const NewCard: React.FC<INewCard> = ({
	imgUrl,
	title,
	description,
	tag,
	author,
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

			<div className='card__author-container'>
				<div className='card__author'>
					<UserAvatar
						width={30}
						height={30}
						name={author.name}
						avatar={author.avatar}
					/>
					{author.name}
				</div>
			</div>
		</div>
	)
}

export default NewCard
