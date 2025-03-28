import { TextField } from "@mui/material"
import { forwardRef } from "react"
import { OtpInputProps } from "./OtpTextfield.interface"


export const OtpTextField = forwardRef<HTMLInputElement, OtpInputProps>(
  ({ className, id, onChange, onPaste, value }, ref) => {
    return (
      <TextField
        inputRef={ref} 
        className={className}
        id={id}
        value={value}
        onChange={onChange}
        onPaste={onPaste}
        sx={{
          width: "100%",
          bgcolor: "#ececec",
          "& input": { textAlign: "center" }
        }}
        slotProps={{
          htmlInput: {
            maxLength: 1,
            inputMode: "numeric"
          }
        }}
      />
    )
  }
)