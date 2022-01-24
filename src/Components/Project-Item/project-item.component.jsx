import * as React from 'react';
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import ButtonBase from "@mui/material/ButtonBase"
import CreateIcon from "@mui/icons-material/Create"


const ProjectItem = () => {
  return (
		<div
			style={{
				background: "#181820",
				width: "80%",
				borderRadius: "20px",
				margin: "0px",
				padding: "25px",
				display: "flex",
        cursor: 'pointer'
			}}
		>
			<div
				style={{
					background: "#78244f",
					width: "50px",
					height: "50px",
					borderRadius: "10px",
					display: "grid",
					placeItems: "center",
					padding: "0px",
					margin: "0px",
				}}
			>
				<CreateIcon sx={{ fontSize: "35px" }} />
			</div>
			<div
				style={{
					padding: "0 0 0 10px",
					margin: "0 ",
				}}
			>
				<h3
					style={{
						color: "white",
						padding: "0px",
						margin: "0px",
					}}
				>
					School
				</h3>
				<p
					style={{
						color: "white",
						padding: "0",
						margin: "0",
					}}
				>
					1 task
				</p>
			</div>
		</div>
	)
}

export default ProjectItem;