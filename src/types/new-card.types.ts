export interface INewCard {
	imgUrl: string
	title: string
	description: string
	tag: string[]
	authorAvatar: string
	authorName: string
	createdAt: string
}

export interface IAuthor {
	name: string
	avatar: string | null
}
