import React from "react";
import TextField from "@mui/material/TextField"

import { useFormContext } from "react-hook-form"

const TextInput = ({
	name,
	label,
	onChange,
	type,
}) => {
	const {
		register,
		onBlur,
		formState: { errors },
	} = useFormContext()

	// console.log(errors)
	return (
		<TextField
			{...register(name)}
			type={type}
			label={label}
			onChange={onChange}
			error={!!errors[name]}
			helperText={errors[name]?.message ?? ""}
			fullWidth
			variant="outlined"
		/>
	)
}

export default TextInput;