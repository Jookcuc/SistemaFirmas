import './profile.css'
import { Avatar, Badge, Box, Button, Divider, FormHelperText, IconButton, InputAdornment, Step, StepButton, Stepper, Typography } from "@mui/material"
import { Header } from "../../../../core/components/header"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Input, SignatureModal } from "../../../../core"
import PenIcon from '../../../../core/icon/IconsRegister/PenIcon.svg'
import { ProfileData } from './Profile.interface'
import { useTranslation } from 'react-i18next'

export const Profile = () => {

  const { t } = useTranslation()

  const steps = [
    t("StringsProfile.steps.personalIfno"),
    t("StringsProfile.steps.userData")
  ];

  const {
      handleSubmit,
      watch,
      control,
      setValue,
      trigger,
      formState: { errors, isSubmitted }
    } = useForm<ProfileData>({
      defaultValues: {
        name: "",
        lastName: "",
        signature: "",
        email: "",
        password: "",
        confirmPassword: "",
        picture: null
      }
    })

  const name = watch("name")
  const lastName = watch("lastName")
  const email = watch("email")
  const password = watch("password")
  const confirmPassword = watch("confirmPassword")

  const [open, setOpen] = useState(false)
  const [avatarSrc, setAvatarSrc] = useState("")
  const [activeStep, setActiveStep] = useState(0)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const sign = (signature: string) => {
    setValue("signature", signature);
    trigger("signature")
  }

  const handleOpen = () => {
    setOpen(true);
  }
  
  const handleClose = () => {
    setOpen(false)
  }

  const handleOpenFileExplorer = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const file = event.target.files[0]
      const imageUrl = URL.createObjectURL(file)
      setAvatarSrc(imageUrl)
    }
  }

  const handleStep = (step: number) => {
      setActiveStep(step)
  }

  const formatNameDisplay = (name?: string, lastName?: string): string => {
    const safeName = name || "\u00A0"
    const safeLastName = lastName || "\u00A0"
    return `${safeName}\n${safeLastName}`
  }

  const getInitials = (name?: string, lastName?: string) => {
    const first = name?.trim()?.[0] || " "
    const last = lastName?.trim()?.[0] || " "
    return (first + last).toUpperCase()
  }
  
  const onSubmit = handleSubmit((data) => {
    //Insert the code when you send the data
  })

  useEffect(() => {
    if (isSubmitted) {
      trigger("confirmPassword")
    }
  }, [password, confirmPassword, trigger]);

  return(
    
    <Box sx={{ 
      backgroundColor: "#F4F4F4",
      minHeight: "100dvh"
    }}>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
      
      <Header />

      <Box className="profileInformation">
        <Typography 
          variant="h6"
          sx={{
            fontWeight: "Medium",
            color: "#2F2F2F",
            paddingY: "2rem"
          }}
        >
          {t("StringsProfile.title.pageTitle")}
        </Typography>
        
        <Box 
          component="form"
          onSubmit={onSubmit}
          className="userData"
          noValidate
        >
          <Typography 
            variant="h6"
            sx={{
              fontWeight: "Medium",
              color: "#2F2F2F",
              paddingX: "1.2rem",
              paddingTop: "0.3rem"
            }}
          >
            {t("StringsProfile.title.sectionTitle")}
          </Typography>

          <Box className="userProfile">
            <Box className="userProfileStep" sx={{ display: activeStep === 0 ? "flex" : "none"}}>
              <Box 
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap:"1.7rem"
                }}
              >
                <Badge
                  overlap="circular"
                  anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                  badgeContent={
                    <IconButton
                      sx={{
                        backgroundColor: "#ececec",
                        borderRadius: "8px",
                        "&: hover": {
                          backgroundColor: "#ececec"
                        }
                      }}
                      onClick={handleOpenFileExplorer}
                    >
                      <img src={PenIcon}/>
                    </IconButton>
                  }
                >
                  <Avatar
                    src={avatarSrc}
                    alt="Usuario"
                    onClick={handleOpenFileExplorer}
                    sx={{
                      height:"20vh",
                      width:"20vh"
                    }}
                  >
                    {getInitials(name, lastName)}
                  </Avatar>
                </Badge>
                
                <Typography variant="h6" sx={{whiteSpace: "pre-line", textAlign: "center"}}>
                  {formatNameDisplay(name, lastName)}
                </Typography>
                
                <Typography color="textDisabled" variant="h6">
                  {email || "\u00A0"}
                </Typography>
              </Box>
              
              <Box sx={{marginTop: "1.5rem"}}>
                <Controller
                  name= "signature"
                  control = {control}
                  rules={{ required: t("StringsProfile.required.sign") }}
                  render={({ field, fieldState: { error } }) => (
                    <Box className="profileFirmContainer">
                      <Box className="profileFirm">
                        <Box className="profileFirmField" sx={{borderColor: errors.signature ? "#c23f38" : "#b5b5b5"}}>
                          <InputAdornment position="start">
                            <img src={PenIcon} alt="icon" style={{ minWidth: 20, minHeight: 20, maxWidth: 20, maxHeight: 20 }} />
                          </InputAdornment>
                        
                          <img src={field.value} style={{ maxHeight: "5vh"}} />
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
                      
                      <Button variant="contained" onClick={handleOpen} fullWidth  className="profileFirmButton">
                        {t("StringsProfile.buttons.sign")}
                      </Button>
                    </Box>
                  )}
                />
              </Box>
            </Box>
            
            <Divider
              className="profileDivider"
              orientation="vertical"
              flexItem aria-hidden="true"
              sx={{
                marginBottom: "1rem",
                borderColor: "black",
                display: "none"
              }} 
            />
            
            <Box className="userProfileStep" sx={{ display: activeStep === 1 ? "flex" : "none"}}>
              <Input
                id="name"
                name="name"
                label={t("StringsProfile.inputs.name")}
                control={control}
                rules={{
                  required: t("StringsProfile.required.name"),
                  validate: (value: string) => {
                    return (value.length < 2) ? t("StringsProfile.rules.name.minLength") : true
                  }
                }}
              />
              
              <Input
                id="lastName"
                name="lastName"
                label={t("StringsProfile.inputs.lastName")}
                control={control}
                rules={{
                  required: t("StringsProfile.required.lastName"),
                  validate: (value: string) => {
                    return (value.length < 2) ? t("StringsProfile.rules.lastName.minLength") : true
                  }
                }}
              />

              <Input
                id="email"
                name="email"
                label={t("StringsProfile.inputs.email")}
                control={control}
                type="email"
                rules={{
                  required: t("StringsProfile.required.email"),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t("StringsProfile.rules.email.validEmail")
                  }
                }}
              />

              <Input
                id="password"
                name="password"
                label={t("StringsProfile.inputs.password")}
                control={control}
                type="password"
                rules={{
                  required: t("StringsProfile.required.password"),
                  minLength: {
                    value: 8,
                    message: t("StringsProfile.rules.password.minLength")
                  },
                  maxLength: {
                    value: 127,
                    message:  t("StringsProfile.rules.password.maxLength")
                  },
                  validate: (value: string) => {
                    if (!/\d/.test(value)) {
                      return  t("StringsProfile.rules.password.number")
                    }
                    
                    if (!/[\W_]/.test(value)) {
                      return  t("StringsProfile.rules.password.symbol")
                    }

                    if (!/[A-Z]/.test(value)) {
                      return t("StringsProfile.rules.password.upper");
                    }

                    if (!/[a-z]/.test(value)) {
                      return t("StringsProfile.rules.password.lower");
                    }
                  }
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  label={t("StringsProfile.inputs.confirmPassword")}
                  control={control}
                  type="password"
                  rules={{
                    required: t("StringsProfile.required.confirmPassword"),
                    validate: (value: string) => {
                      if (value !== password) {
                        return  t("StringsProfile.rules.confirmPassword.equals")
                      }
                    }
                  }}
                />

                <Button 
                  variant="contained"
                  type="submit"
                  sx={{
                    width: "50%",
                    height:"3.5rem",
                    marginTop: "0.5rem",
                  }}
                > 
                  {t("StringsProfile.buttons.confirm")}
                </Button>
              </Box>
            </Box>  
          </Box>
          <Stepper nonLinear activeStep={activeStep} alternativeLabel className="stepperProfile">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton color="inherit" onClick={() => handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Box>
        
        

        <SignatureModal open={open} handleClose={handleClose} setFirm={sign} />
      </Box>
    </Box>
  )
}