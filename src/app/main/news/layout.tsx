import NewsLayout from '@/components/layout/News.layout'

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <NewsLayout>{children}</NewsLayout>
}
