import { IProfile, IUser } from '@/types/auth.types'

import { axiosWithAuth } from '@/api/interceptors'

class UserService {
	async getProfile() {
		const response = await axiosWithAuth.get<IProfile>('/user/profile')
		return response.data
	}

	async update(data: IUser) {
		const formData = new FormData()
		formData.append('avatar', data.avatar![0])

		formData.append('email', data.email || '')
		formData.append('name', data.name || '')

		const res = await axiosWithAuth.put<IUser>(`/user/profile`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		return res.data
	}
}

export const userService = new UserService()
