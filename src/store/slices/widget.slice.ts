import { TWidgetProvider } from '@/hooks/useWidget'
import { createSlice } from '@reduxjs/toolkit'
interface IInitialState {
	widgetName: TWidgetProvider | string
	widgetStatus: boolean
}
const initialState: IInitialState = {
	widgetName: '',
	widgetStatus: false,
}
export const widgetSlice = createSlice({
	name: 'widget',
	initialState,
	reducers: {
		widgetName: (state, action) => {
			state.widgetName = action.payload
		},
		openWidget: state => {
			state.widgetStatus = true
		},
		closeWidget: state => {
			state.widgetStatus = false
		},
	},
})
export const { widgetName, openWidget, closeWidget } = widgetSlice.actions
export default widgetSlice.reducer
