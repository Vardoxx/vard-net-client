import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NewsSortState {
	sortByTag: string
	sortByName: string
}

const initialState: NewsSortState = {
	sortByTag: '',
	sortByName: '',
}

export const sortSlice = createSlice({
	name: 'sortNews',
	initialState,
	reducers: {
		sortByTag: (state, action: PayloadAction<string>) => {
			state.sortByTag = action.payload
		},
		sortByName: (state, action: PayloadAction<string>) => {
			state.sortByName = action.payload
		},
	},
})

export const { sortByTag, sortByName } = sortSlice.actions

export default sortSlice.reducer
