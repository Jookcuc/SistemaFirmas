import { Box, Button, Divider, FormHelperText, InputAdornment, Step, StepButton, Stepper } from '@mui/material'
import { LoginLayout } from '../../../../core'
import './Register.css'
import { useEffect, useState } from 'react'
import { Input, SignatureModal } from '../../../../core/components'
import EmailIcon from '../../../../core/icon/IconsRegister/EmailIcon.svg'
import KeyIcon from '../../../../core/icon/IconsRegister/KeyIcon.svg'
import PenIcon from '../../../../core/icon/IconsRegister/PenIcon.svg'
import UserIcon from '../../../../core/icon/IconsRegister/UserIcon.svg'
import { useForm } from 'react-hook-form'
import { RegisterFormData } from './Register.interface'
import { useTranslation } from 'react-i18next'

export const RegisterPage = () => {

  const { t } = useTranslation();

  const steps = [
    t("StringsAuth.steps.personalData"),
    t("StringsAuth.steps.accessData")
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

  useEffect(() => {
    register("signature", { required: t("StringsAuth.required.signRequired") });
  }, [register]);

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
    <LoginLayout title={t("StringsAuth.title.createAccount")} className="backgroundLayout">
      <Box component="form" sx={{ display: "flex", paddingTop: "0" }} onSubmit={onSubmit} noValidate>
        <Box className="formStep" id="registerStep2" sx={{ display: activeStep === 0 ? "flex" : "none" }}>
          <Input
            id="name"
            name="name"
            label={t("StringsAuth.inputs.name")}
            icon={UserIcon}
            control={control}
            rules={{
              required: t("StringsAuth.required.nameRequired"),
              validate: (value: string) => {
                return (value.length < 2) ? t("StringsAuth.validations.nameLength") : true
              }
            }}
          />

          <Input
            id="lastName"
            name="lastName"
            label={t("StringsAuth.inputs.lastName")}
            icon={UserIcon}
            control={control}
            rules={{
              required: t("StringsAuth.required.lastNameRequired"),
              validate: (value: string) => {
                return (value.length < 2) ? t("StringsAuth.validations.lastNameLength") : true
              }
            }}
          />

          <Input
            id="key"
            name="productKey"
            label={t("StringsAuth.inputs.productKey")}
            icon={KeyIcon}
            control={control}
            rules={{
              required: t("StringsAuth.required.productKeyRequired"),
              validate: (value: string) => {
                return (value.length < 2) ? t("StringsAuth.validations.productKeyLength") : true
              }
            }}
          />

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

                <img src={signature} style={{ maxHeight: "6.3vh" }} />
              </Box>

              <Button variant="contained" onClick={handleOpen} sx={{ width: "30%" }}>
                {t("StringsAuth.buttons.sign")}
              </Button>
            </Box>

            <FormHelperText
              error
              sx={{
                marginTop: 0,
                marginLeft: "14px",
              }}
            >
              {errors.signature?.message || " "}
            </FormHelperText>
          </Box>

          <Button
            variant="contained"
            onClick={handleNext}
            className="stepperRegister"
            disabled={!name || !lastName || !productKey || !signature}
          >
            {t("StringsAuth.buttons.next")}
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

        <Box className="formStep inactive" id="registerStep2" sx={{ display: activeStep === 1 ? "flex" : "none" }}>
          <Input
            id="email"
            name="email"
            label={t("StringsAuth.inputs.email")}
            type="email"
            icon={EmailIcon}
            control={control}
            rules={{
              required: t("StringsAuth.required.emailObligatory"),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t("StringsAuth.validations.emailValid")
              }
            }}
          />

          <Input
            id="password"
            name="password"
            label={t("StringsAuth.inputs.password")}
            type="password"
            icon={KeyIcon}
            control={control}
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
              }
            }}
          />

          <Input
            id="confirmPassword"
            name="confirmPassword"
            label={t("StringsAuth.inputs.confirmPassword")}
            type="password"
            icon={KeyIcon}
            control={control}
            rules={{
              required: t("StringsAuth.required.confirmPasswordRequired"),
              validate: (value: string) => {
                if (value !== password) {
                  return t("StringsAuth.validations.confirmPassword")
                }
              }
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={!name || !lastName || !productKey || !signature || !email || !password || !confirmPassword}
          >
            {t("StringsAuth.buttons.registerButton")}
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