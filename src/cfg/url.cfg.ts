class URL {
	root = '/'
	authRoot = `${this.root}auth`

	MAIN = `${this.root}main`
	NEWS_MAKER = `${this.MAIN}/news_maker`

	REGISTER = `${this.authRoot}/register`
	LOGIN = `${this.authRoot}/login`
	PROFILE = `${this.authRoot}/profile`
}

export const URL_PAGE = new URL()
