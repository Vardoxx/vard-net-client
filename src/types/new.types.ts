export interface INewResponse {
	authorName: string
	authorAvatar: string
	id: number
	imgUrl: string
	title: string
	description: string
	authorId: string
	tag: string[]
	checkStatus: CheckStatus
	createdAt: Date
}

export type TTag = 'популярное' | 'политика' | 'игры' | 'блогеры' | 'it'

export interface INewRequire {
	img: File[]
	title: string
	description: string
	tag: string[]
}

export interface IAuthor {
	avatar: string | null
	name: string
}

export type CheckStatus = 'PROCESSED' | 'DISMISS' | 'CONFIRMED'
