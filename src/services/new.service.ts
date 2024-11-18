import { axiosClassic, axiosWithAuth } from '@/api/interceptors'
import { INewRequire, INewResponse } from '@/types/new.types'

export const newService = {
	async getAll() {
		const res = await axiosClassic.get<INewResponse[]>(`/new`)

		return res.data
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
