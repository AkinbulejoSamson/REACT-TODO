import React from 'react';

import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import Typography from "@mui/material/Typography"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5),
    backgroundColor: '#131317',
    width: '50vh'
  }
}))

const AddDialog = (props) => {
  console.log(props)
  const { openDialog, setOpenDialog } = props
  const classes = useStyles();

  return (
		<Dialog
			maxWidth="xl"
			open={openDialog}
			classes={{
				paper: classes.wrapper,
			}}
		>
			<DialogTitle>
				<div style={{ display: "flex" }}>
					<Typography
						component="div"
						variant="h4"
						style={{ flexGrow: 1, color: "white" }}
					>
						Add Project
					</Typography>
					<IconButton
						style={{ backgroundColor: "white", color: "red" }}
						onClick={() => {
							setOpenDialog(false)
						}}
					>
						<CloseIcon style={{ fontSize: "26px" }} />
					</IconButton>
				</div>
			</DialogTitle>
			<DialogContent dividers style={{ marginTop: "10px" }}>
				<Typography style={{ color: "white" }} variant="h5">
					{" "}
					Name:{" "}
				</Typography>
				<TextField
					sx={{ input: { color: "white" } }}
					style={{
						width: "100%",
						marginTop: "16px",
						backgroundColor: "#181820",
						color: "white",
					}}
					fullwidth
					name="addProject"
					variant="outlined"
					focused
				/>
			</DialogContent>
			<DialogActions>
				<Button
					style={{
						color: "white",
						backgroundColor: "#181820",
					}}
					variant="contained"
				>
					Create
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default AddDialog;
