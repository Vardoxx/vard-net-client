import type { Metadata } from 'next'
import NewCreator from './NewCreator'

export const metadata: Metadata = {
	title: 'Верстак',
	description: 'Создавайте свои новости за 99р/мес',
}

export default function NewsMakerPage() {
	return <NewCreator />
}
