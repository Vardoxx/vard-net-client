import { combineReducers, configureStore } from '@reduxjs/toolkit'
import passwordConfirmReducer from './slices/passwordConfirm.slice'
import sortReducer from './slices/sort.slice'
import widgetReducer from './slices/widget.slice'

const rootReducer = combineReducers({
	sortNews: sortReducer,
	widgetCall: widgetReducer,
	passwordConfirm: passwordConfirmReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
