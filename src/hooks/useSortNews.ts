import { RootState } from '@/store/store'
import { INewResponse } from '@/types/new.types'
import { useSelector } from 'react-redux'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSortNews = (array: INewResponse[]): INewResponse[] => {
	const sortByTag = useSelector((state: RootState) => state.sortNews.sortByTag)
	const sortByName = useSelector(
		(state: RootState) => state.sortNews.sortByName
	)

	if (!array) return []

	let sortingArray = [...array.filter(e => e.checkStatus === 'processed')]

	if (sortByTag) {
		switch (sortByTag) {
			case sortByTag:
				sortingArray.sort((a, b) =>
					a.tag.includes(sortByTag) ? -1 : b.tag.includes(sortByTag) ? 1 : 0
				)
				break
		}
	}

	if (sortByName) {
		sortingArray = sortingArray.filter(i =>
			i.title.toLowerCase().includes(sortByName.toLowerCase())
		)
		sortingArray.sort((a, b) =>
			a.title.toLowerCase().localeCompare(b.title.toLowerCase())
		)
	}

	return [...sortingArray]
}

export default useSortNews
