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
	id?: number
	avatar?: File[] | string | null
	email?: string
	name?: string
	role?: string
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

export interface IGetToAccessDataChange {
	email: string
	password: string
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
