import { CustomInputProps } from '@/types/custom-input.types'
import { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
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

export default CustomInput
