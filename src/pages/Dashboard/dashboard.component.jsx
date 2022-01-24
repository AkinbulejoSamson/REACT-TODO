import * as React from "react"
import Box from "@mui/system/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"

import ProjectItem from '../../Components/Project-Item/project-item.component'
import AddProject from "../../Components/AddProject/add-project.component"
import AddDialog from "../../Components/AddProject DIalog/addDialog.component"
import { useUserAuth } from "../../Context/UserAuthContext"

const DashboardPage = () => {
	const { user } = useUserAuth();

	const [ openDialog, setOpenDialog ] = React.useState(false);

	return (
		<Box
			style={{
				height: "80vh",
				width: "80%",
				padding: 2,
				overflow: "hidden",
			}}
		>
			<Grid style={{ width: "100%" }} container spacing={2}>
				<Grid align="right" item xs={6} style={{ padding: "50px" }}>
					<Avatar style={{ width: "150px", height: "150px" }} />
				</Grid>
				<Grid
					style={{
						display: "grid",
						placeItems: "center left",
					}}
					item
					xs={6}
				>
					<Typography
						style={{ color: "white" }}
						variant="h5"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Welcome, {
							user ? `${user.displayName}` : `Stranger`
						}.
					</Typography>
				</Grid>

				<Box
					style={{
						width: "60vh",
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gridGap: "20px",
						margin: "auto",
					}}
				>
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
					<AddProject onClick={() => setOpenDialog(true)} />
					<AddDialog
						openDialog={openDialog}
						setOpenDialog={setOpenDialog}
					/>
				</Box>
			</Grid>
		</Box>
	)
}

export default DashboardPage
