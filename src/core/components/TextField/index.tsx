import { TextFileProps } from './TextField.interface';
import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { FC } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Input: FC<TextFileProps> = function({ 
  id = "outlined-basic", 
  label, 
  variant = "outlined", 
  type = "text",
  icon,
  value, // Agregado para manejar el valor del input
  onChange, // Agregado para manejar el cambio del input
  required = false // Agregado para manejar si el campo es requerido
}) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  // Preparar el adorno de finalización para contraseñas
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
    <TextField 
      className="TextField"
      id={id} 
      label={label} 
      type={inputType}
      variant={variant} 
      value={value} // Asignar el valor del input
      onChange={onChange} // Asignar el manejador de cambios
      required={required} // Asignar si el campo es requerido
      sx={{ bgcolor: "#ececec", width: "100%" }}
      slotProps={{
        input: {
          startAdornment: icon ? (
            <InputAdornment position="start">
              <img src={icon} alt="icon" style={{ width: 20, height: 20 }} />
            </InputAdornment>
          ) : null,
          endAdornment: endAdornment
        }
      }}
      margin="dense"
    />
  );
}