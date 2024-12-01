import { useDispatch } from 'react-redux'
import {
	closeWidget,
	openWidget,
	widgetName,
} from '../store/slices/widget.slice'

export type TWidgetProvider = 'PasswordConfirm'
export interface IWidgetProvider {
	widget: TWidgetProvider
}

export const useWidget = () => {
	const dispatch = useDispatch()
	const open = (name: TWidgetProvider) => {
		dispatch(openWidget())
		dispatch(widgetName(name))
	}
	const close = () => {
		dispatch(closeWidget())
	}
	return [open, close]
}
