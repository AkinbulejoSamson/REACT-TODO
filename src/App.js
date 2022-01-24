import * as React from "react"

import Header from "./Components/Header/header.component"
import { Route, Routes } from "react-router-dom"
import { UserAuthContextProvider } from "./Context/UserAuthContext"

import DashboardPage from "./pages/Dashboard/dashboard.component"
import SignInPage from "./pages/SignIn/signInPage.component"
import SignUpPage from "./pages/SignIn/signUpPage.component"
import ProjectPage from "./pages/Projects/projectPage.component"


import "./App.css"

const App = () => {
	return (
		<div className="App">
			<UserAuthContextProvider>
			  <Header />
				<Routes>
					<Route exact path="/" element={<DashboardPage />} />
					<Route path="/signin" element={<SignInPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/project" element={<ProjectPage />} />

					{/* <SignUp/> */}
				</Routes>
			</UserAuthContextProvider>
		</div>
	)
}

export default App
