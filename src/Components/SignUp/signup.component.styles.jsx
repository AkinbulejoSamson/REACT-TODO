import React from "react";
import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
	root: {
		alignContent: "center",
		width: "350px",
		"& .MuiPaper-root": {
			padding: "20px 20px",
		},
		"& h2": {
			margin: 5,
		},
		"& .MuiAvatar-root": {
			backgroundColor: "#ff0084",
		},
		"& .MuiGrid-root": {
			marginBottom: "20px",
		},
		"& .MuiTextField-root": {
			marginBottom: 16,
		},
	},
})