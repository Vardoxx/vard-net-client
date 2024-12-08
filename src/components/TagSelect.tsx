'use client'

import { MenuProps, options } from '@/constants/tag-select.constants'
import {
	Checkbox,
	FormControl,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	SelectProps,
} from '@mui/material'
import { useState } from 'react'

const TagSelect: React.FC<SelectProps> = ({ label }, ref) => {
	const [personName, setPersonName] = useState<string[]>([])

	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
		const {
			target: { value },
		} = event
		setPersonName(typeof value === 'string' ? value.split(',') : value)
	}
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-multiple-checkbox-label'>{label}</InputLabel>
			<Select
				labelId='demo-multiple-checkbox-label'
				id='demo-multiple-checkbox'
				label={label}
				multiple
				value={personName}
				onChange={handleChange}
				input={<OutlinedInput label={label} />}
				renderValue={selected => selected.join(', ')}
				MenuProps={MenuProps}
				ref={ref}
			>
				{options.map(e => (
					<MenuItem key={e} value={e}>
						<Checkbox checked={personName.includes(e)} />
						<ListItemText primary={e} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default TagSelect
