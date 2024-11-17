import { IUser, TypeUserForm } from '@/types/auth.types'

import { axiosWithAuth } from '@/api/interceptors'

export interface IProfileResponse {
	user: IUser
	statistics: {
		label: string
		value: string
	}[]
}

class UserService {
	async getProfile() {
		const response = await axiosWithAuth.get<IProfileResponse>('/user/profile')
		return response.data
	}

	async update(data: TypeUserForm) {
		const response = await axiosWithAuth.put('/user/profile', data)
		return response.data
	}
}

export const userService = new UserService()
