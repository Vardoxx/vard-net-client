import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
	status: boolean
}

const initialState: IInitialState = {
	status: false,
}

export const passwordConfirmSlice = createSlice({
	name: 'passwordConfirm',
	initialState,
	reducers: {
		confirm: state => {
			state.status = true
		},
		block: state => {
			state.status = false
		},
	},
})

export const { confirm, block } = passwordConfirmSlice.actions

export default passwordConfirmSlice.reducer
