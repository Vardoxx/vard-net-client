import { combineReducers, configureStore } from '@reduxjs/toolkit'

import sortReducer from './slices/sort.slice'

const rootReducer = combineReducers({
	sortNews: sortReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
