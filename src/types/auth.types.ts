export interface ILoginForm {
	email: string
	password: string
}

export interface IRegisterForm extends ILoginForm {
	name: string
	repeatPassword: string
}

export interface IProfile {
	user: IUser
}

export interface IUser {
	id: number
	avatar: string
	email: string
	name: string
}

export interface ILoginResponse {
	accessToken: string
	user: IUser
}

export interface IRegisterResponse {
	id: number
	name: string
	email: string
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
