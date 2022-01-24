
import * as Yup from "yup"

const SignUpSchema = Yup.object().shape({
	fullname: Yup.string()
		.required("Please enter a valid Firstname")
		.matches(/^[A-Za-z\s]+$/, "Must contain only Alphabets"),
	email: Yup.string().email().required("Please enter a valid email"),
	password: Yup.string()
		.required("Please enter your password")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
		),
	confirmPassword: Yup.string()
		.required("Please confirm your password")
		.oneOf([Yup.ref("password")], "Mismatched passwords"),
})

export default SignUpSchema;