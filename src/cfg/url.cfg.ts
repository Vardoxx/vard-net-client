class URL {
	root = '/'
	authRoot = `${this.root}auth`

	MAIN = `${this.root}main`
	NEWS_MAKER = `${this.MAIN}/news_maker`
	PROFILE = `${this.MAIN}/profile`

	REGISTER = `${this.authRoot}/register`
	LOGIN = `${this.authRoot}/login`
}

export const URL_PAGE = new URL()
