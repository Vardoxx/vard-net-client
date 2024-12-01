import { useEffect, useState } from 'react'

export const useTimer = (value: number) => {
	const [delayedFetch, setDelayedFetch] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setDelayedFetch(true)
		}, value)

		return () => clearTimeout(timer)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return [delayedFetch]
}
