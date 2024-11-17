'use client'

import { store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren, useState } from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		})
	)

	return (
		<Provider store={store}>
			<QueryClientProvider client={client}>
				{children}
				<Toaster
					theme='dark'
					position='bottom-right'
					style={{ position: 'fixed', bottom: 20 }}
					toastOptions={{
						className: 'bg-gray-800 text-white p-4 rounded-lg shadow-md',
						duration: 5000,
					}}
				/>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</Provider>
	)
}
