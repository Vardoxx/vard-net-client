import type { Metadata } from 'next'
import News from './News'

export const metadata: Metadata = {
	title: 'Новости',
	description: '',
}

export default function MainPage() {
	return <News />
}
