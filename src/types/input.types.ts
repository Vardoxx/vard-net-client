export type InputType = 'email' | 'password' | 'text' | 'file'

export interface InputProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	type: InputType
	placeholder?: string
	value: string
	dirty: string
}
