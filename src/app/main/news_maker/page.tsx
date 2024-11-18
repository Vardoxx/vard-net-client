import type { Metadata } from 'next'
import NewCreator from './NewCreator'

export const metadata: Metadata = {
	title: 'NewsMaker',
	description: '',
}

export default function NewsMakerPage() {
	return <NewCreator />
}
