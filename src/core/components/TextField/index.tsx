import { InputProps } from "./TextField.interface";
import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export function Input<T extends FieldValues>({ 
  className,
  name,
  label,
  control,
  type = "text",
  icon,
  variant = "outlined",
  required = false,
  rules = {},
  id
}: InputProps<T>) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  
  const inputType = type === "password" && showPassword ? "text" : type;


  const endAdornment = type === "password" ? (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {showPassword ? (
          <VisibilityOffIcon fontSize="large" />
        ) : (
          <VisibilityIcon fontSize="large" />
        )}
      </IconButton>
    </InputAdornment>
  ) : null;

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required ? "Este campo es obligatorio" : false,
        ...(type === "email" ? {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Por favor, introduce un correo electrónico válido"
          }
        } : {}),
        ...rules
      }}
      render={({ 
        field, 
        fieldState: { error } 
      }) => (
        <TextField
          {...field}
          id={id}
          className={className}
          label={label}
          type={inputType}
          variant={variant}
          error={!!error}
          helperText={error?.message || " " }
          required={required}
          sx={{ 
            width: "100%", 
            "& div": { bgcolor: "#ececec"}
          }}
          slotProps={{
            input:{
              startAdornment: icon ? (
                <InputAdornment position="start">
                  <img 
                    src={icon} 
                    alt="icon" 
                    style={{ width: 20, height: 20 }} 
                  />
                </InputAdornment>
              ) : null,
              endAdornment: endAdornment,
            }
          }}
          margin="dense"
        />
      )}
    />
  );
}