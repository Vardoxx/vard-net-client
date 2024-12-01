'use client'

import PasswordConfirmWidget from '@/components/widgets/PasswordConfirm.widget'
import { TWidgetProvider } from '@/hooks/useWidget'
import { closeWidget } from '@/store/slices/widget.slice'
import { RootState } from '@/store/store'
import { Box, Modal } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const WidgetProvider = () => {
	const dispatch = useDispatch()
	const widgetName = useSelector(
		(state: RootState) => state.widgetCall.widgetName
	)
	const widgetStat = useSelector(
		(state: RootState) => state.widgetCall.widgetStatus
	)

	const [isWidgetName, setIsWidgetName] = useState<TWidgetProvider | ''>('')

	const [isWidgetOpen, setIsWidgetOpen] = useState(widgetStat)

	useEffect(() => {
		setIsWidgetOpen(widgetStat)
	}, [widgetStat])

	useEffect(() => {
		setIsWidgetName(widgetName as TWidgetProvider)
	}, [widgetName, isWidgetName])

	function handleClose() {
		dispatch(closeWidget())
	}

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	}

	function WidgetSwitcher() {
		switch (widgetName) {
			case 'PasswordConfirm':
				return <PasswordConfirmWidget />
		}
	}

	return (
		<div>
			{/* <Button onClick={handleOpen}>Open modal</Button> */}
			<Modal
				open={isWidgetOpen}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<WidgetSwitcher />
				</Box>
			</Modal>
		</div>
	)
}

export default WidgetProvider
