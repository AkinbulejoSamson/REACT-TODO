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
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import SignUpSchema from './signup-schema';
import TextInput from '../FormInput/text-input.component';
import { useUserAuth } from '../../Context/UserAuthContext';

import { useNavigate } from 'react-router-dom';

import { createUserProfileDocument } from '../../Firebase/firebase.utils';

const SignUp = () => {
  const methods = useForm({
		resolver: yupResolver(SignUpSchema),
		reValidateMode: "onChange",
	})

	const { register, handleSubmit, formState: { errors } } = methods;

  const style = useStyles();

  const [ values, setValues ] = React.useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
		showPassword: false,
		isButtonDisabled: true
	})

	const { signUp } = useUserAuth();

	const navigate = useNavigate();
	
	React.useEffect(() => {
		if (
			values.fullname.trim() &&
			values.email.trim() &&
			values.password.trim() &&
			values.confirmPassword.trim()
		) {
			setValues({
				...values,
				isButtonDisabled: false
			})
		}
	}, [values.fullname, values.email, values.password, values.confirmPassword])

	const handleChange = (event) => {
		const { name, value } = event.target

    setValues({
      ...values,
      [ name ]: value
    })
    console.log(event.target.value)
  }

  const toggleVisibility = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
	}

	const formSubmitHandler = async (data) => {
		const userAuth = {
			displayName: data.fullname,
			email: data.email,
			password: data.password,
		}
		const { displayName } = userAuth;

		try {
			await signUp(userAuth);
			// await createUserProfileDocument(userAuth, { displayName })
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}
	
	const handleKeyPress = event => {
		if (event.keyCode === 13 || event.which === 13) {
			values.isButtonDisabled || handleSubmit()
		}
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
				<FormProvider {...methods}>
					<form>
						<TextInput
							name="fullname"
							label="Full Name"
							type={"text"}
							onChange={handleChange}
							onKeyPress={handleKeyPress}
						/>
						<TextInput
							name="email"
							label="Email"
							type={"text"}
							onChange={handleChange}
							onKeyPress={handleKeyPress}
						/>
						<TextField
							{...register("password")}
							error={!!errors.password}
							name="password"
							helperText={errors.password ? errors?.password.message : ""}
							fullWidth
							type={values.showPassword ? "text" : "password"}
							label="Password"
							variant="outlined"
							onChange={handleChange}
							onKeyPress={handleKeyPress}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={toggleVisibility}
											edge="end"
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<TextField
							{...register("confirmPassword")}
							error={!!errors.confirmPassword}
							name="confirmPassword"
							helperText={
								errors.confirmPassword ? errors?.confirmPassword.message : ""
							}
							fullWidth
							type={values.showPassword ? "text" : "password"}
							label="Confirm Password"
							variant="outlined"
							onChange={handleChange}
							onKeyPress={handleKeyPress}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={toggleVisibility}
											edge="end"
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<Button
							type="submit"
							onClick={handleSubmit(formSubmitHandler)}
							variant="contained"
							color="primary"
							size="large"
							fullWidth
							disabled={values.isButtonDisabled}
						>
							SIGN UP
						</Button>
					</form>
				</FormProvider>
			</Paper>
		</Grid>
	)
}

export default SignUp;
