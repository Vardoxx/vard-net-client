import { axiosClassic, axiosWithAuth } from '@/api/interceptors'
import { INewRequire, INewResponse, TTag } from '@/types/new.types'

export const newService = {
	async getNews(
		type: 'tag' | 'title' | 'all',
		tag?: TTag,
		title?: string | number
	) {
		function typeController() {
			switch (type) {
				case 'all':
					return '/new'

				case 'tag':
					if (!tag) return '/new'
					return `/new/by-tag/${tag}`

				case 'title':
					if (!title) return '/new'
					return `/new/by-title/${title}`
			}
		}

		const res = await axiosClassic.get<INewResponse[]>(typeController())

		return res.data || []
	},

	async create(data: INewRequire, img: File) {
		const formData = new FormData()
		formData.append('img', img)

		formData.append('title', data.title)
		formData.append('description', data.description)
		data.tag.forEach(tag => formData.append('tag[]', tag))

		const res = await axiosWithAuth.post<INewResponse>(`/new`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		return res.data
	},
}
