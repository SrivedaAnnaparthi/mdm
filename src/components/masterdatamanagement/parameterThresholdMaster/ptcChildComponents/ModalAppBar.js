import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function ModalAppBar() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Add New Parameter
				</Typography>
				<IconButton size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
					<CloseIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
