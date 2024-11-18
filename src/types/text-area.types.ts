export interface TextAreaProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	value: string
	dirty: string
}
