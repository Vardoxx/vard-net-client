class URL {
	root = '/'
	authRoot = `${this.root}auth`
	mainRoot = `${this.root}main`

	NEWS = `${this.root}main/news`

	NEWS_MAKER = `${this.mainRoot}/news_maker`
	PROFILE = `${this.mainRoot}/profile`

	REGISTER = `${this.authRoot}/register`
	LOGIN = `${this.authRoot}/login`
}

export const URL_PAGE = new URL()
