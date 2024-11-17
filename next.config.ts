import { URL_PAGE } from '@/cfg/url.cfg'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	trailingSlash: true,
	async redirects() {
		return [
			{
				source: URL_PAGE.root,
				destination: URL_PAGE.MAIN,
				permanent: true,
			},
		]
	},
}

export default nextConfig
