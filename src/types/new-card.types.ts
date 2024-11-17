export interface INewCard {
	imgUrl: string
	title: string
	description: string
	tag: string[]
	author: IAuthor
}

export interface IAuthor {
	name: string
	avatar: string | null
}
