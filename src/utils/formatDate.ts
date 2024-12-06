export const formatDate = (date: Date): string => {
	return new Date(date).toLocaleDateString('ru-RU', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	})
}
