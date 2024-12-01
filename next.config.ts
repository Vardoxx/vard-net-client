import { URL_PAGE } from '@/cfg/url.cfg'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	trailingSlash: false,
	async redirects() {
		return [
			{
				source: URL_PAGE.root,
				destination: URL_PAGE.NEWS,
				permanent: true,
			},
			{
				source: URL_PAGE.mainRoot,
				destination: URL_PAGE.NEWS,
				permanent: true,
			},
		]
	},
}

export default nextConfig
