import { TTag } from '@/types/new.types'

export const options: TTag[] = [
	'популярное',
	'политика',
	'блогеры',
	'игры',
	'it',
]

export const ITEM_HEIGHT = 48

export const ITEM_PADDING_TOP = 8

export const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}
