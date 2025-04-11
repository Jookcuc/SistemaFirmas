import './ForgotPassword.css';
import {ForgotFormData} from './Forgot.interface';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Typography, Box } from '@mui/material';
import { LoginLayout } from '../../../../core';
import { Input } from '../../../../core/components/';
import mailIcon from '../../../../core/icon/IconsLogin/EmailIcon.svg';
import keyIcon from '../../../../core/icon/IconsLogin/KeyIcon.svg';
import ForgotImag from '../../../../assets/assetsLogin/forgotPasswordImg.svg';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword: React.FC = () => {
  const {t} = useTranslation();
  const [formStage, setFormStage] = useState<'email' | 'code' | 'password'>('email');
  
  const { 
    control, 
    handleSubmit,
    watch,
    reset,
  } = useForm<ForgotFormData>({
    defaultValues: {
      email: "",
      code: "",
      password: "",
      confirmPassword: ""
    }
  });

  const password = watch('password');
  const navigate = useNavigate();

  const getFormMessage = () => {
    switch (formStage) {
      case "email":
        return t("StringsAuth.texts.putEmail");
      case "code":
        return t("StringsAuth.texts.enterCode");
      case "password":
        return t("StringsAuth.texts.newPassword");
      default:
        return "";
    }
  };

  const onSubmit: SubmitHandler<ForgotFormData> = (data) => {
    console.log('Form Data:', data);
    
    if (formStage === 'email') {
      setFormStage('code');
    } 
    else if (formStage === 'code') {
      setFormStage('password');

      reset({
        ...data,
        password: "",
        confirmPassword: ""
      });
    } 
    else {
      console.log('Restablecimiento de contraseña completo:', data);
      navigate("/auth/login");
    }
  };
  
  return (
    <Box className="principalContainerForgot">
      <Box className="containerForgotItems">
        <LoginLayout title={t("StringsAuth.title.recoverPassword")} className="loginLayoutContainer" >
          <Box className="childContainer">
            
            <Box className="formContainer" component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Typography sx={{ fontSize: "small", color:"grey"}}>
                {getFormMessage()}
              </Typography>
              
              {/* Campo de Email visible solo en las primeras dos etapas */}
              {(formStage === 'email' || formStage === 'code') && (
                <Box className="inputContainer">
                  <Input
                    className="textField"
                    id="email"
                    label={t("StringsAuth.inputs.email")}
                    variant="outlined"
                    type="email"
                    icon={mailIcon}
                    control={control}
                    name="email"
                    disabled={formStage !== 'email'}
                    rules={{
                      required: t("StringsAuth.required.emailObligatory"),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("StringsAuth.required.correctEmail")
                      }
                    }}
                  />
                </Box>
              )}
              
              {/* Campo de código visible en la segunda etapa */}
              {formStage === 'code' && (
                <Box className="inputContainer">
                  <Input
                    className="textField"
                    id="code"
                    label={t("StringsAuth.inputs.code")}
                    variant="outlined"
                    type="text"
                    icon={keyIcon}
                    control={control}
                    name="code"
                    rules={{
                      required: t("StringsAuth.required.codeObligatory"),
                      pattern: {
                        value: /^[0-9]{6}$/,
                        message: t("StringsAuth.validations.correctCode"),
                      },
                      maxLength: {
                        value: 6,
                        message: t("StringsAuth.required.maxLengthCode")
                      }
                    }}
                  />
                </Box>
              )}
              
              {/* Campos de contraseña visibles en la tercera etapa */}
              {formStage === 'password' && (
                <>
                  <Box className="inputContainer">
                    <Input
                      className="textField"
                      id="password"
                      label={t("StringsAuth.inputs.password")}
                      variant="outlined"
                      type="password"
                      icon={keyIcon}
                      control={control}
                      name="password"
                      rules={{
                        required: t("StringsAuth.required.passwordObligatory"),
                        minLength: {
                          value: 8,
                          message: t("StringsAuth.validations.passwordMinLength")
                        },
                        maxLength: {
                          value: 127,
                          message: t("StringsAuth.validations.passwordMaxLength")
                        },
                        validate: (value: string) => {
                          if (!/\d/.test(value)) {
                            return t("StringsAuth.validations.passwordNumber")
                          }
          
                          if (!/[\W_]/.test(value)) {
                            return t("StringsAuth.validations.passwordSymbol")
                          }
                          
                          if (!/[A-Z]/.test(value)) {
                            return t("StringsAuth.validations.passwordUppercase");
                          }
                        
                          if (!/[a-z]/.test(value)) {
                            return t("StringsAuth.validations.passwordLowercase");
                          }
                        }
                      }}
                    />
                  </Box>
                  
                  <Box className="inputContainer">
                    <Input
                      className="textField"
                      id="confirmPassword"
                      label={t("StringsAuth.inputs.confirmPassword")}
                      variant="outlined"
                      type="password"
                      icon={keyIcon}
                      control={control}
                      name="confirmPassword"
                      rules={{
                        required: t("StringsAuth.required.confirmPasswordRequired"),
                        validate: (value: string) => {
                          if (value !== password) {
                            return t("StringsAuth.validations.confirmPassword")
                          }
                        }
                      }}
                    />
                  </Box>
                </>
              )}
              
              <Button type="submit" variant="contained">
                {formStage === 'email' 
                  ? t("StringsAuth.buttons.verifyEmail")
                  : formStage === 'code'
                    ? t("StringsAuth.buttons.verifyEmail")
                    : t("StringsAuth.buttons.changePassword")}
              </Button> 
            </Box>
          </Box>
        </LoginLayout>
      </Box>
      <Box className="containerForgotImage">
        <img alt="ForgotPageImage" src={ForgotImag} className="ForgotImage"/>
      </Box>
    </Box>
  );
};