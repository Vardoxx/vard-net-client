export interface INewResponse {
	author: IAuthor
	id: number
	imgUrl: string
	title: string
	description: string
	authorId: string
	tag: string[]
	checkStatus: CheckStatus
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

export type CheckStatus = 'processed' | 'dismiss' | 'confirmed'
