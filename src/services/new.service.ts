import { axiosClassic, axiosMultipart } from '@/api/interceptors'
import { INewRequire, INewResponse } from '@/types/new.types'

export const newService = {
	async getAll() {
		const res = await axiosClassic.get<INewResponse[]>(`/new`)

		return res.data
	},

	async create(data: INewRequire) {
		const res = await axiosMultipart.post<INewResponse>(`/new`, data)
		return res.data
	},
}
