import { IProfile, TypeUserForm } from '@/types/auth.types'

import { axiosWithAuth } from '@/api/interceptors'

class UserService {
	async getProfile() {
		const response = await axiosWithAuth.get<IProfile>('/user/profile')
		return response.data
	}

	async update(data: TypeUserForm) {
		const response = await axiosWithAuth.put('/user/profile', data)
		return response.data
	}
}

export const userService = new UserService()
