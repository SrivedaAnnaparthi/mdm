import React from 'react';
import { Link, Grid, TextField, Button, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const LoginPage = () => {
	return (
		<Grid container style={{ minHeight: '97vh' }}>
			<Grid item xs={12} sm={6}>
				<img
					src="https://d9lqarq0gr0pp.cloudfront.net/files/images/large/p/o/power-lines-against-blue-skies.jpg"
					alt="ts"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
			</Grid>
			<Grid
				container
				item
				xs={12}
				sm={6}
				alignItems="center"
				direction="column"
				justify="space-between"
				style={{ padding: 10 }}
			>
				<div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 200 }}>
					<div style={{ height: 100 }} />
					<Grid container justify="center">
						<img
							src="https://www.pngitem.com/pimgs/m/583-5832601_101-power-station-power-plant-logo-png-transparent.png"
							alt="logo"
							width={200}
						/>
					</Grid>
					<TextField
						variant="standard"
						label="Username"
						margin="normal"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircle />{' '}
								</InputAdornment>
							)
						}}
					/>
					<TextField
						variant="standard"
						label="Password"
						type="password"
						margin="normal"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LockIcon />
								</InputAdornment>
							)
						}}
					/>
					<div style={{ height: 20 }} />
					<Button type="submit" color="primary" size="small" variant="contained" style={{ width: '30%' }}>
						<Link href="home" color="inherit" underline="none">
							Login
						</Link>
					</Button>
				</div>
			</Grid>
		</Grid>
	);
};

export default LoginPage;
