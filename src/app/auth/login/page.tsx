import type { Metadata } from 'next'
import Login from './Login'

export const metadata: Metadata = {
	title: 'Login',
	description: '',
}

export default function LoginPage() {
	return <Login />
}
