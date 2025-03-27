import './Login.css';
import {LoginFormData} from './login.interface';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import { LoginLayout } from '../../../../core';
import { Input } from '../../../../core/components/';
import mailIcon from '../../../../core/icon/IconsLogin/EmailIcon.svg';
import passWodIcon from '../../../../core/icon/IconsLogin/KeyIcon.svg';
import LoginImage from '../../../../assets/assetsLogin/ImagenLogin.svg';
import { useTranslation } from 'react-i18next';




export const LoginPage: React.FC = () => {
  
  const {t}=useTranslation();

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
        <LoginLayout title={t("StringsAuth.title.welcome")}>
          <Box className="childContainer">
            <Box className="formContainer" component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Box className="inpuntContainer">
                <Input
                  className="textField"
                  id="email"
                  label={t("StringsAuth.inputs.email")}
                  variant="outlined"
                  type="email"
                  icon={mailIcon}
                  control={control}
                  name="email"
                  rules={{
                    required: t("StringsAuth.required.emailObligatory"),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t("StringsAuth.required.correctEmail")
                    }
                  }}
                />
              </Box>

              <Box className="inpuntContainer">
                <Input
                  className="textField"
                  id="password"
                  label={t("StringsAuth.inputs.password")}
                  variant="outlined"
                  type="password"
                  icon={passWodIcon}
                  control={control}
                  name="password"
                  rules={{
                    required: t("StringsAuth.required.passwordObligatory")
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
                  label={t("StringsAuth.checkboxes.rememberMe")}
                  labelPlacement="end"
                  sx={{ fontSize: "small" }}
                />

                <Typography component="a" href="#" color="primary" sx={{ textDecoration: "none" }}>
                  {t('StringsAuth.links.forgotPassword')}
                </Typography>
              </Box>

              <Button type="submit" variant="contained">{t("StringsAuth.buttons.login")}</Button>

            </Box>

            <Box className="registerContainer">
              <Typography component="p">{t("StringsAuth.links.noAccount")}</Typography>
              <Typography component="a" href="/Register" color="primary" sx={{ textDecoration: "none" }}>
              {t("StringsAuth.buttons.register")}
              </Typography>
            </Box>
          </Box>
        </LoginLayout>
      </Box>
    </Box>
  );
};