import { Box, Button, Divider, FormHelperText, InputAdornment, Step, StepButton, Stepper } from '@mui/material'
import { LoginLayout } from '../../../../core'
import './Register.css'
import { useEffect, useState } from 'react'
import { Input, SignatureModal } from '../../../../core/components'
import EmailIcon from '../../../../core/icon/IconsRegister/EmailIcon.svg'
import KeyIcon from '../../../../core/icon/IconsRegister/KeyIcon.svg'
import PenIcon from '../../../../core/icon/IconsRegister/PenIcon.svg'
import UserIcon from '../../../../core/icon/IconsRegister/UserIcon.svg'
import { Controller, useForm } from 'react-hook-form'
import { RegisterFormData } from './Register.interface'
import { useTranslation } from 'react-i18next'

export const RegisterPage = () => {

  const { t } = useTranslation();

  const steps = [
    t("StringsRegister.steps.personalData"),
    t("StringsRegister.steps.accessData")
  ];

  const {
    handleSubmit,
    watch,
    control,
    setValue,
    trigger,
    register,
    formState: { errors, isSubmitted }
  } = useForm<RegisterFormData>({
    defaultValues: {
      name: "",
      lastName: "",
      productKey: "",
      signature: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })

  const name = watch("name")
  const lastName = watch("lastName")
  const productKey = watch("productKey")
  const signature = watch("signature")
  const email = watch("email")
  const password = watch("password")
  const confirmPassword = watch("confirmPassword")
  const [submitted, setSubmitted] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({})


  useEffect(() => {
    if (isSubmitted) {
      trigger("confirmPassword")
    }
  }, [password, confirmPassword, trigger]);

  useEffect(() => {
    if (email) {
      trigger("email")
    }
  }, [email, trigger]);

  useEffect(() => {
    if (submitted) {
      trigger(["name", "lastName", "productKey", "signature"]);
    }
  }, [name, lastName, productKey, signature]);

  const sign = (signature: string) => {
    setValue("signature", signature);
    trigger("signature")
  }

  //@ts-ignore
  const onSubmit = handleSubmit((data) => {
    //Inset the code when you send the data
  })

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleNext = async () => {
    const isValid = await trigger(["name", "lastName", "productKey", "signature"])
    setSubmitted(true)

    if (!isValid) {
      return
    }

    setCompleted({
      [0]: true,
      [1]: false,
    })

    setActiveStep(1)
  }

  const handleStep = (step: number) => {
    if (step === 1) {
      handleNext()
    }
    else {
      handleComplete(step)
      setActiveStep(step)
    }
  }

  const handleComplete = (step: number) => {
    setCompleted({
      ...completed,
      [activeStep]: true,
      [step]: false
    });
  };

  return (
    <LoginLayout title={t("StringsRegister.title.createAccount")} className="backgroundLayout">
      <Box component="form" sx={{ display: "flex", paddingTop: "0" }} onSubmit={onSubmit} noValidate>
        <Box className="formStep" sx={{ display: activeStep === 0 ? "flex" : "none" }}>
          <Input
            id="name"
            name="name"
            label={t("StringsRegister.inputs.name")}
            icon={UserIcon}
            control={control}
            rules={{
              required: t("StringsRegister.required.name"),
              validate: (value: string) => {
                return (value.length < 2) ? t("StringsRegister.rules.name.minLength") : true
              }
            }}
          />

          <Input
            id="lastName"
            name="lastName"
            label={t("StringsRegister.inputs.lastName")}
            icon={UserIcon}
            control={control}
            rules={{
              required: t("StringsRegister.required.lastName"),
              validate: (value: string) => {
                return (value.length < 2) ? t("StringsRegister.rules.lastName.minLength") : true
              }
            }}
          />

          <Input
            id="key"
            name="productKey"
            label={t("StringsRegister.inputs.productKey")}
            icon={KeyIcon}
            control={control}
            rules={{
              required: t("StringsRegister.required.productKey"),
              validate: (value: string) => {
                return (value.length < 2) ? t("StringsRegister.rules.productKey.isValid") : true
              }
            }}
          />

          <Controller
            name="signature"
            control={control}
            rules={{ required: t("StringsRegister.required.sign")}}
            render={({field, fieldState: {error}}) =>(
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.17rem"
              }}>
                <Box className="firmBox">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "1rem",
                      width: "70%",
                      height: "3.5rem",
                      paddingX: "0.7rem",
                      border: "solid 1px #b5b5b5",
                      borderRadius: "8px",
                      borderColor: errors.signature ? "#c23f38" : "#b5b5b5",
                      backgroundColor: "#ececec",
                      paddingBottom: 0
                    }}
                  >
                    <InputAdornment position="start">
                      <img src={PenIcon} alt="icon" style={{ minWidth: 20, minHeight: 20, maxWidth: 20, maxHeight: 20 }} />
                    </InputAdornment>
  
                    <img src={field.value} style={{ maxHeight: "6.3vh" }} />
                  </Box>
  
                  <Button variant="contained" onClick={handleOpen} sx={{ width: "30%" }}>
                    {t("StringsRegister.buttons.sign")}
                  </Button>
                </Box>
  
                <FormHelperText
                  error
                  sx={{
                    marginTop: 0,
                    marginLeft: "14px",
                  }}
                >
                  {error?.message || " "}
                </FormHelperText>
              </Box>
            )}
          />

          <Button
            variant="contained"
            onClick={handleNext}
            className="stepperRegister"
            disabled={!name || !lastName || !productKey || !signature}
          >
            {t("StringsRegister.buttons.next")}
          </Button>
        </Box>

        <Divider
          className="registerDivider"
          orientation="vertical"
          flexItem aria-hidden="true"
          sx={{
            marginTop: "1.5rem",
            borderColor: "black",
            display: "none"
          }} />

        <Box className="formStep inactive" sx={{ display: activeStep === 1 ? "flex" : "none" }}>
          <Input
            id="email"
            name="email"
            label={t("StringsRegister.inputs.email")}
            type="email"
            icon={EmailIcon}
            control={control}
            rules={{
              required: t("StringsRegister.required.email"),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t("StringsRegister.rules.email.isValid")
              }
            }}
          />

          <Input
            id="password"
            name="password"
            label={t("StringsRegister.inputs.password")}
            type="password"
            icon={KeyIcon}
            control={control}
            rules={{
              required: t("StringsRegister.required.password"),
              minLength: {
                value: 8,
                message: t("StringsRegister.rules.password.minLength")
              },
              maxLength: {
                value: 127,
                message: t("StringsRegister.rules.password.maxLength")
              },
              validate: (value: string) => {
                if (!/\d/.test(value)) {
                  return t("StringsRegister.rules.password.number")
                }

                if (!/[\W_]/.test(value)) {
                  return t("StringsRegister.rules.password.symbol")
                }

                if (!/[A-Z]/.test(value)) {
                  return t("StringsRegister.rules.password.upper");
                }

                if (!/[a-z]/.test(value)) {
                  return t("StringsRegister.rules.password.lower");
                }
              }
            }}
          />

          <Input
            id="confirmPassword"
            name="confirmPassword"
            label={t("StringsRegister.inputs.confirmPassword")}
            type="password"
            icon={KeyIcon}
            control={control}
            rules={{
              required: t("StringsRegister.required.confirmPassword"),
              validate: (value: string) => {
                if (value !== password) {
                  return t("StringsRegister.rules.confirmPassword.equals")
                }
              }
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={!name || !lastName || !productKey || !signature || !email || !password || !confirmPassword}
          >
            {t("StringsRegister.buttons.registerButton")}
          </Button>
        </Box>
      </Box>

      <Stepper nonLinear activeStep={activeStep} alternativeLabel className="stepperRegister">
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={() => handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <SignatureModal open={open} handleClose={handleClose} setFirm={sign} />

    </LoginLayout>
  )
}