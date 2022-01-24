import React from "react"
import { Route } from "react-router-dom"

import SignUp from "../../Components/SignUp/signup.component"
import SignIn from "../../Components/SignIn/sign-in.component"

const SignUpPage = () => {
	return (
		<div style={{ height: "65vh" }}>
			<SignUp />
		</div>
	)
}

export default SignUpPage
