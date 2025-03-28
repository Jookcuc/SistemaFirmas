import './Login.css';
import {LoginFormData} from './login.interface';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import { LoginLayout } from '../../../../core';
import { Input } from '../../../../core/components/';
import mailIcon from '../../../../core/icon/IconsLogin/EmailIcon.svg';
import passWodIcon from '../../../../core/icon/IconsLogin/KeyIcon.svg';
import LoginImage from '../../../../assets/assetsLogin/ImagenLogin.svg';


export const LoginPage: React.FC = () => {
  const { 
    control, 
    handleSubmit, 
    register 
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log('Form Data:', data);
    



  };

  return (
    <Box className="principalContainerLogin">
      <Box className="containerLoginImage">
        <img alt="LoginPageImage" src={LoginImage} className="LoginImage" />
      </Box>

      <Box className="containerLoginItems">
        <LoginLayout title="Bienvenido">
          <Box className="childContainer">
            <Box className="formContainer" component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Box className="inpuntContainer">
                <Input
                  className="textField"
                  id="email"
                  label="Email"
                  type="email"
                  icon={mailIcon}
                  control={control}
                  name="email"
                  rules={{
                    required: "El correo electrónico es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Por favor, introduce un correo electrónico válido"
                    }
                  }}
                />
              </Box>

              <Box className="inpuntContainer">
                <Input
                  className="textField"
                  id="password"
                  label="Password"
                  type="password"
                  icon={passWodIcon}
                  control={control}
                  name="password"
                  rules={{
                    required: "La contraseña es obligatoria"
                  }}
                />
              </Box>

              <Box className="rememberandforgotContainer">
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      {...register('rememberMe')}
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
              <Typography component="a" href="/Register" color="primary" sx={{ textDecoration: "none" }}>
                Register
              </Typography>
            </Box>
          </Box>
        </LoginLayout>
      </Box>
    </Box>
  );
};