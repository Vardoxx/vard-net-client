'use client'

import { URL_PAGE } from '@/cfg/url.cfg'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaRegUserCircle, FaRubleSign } from 'react-icons/fa'
import { IoNewspaper } from 'react-icons/io5'
import { SiBlueprint } from 'react-icons/si'
import { VscThreeBars } from 'react-icons/vsc'

const SideBar = () => {
	const redirect = useRouter().push

	const [open, setOpen] = useState(false)

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen)
	}

	function IconCreator({
		i,
		position,
	}: {
		i: number
		position: 'top' | 'bottom'
	}) {
		switch (position) {
			case 'top':
				if (i === 0) {
					return <IoNewspaper />
				}
				if (i === 1) {
					return <SiBlueprint />
				}
				break

			case 'bottom':
				if (i === 0) {
					return <FaRegUserCircle />
				}
				if (i === 1) {
					return <FaRubleSign />
				}
				break
		}
	}

	function routing({ i, position }: { i: number; position: 'top' | 'bottom' }) {
		switch (position) {
			case 'top':
				if (i === 0) {
					redirect(URL_PAGE.NEWS)
				}
				if (i === 1) {
					redirect(URL_PAGE.NEWS_MAKER)
				}
				break
			case 'bottom':
				if (i === 0) {
					redirect(URL_PAGE.PROFILE)
				}
				break
		}
	}

	const DrawerList = (
		<Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
			<List>
				{['Новости', 'Верстак'].map((e, i) => (
					<ListItem key={e} disablePadding disableGutters>
						<ListItemButton onClick={() => routing({ i, position: 'top' })}>
							<ListItemIcon>
								<IconCreator i={i} position='top' />
							</ListItemIcon>
							<ListItemText primary={e} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['Профиль', 'Подписка'].map((e, i) => (
					<ListItem key={e} disablePadding>
						<ListItemButton onClick={() => routing({ i, position: 'bottom' })}>
							<ListItemIcon>
								<IconCreator i={i} position='bottom' />
							</ListItemIcon>
							<ListItemText primary={e} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<div className='relative h-0 '>
			<VscThreeBars
				className={`absolute top-4 z-50 ${
					open ? 'left-64' : 'left-1'
				} text-6xl cursor-pointer transition-all hover:text-black `}
				onClick={toggleDrawer(true)}
			>
				Open drawer
			</VscThreeBars>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</div>
	)
}

export default SideBar
