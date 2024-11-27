import GeneralLayout from '@/components/layout/GeneralLayout'
import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Свежайшие новости от VARD.net',
}

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <GeneralLayout>{children}</GeneralLayout>
}
