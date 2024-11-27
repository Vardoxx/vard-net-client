import type { Metadata } from 'next'
import Login from './Login'

export const metadata: Metadata = {
	title: 'Вход',
	description: '',
}

export default function LoginPage() {
	return <Login />
}
