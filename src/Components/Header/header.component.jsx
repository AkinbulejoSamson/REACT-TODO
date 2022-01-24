import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import MenuItem from "@mui/material/MenuItem"

import { Link } from "react-router-dom"

import { useUserAuth } from "../../Context/UserAuthContext"

const Header = () => {
  const { user, logOut } = useUserAuth()

  console.log(user)
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message)
    }
  }

	return (
		<Box>
			<AppBar sx={{ backgroundColor: "#181820" }}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						aria-label="menu"
						sx={{ mr: 2 }}
						color="inherit"
					>
						<MenuIcon />
					</IconButton>
					<div
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<MenuItem>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								<Link style={{ textDecoration: "none", color: "white" }} to="/">
									Dashboard
								</Link>
							</Typography>
            </MenuItem>
            {
              user
                ? <MenuItem onClick={handleSignOut}>
							      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							    	  Sign Out
							      </Typography>
                  </MenuItem>
                : <MenuItem>
							      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							    	  <Link style={{ textDecoration: "none", color: "white" }} to="/signin">
								    	  Sign In
								      </Link>
							      </Typography>
                  </MenuItem>
            }
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
