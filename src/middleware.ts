import { NextRequest, NextResponse } from 'next/server'
import { URL_PAGE } from './cfg/url.cfg'
import { EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = url.includes(URL_PAGE.authRoot)

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(URL_PAGE.MAIN, request.url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL(URL_PAGE.LOGIN, request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/main/:path*', '/auth/:path*'],
}
