import React from 'react';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add"

function AddProject(props) {
	console.log(props)
	const { onClick } = props;
  return (
		<Button
			onClick={onClick}
			style={{
				color: "white",
				borderColor: "#181820",
				borderRadius: "20px",
				height: "100px",
				"&:hover": {
					backgroundColor: "#181820",
				},
			}}
			variant="outlined"
			// color="none"
		>
			<AddIcon />
			<h3 style={{ fontWeight: "bold" }}>Add Project</h3>
		</Button>
	)
}

export default AddProject;