import {
	ILoginForm,
	ILoginResponse,
	IRegisterForm,
	IRegisterResponse,
} from '@/types/auth.types'

import { axiosClassic } from '@/api/interceptors'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

export const authService = {
	async login(data: ILoginForm) {
		const res = await axiosClassic.post<ILoginResponse>(`/auth/login`, data)

		if (res.data.accessToken) saveTokenStorage(res.data.accessToken)

		return res
	},

	async register(data: IRegisterForm) {
		const res = await axiosClassic.post<IRegisterResponse>(
			`/auth/register`,
			data
		)

		return res
	},

	async getNewTokens() {
		const res = await axiosClassic.post<ILoginResponse>(
			'/auth/login/access-token'
		)

		if (res.data.accessToken) saveTokenStorage(res.data.accessToken)

		return res
	},

	async logout() {
		const res = await axiosClassic.post<boolean>('/auth/logout')

		if (res.data) removeFromStorage()

		return res
	},

	async getAccessToDataChange(data: { password: string; email: string }) {
		const res = await axiosClassic.post<boolean>(
			'/auth/getAccessToDataChange',
			data
		)
		return res
	},
}
