import { InputProps } from '@/types/input.types'
import { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type, value, onChange, placeholder, dirty }, ref) => {
		return (
			<input
				style={{ border: dirty }}
				ref={ref}
				className='input'
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		)
	}
)

export default Input
