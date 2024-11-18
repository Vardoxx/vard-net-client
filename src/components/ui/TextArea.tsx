import { TextAreaProps } from '@/types/text-area.types'
import { ChangeEventHandler, forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const TextArea = forwardRef<
	(e: ChangeEventHandler<HTMLTextAreaElement>) => void,
	TextAreaProps
>(({ value, placeholder, onChange, dirty }, ref) => {
	return (
		<textarea
			style={{ border: dirty }}
			onChange={onChange}
			ref={ref}
			className='input'
			value={value}
			placeholder={placeholder}
		/>
	)
})

export default TextArea
