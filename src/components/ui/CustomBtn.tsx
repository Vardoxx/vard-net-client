import { ButtonHTMLAttributes } from 'react'

const CustomBtn: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	title,
	type,
	disabled,
}) => {
	return (
		<button className='btn' disabled={disabled} type={type}>
			{title}
		</button>
	)
}

export default CustomBtn
