export function encrypt(text: string) {
	if (text.length <= 3) return text

	const middleIndex = Math.floor(text.length / 2)
	const firstHalf = text.slice(0, middleIndex)
	const lastHalf = text.slice(middleIndex + 3)

	console.log(`${firstHalf}${'...'}${lastHalf}`)

	return `${firstHalf}${'...'}${lastHalf}`
}
