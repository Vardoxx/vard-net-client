'use client'

import { URL_PAGE } from '@/cfg/url.cfg'
import { authService } from '@/services/auth.service'

export function useLogout(): [() => Promise<void>] {
	async function logout() {
		await authService.logout()
		window.location.href = await URL_PAGE.LOGIN
	}

	return [logout]
}
