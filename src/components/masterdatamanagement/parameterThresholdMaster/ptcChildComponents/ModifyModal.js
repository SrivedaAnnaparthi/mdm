// library imports
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';

// custom imports
import DropDownCategory from './DropDownCategory';
import DropDownPhase from './DropDownPhase';
import { Typography } from '@mui/material';
import ParameterTextField from './ParameterTextField';
import UsernameTextField from './UsernameTextField';
import MinField from './MinField';
import MaxField from './MaxField';
import MinPercentage from './MinPercentage';
import MaxPercentage from './MaxPercentage';
import EffectiveDate from './EffectiveDate';
import SubmitButton from './SubmitButton';
import ClearButton from './ClearButton';
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '1px light #fff',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3
};

export default function ModifyModal() {
	const [ open, setOpen ] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="contained" onClick={handleOpen}>
				Modify
			</Button>
			<Modal
				hideBackdrop
				open={open}
				onClose={handleClose}
				aria-labelledby="child-modal-title"
				aria-describedby="child-modal-description"
			>
				<Box sx={style}>
					<Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
						<Grid item xs={6}>
							<Typography variant="h6">Update Parameter</Typography>
						</Grid>
						<Grid item xs={4} />
						<Grid item xs={2}>
							<Button onClick={handleClose}>
								<CloseIcon />
							</Button>
						</Grid>
						<Grid item xs={6}>
							<DropDownCategory />
						</Grid>
						<Grid item xs={6}>
							<DropDownPhase />
						</Grid>
						<Grid item xs={6}>
							<ParameterTextField />
						</Grid>
						<Grid item xs={6}>
							<UsernameTextField />
						</Grid>
						<Grid item xs={6}>
							<MinField />
						</Grid>
						<Grid item xs={6}>
							<MaxField />
						</Grid>
						<Grid item xs={6}>
							<MinPercentage />
						</Grid>
						<Grid item xs={6}>
							<MaxPercentage />
						</Grid>
						<Grid item xs={6}>
							<EffectiveDate />
						</Grid>
						<Grid item xs={6} />
						<Grid item xs={3} />
						<Grid item xs={3}>
							<SubmitButton />
						</Grid>
						<Grid item xs={3}>
							<ClearButton />
						</Grid>
						<Grid item xs={3} />
					</Grid>
				</Box>
			</Modal>
		</div>
	);
}
