import * as React from 'react';

import { useForm, FormProvider } from "react-hook-form"

import Grid from "@mui/material/Grid"
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper";
import TextInput from '../FormInput/text-input.component';
import Avatar from '@mui/material/Avatar';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import GoogleIcon from "@mui/icons-material/Google"
import AppleIcon from "@mui/icons-material/Apple"
import LoginIcon from "@mui/icons-material/Login"
import Alert from "@mui/material/Alert"

import GoogleButton from "react-google-button"

import { Link, useNavigate } from 'react-router-dom';

import { useStyles } from '../SignUp/signup.component.styles';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Typography } from '@mui/material';
import { useUserAuth } from '../../Context/UserAuthContext';


const schema = yup.object().shape({
	email: yup.string().email().required("Please enter a valid email"),
	password: yup.string().required("Please enter your password"),
})

const SignIn = () => {
  const methods = useForm(
    { resolver: yupResolver(schema), reValidateMode: 'onChange' });

	const {
		register,
		handleSubmit,
		formState: { errors },
  } = methods
  
  const [values, setValues] = React.useState({
		email: "",
		password: "",
		showPassword: false,
		isButtonDisabled: true,
	})
  
	const [err, setErr] = React.useState('')
	const style = useStyles()
	const navigate = useNavigate();
	const { signIn, googleSignIn } = useUserAuth();

  React.useEffect(() => {
    if (values.email.trim() && values.password.trim()) {
      setValues({
        ...values,
        isButtonDisabled: false
      })
    }
	}, [ values.email, values.password ])
	
	const handleGoogleSignIn = async (e) => {
		e.preventDefault();

		try {
			await googleSignIn();
			navigate("/");
		} catch (error) {
			setErr(error.message)
		}
	}

	const formSubmitHandler = async data => {
		setErr('');
		let userAuth = {
			fullname: data.fullname,
			email: data.email,
			password: data.password,
		}
		try {
			await signIn(userAuth);
			navigate('/');
		} catch (error) {
			setErr(error.message);
			console.log(error)
		}
		
    console.log(data)
  }

  const handleChange = event => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleKeyPress = event => {
    if (event.keyCode === 13 || event.which === 13) {
      values.isButtonDisabled || handleSubmit()
    }
  }

  const toggleVisibility = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		})
	}

  return (
		<Grid className={style.root}>
			{ err && <Alert severity="error">{err}</Alert> }
			<Paper elevation={20}>
				<Grid align="center">
					<Avatar>
						<LoginIcon />
					</Avatar>
					<br />
					<h2>SIGN IN</h2>
				</Grid>
				<FormProvider {...methods}>
					<form>
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
						<Button
							sx={{ fontSize: 20 }}
							type="submit"
							onClick={handleSubmit(formSubmitHandler)}
							variant="contained"
							color="primary"
							size="large"
							fullWidth
							disabled={values.isButtonDisabled}
						>
							SIGN IN
						</Button>
						<Typography
							sx={{ textDecorationLine: "underline" }}
							mt={5}
							mb={2.5}
							align="center"
							variant="h6"
							gutterBottom
						>
							Or use the option below
						</Typography>
						<GoogleButton onClick={handleGoogleSignIn} style={{ width: "100%" }} type="dark" />
						{/* <Button
							sx={{
								padding: 1.6,
								marginTop: 1,
								backgroundColor: "black",
								" :hover": {
									background: "#363636",
								},
							}}
							type="submit"
							onClick={handleSubmit(formSubmitHandler)}
							variant="contained"
							color="primary"
							fullWidth
							startIcon={<AppleIcon />}
						>
							Sign in with Apple
						</Button> */}
					</form>
				</FormProvider>
				<h3
					style={{ marginTop: "20px", textAlign: "center", fontWeight: "bold" }}
				>
					New here? ,
					<Link style={{ color: "blue" }} to="/signup">
						Sign Up.
					</Link>
				</h3>
			</Paper>
		</Grid>
	)
}

export default SignIn;