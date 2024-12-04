'use client'

import { URL_PAGE } from '@/cfg/url.cfg'
import { authService } from '@/services/auth.service'

export function useLogout(setPrompt: boolean): [() => Promise<void>] {
	async function logout() {
		if (setPrompt) {
			const confirmRes = await confirm('Вы действительно хотите выйти?')
			if (confirmRes) {
				await authService.logout()
				window.location.href = await URL_PAGE.LOGIN
			} else return
		}
	}

	return [logout]
}
