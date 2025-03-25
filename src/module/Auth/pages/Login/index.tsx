import './Login.css';
import { Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import { LoginLayout } from '../../../../core';
import { Input } from '../../../../core/components/';
import mailIcon from '../../../../core/icon/IconsLogin/EmailIcon.svg';
import passWodIcon from '../../../../core/icon/IconsLogin/KeyIcon.svg';
import LoginImage from '../../../../assets/assetsLogin/ImagenLogin.svg';
import { useState } from 'react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>(''); // Estado para el correo electrónico
  const [password, setPassword] = useState<string>(''); // Estado para la contraseña
  const [rememberMe, setRememberMe] = useState<boolean>(false); // Estado para "Recordarme"

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Aquí puedes agregar la lógica para manejar el inicio de sesión

  };

  return (
    <Box className="principalContainerLogin">
      <Box className="containerLoginImage">
        <img alt="LoginPageImage" src={LoginImage} className="LoginImage" />
      </Box>

      <Box className="containerLoginItems">
        <LoginLayout title="Bienvenido">

          <Box className="childContainer">

            <Box className="formContainer" component="form" onSubmit={handleSubmit}>
            
              <Box className="inpuntContainer">
                <Input
                  id="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  icon={mailIcon}
                  value={email} // Pasar el valor del estado
                  onChange={(e) => setEmail(e.target.value)} // Manejar el cambio
                  required // Campo requerido
                />
              </Box>

              <Box className="inpuntContainer">
                <Input
                  id="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  icon={passWodIcon}
                  value={password} // Pasar el valor del estado
                  onChange={(e) => setPassword(e.target.value)} // Manejar el cambio
                  required // Campo requerido
                />
              </Box>

              <Box className="rememberandforgotContainer">
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={rememberMe} // Estado del checkbox
                      onChange={(e) => setRememberMe(e.target.checked)} // Manejar el cambio
                    />
                  }
                  label="Remember me"
                  labelPlacement="end"
                  sx={{ fontSize: "small" }}
                />

                <Typography component="a" href="#" color="primary" sx={{ textDecoration: "none" }}>
                  Forgot Password?
                </Typography>
              </Box>

              <Button type="submit" variant="contained">Iniciar Sesión</Button>

            </Box>

            <Box className="registerContainer">
              <Typography component="p">Don't have an account?</Typography>
              <Typography component="a" href="#" color="primary" sx={{ textDecoration: "none" }}>
                Register
              </Typography>

            </Box>

          </Box>
        </LoginLayout>
      </Box>
    </Box>
  );
};