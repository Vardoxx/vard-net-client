import AuthLayout from '@/components/layout/AuthLayout'
import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Best online cinema in the world',
}

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <AuthLayout>{children}</AuthLayout>
}
