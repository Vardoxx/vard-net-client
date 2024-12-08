import { Skeleton } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { FC, useEffect, useState } from 'react'

function stringToColor(string: string) {
	let hash = 0
	let i

	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash)
	}

	let color = '#'

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff
		color += `00${value.toString(16)}`.slice(-2)
	}

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

const UserAvatar: FC<{
	name?: string
	avatar?: string | null
	width?: number
	height?: number
	fontSize?: number
}> = ({ name, width, height, fontSize, avatar }) => {
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

	if (!avatar) {
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
	if (avatar) {
		return (
			<Stack direction='row' spacing={2}>
				<Avatar
					style={{
						width: `${width}px`,
						height: `${height}px`,
						fontSize: `${fontSize}px`,
					}}
					src={`http://localhost:7864/${avatar}`}
				/>
			</Stack>
		)
	}
}

export default UserAvatar
