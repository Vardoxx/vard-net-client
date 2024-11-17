import { FaFireAlt, FaGamepad } from 'react-icons/fa'
import { GiPoliceOfficerHead, GiTechnoHeart, GiVrHeadset } from 'react-icons/gi'

const sortingBarItems = [
	{
		id: 1,
		color: 'text-orange-500',
		border: 'border-orange-500',
		Icon: <FaFireAlt />,
		title: 'Популярное',
		sortValue: 'popular',
	},
	{
		id: 2,
		color: 'text-blue-500',
		border: 'border-blue-500',
		Icon: <GiPoliceOfficerHead />,
		title: 'Политика',
		sortValue: 'policy',
	},
	{
		id: 3,
		color: 'text-orange-300',
		border: 'border-orange-300',
		Icon: <GiVrHeadset />,
		title: 'Блогеры',
		sortValue: 'blogers',
	},
	{
		id: 4,
		color: 'text-green-500',
		border: 'border-green-500',
		Icon: <FaGamepad />,
		title: 'Игры',
		sortValue: 'games',
	},
	{
		id: 5,
		color: 'text-cyan-600',
		border: 'border-cyan-600',
		Icon: <GiTechnoHeart />,
		title: 'IT',
		sortValue: 'it',
	},
]

export default sortingBarItems
