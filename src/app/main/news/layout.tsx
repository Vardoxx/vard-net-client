import NewsLayout from '@/components/layout/NewsLayout'

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <NewsLayout>{children}</NewsLayout>
}
