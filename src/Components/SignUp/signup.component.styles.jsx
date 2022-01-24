
import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
	root: {
		alignContent: "center",
		width: "400px",
		"& .MuiPaper-root": {
			padding: "20px 20px",
		},
		"& h2": {
			margin: 5,
		},
		"& .MuiAvatar-root": {
			backgroundColor: "#ff0084",
		},
		"& .MuiButton-root": {
			// background: '#ff0084'
			
		},
		"& .MuiGrid-root": {
			marginBottom: "10px",
		},
		"& .MuiTextField-root": {
			marginBottom: 16,
		},
		// "& div": {
		// 	display: 'flex',
		// 	flex: 'fle',
		// 	justifyContent: 'space-between'
		// }
	},
})