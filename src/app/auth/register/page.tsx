import type { Metadata } from 'next'
import Register from './Register'

export const metadata: Metadata = {
	title: 'Регистрация',
	description: '',
}

export default function RegisterPage() {
	return <Register />
}
