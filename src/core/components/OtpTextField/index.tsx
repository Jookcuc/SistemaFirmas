import { TextField } from "@mui/material"
import { FC } from "react"
import { OtpInputProps } from "./OtpTextfield.interface"


export const OtpTextField:FC<OtpInputProps> = ({
  className, id, onChange, onPaste, value
}) => {
  
  return(
    <TextField
      className={className}
      id={id}
      value={value}
      onChange={onChange}
      onPaste={onPaste}
      sx={{
        width: "100%",
        bgcolor: "#ececec",
        "& input": { textAlign: "center"}
      }}
      slotProps={{
        htmlInput:{
          maxLength: 1,
          inputMode:"numeric"
        }
      }}
    >
    </TextField>
  )
}