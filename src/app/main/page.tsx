import type { Metadata } from 'next'
import News from './News'

export const metadata: Metadata = {
	title: 'Main',
	description: '',
}

export default function MainPage() {
	return <News />
}
