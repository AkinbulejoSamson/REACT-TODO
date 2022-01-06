import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

import { useStyles } from './signup.component.styles';

const SignUp = () => {
  const style = useStyles();

  const [ values, setValues ] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false
  })

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [ prop ]: event.target.value
    })
    console.log(event.target.value)
  }

  const togglePassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }

  const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

  return (
		<Grid className={style.root}>
			<Paper>
				<Grid align="center">
					<Avatar>
						<AddCircleOutlineOutlinedIcon />
					</Avatar>
					<h2>SIGN UP</h2>
					<Typography variant="caption">Please fill this form!</Typography>
				</Grid>
				<form>
					<TextField fullWidth label="First Name" variant="outlined" required />
					<TextField fullWidth label="Last Name" variant="outlined" required />
					<TextField fullWidth label="Email" variant="outlined" required />
					<TextField
						fullWidth
						type={values.showPassword ? "text" : "password"}
						value={values.password}
						label="Password"
						variant="outlined"
						onChange={handleChange("password")}
						required
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={togglePassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{values.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<TextField
						fullWidth
						type="password"
						label="Confirm Password"
						variant="outlined"
						onChange={handleChange("confirmPassword")}
						required
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={togglePassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{values.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<Button type="submit" variant="contained" color="primary">
						SIGN UP
					</Button>
				</form>
			</Paper>
		</Grid>
	)
}

export default SignUp;
