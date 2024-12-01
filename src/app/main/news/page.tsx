import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import News from './News'

export const metadata: Metadata = {
	title: 'Новости',
	description: `Свежайшие новости от ${SITE_NAME}`,
}

export default function NewsPage() {
	return <News />
}
