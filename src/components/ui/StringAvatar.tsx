import { Skeleton } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { useEffect, useState } from 'react'

function stringToColor(string: string) {
	let hash = 0
	let i

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash)
	}

	let color = '#'

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff
		color += `00${value.toString(16)}`.slice(-2)
	}
	/* eslint-enable no-bitwise */

	return color
}

function stringAvatar(name: string) {
	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.split(' ')[0][0]}`,
	}
}

const StringAvatar: React.FC<{
	name?: string
	width?: number
	height?: number
	fontSize?: number
}> = ({ name, width = 40, height = 40, fontSize = 12 }) => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (name) {
			setIsLoading(false)
		}
	}, [name])

	if (isLoading) {
		return (
			<Skeleton variant='circular'>
				<Avatar
					style={{
						width: `${width}px`,
						height: `${height}px`,
						fontSize: `${fontSize}px`,
					}}
				/>
			</Skeleton>
		)
	}

	return (
		<Stack direction='row' spacing={2}>
			<Avatar
				style={{
					width: `${width}px`,
					height: `${height}px`,
					fontSize: `${fontSize}px`,
				}}
				{...stringAvatar(name!)}
			/>
		</Stack>
	)
}

export default StringAvatar
