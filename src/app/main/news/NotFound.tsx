import { CgSmileSad } from 'react-icons/cg'

const NotFound = () => {
	return (
		<div className='flex flex-col items-center gap-8 font-bold'>
			<CgSmileSad className='text-7xl' />
			По вашему запросу ничего не найдено
		</div>
	)
}

export default NotFound
