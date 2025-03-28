import { Box, Button, Divider, FormHelperText, InputAdornment, Step, StepButton, Stepper, Typography } from '@mui/material'
import { LoginLayout } from '../../../../core'
import './Register.css'
import { useEffect, useState } from 'react'
import { Input, SignatureModal } from '../../../../core/components';
import EmailIcon from '../../../../core/icon/IconsRegister/EmailIcon.svg';
import KeyIcon from '../../../../core/icon/IconsRegister/KeyIcon.svg';
import PenIcon from '../../../../core/icon/IconsRegister/PenIcon.svg';
import UserIcon from '../../../../core/icon/IconsRegister/UserIcon.svg';
import { useForm } from 'react-hook-form';
import { RegisterFormData } from './Register.interface';


const steps = [
  "Datos Personales",
  "Datos de Acceso",
];


export const RegisterPage = () => {

  const {
    handleSubmit,
    watch,
    control,
    setValue,
    trigger,
    register,
    formState: { errors }
  } = useForm<RegisterFormData>({
    defaultValues: {
      name:"",
      lastName:"",
      productKey:"",
      signature:"",
      email:"",
      password:"",
      confirmPassword:""
    }
  })

  const [submitted, setSubmitted] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState< {[k: number]: boolean} >({})


  useEffect(() => {
    if (submitted) {
      trigger(["name", "lastName", "productKey", "signature"]);
    }
  }, [watch("name"), watch("lastName"), watch("productKey"), watch("signature")]);

  useEffect(() => {
    register("signature", { required: "The signature is required" });
  }, [register]);

  const sign = (signature:string) => {
    setValue("signature", signature);
    trigger("signature")
  }

  const onSubmit = handleSubmit( (data) => {
    console.log("Formulario enviado:", data)
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
    if(step === 1){
      handleNext()
    }
    else{
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
    <LoginLayout title="Creación de Cuenta" className="backgroundLayout">
      <Box component="form" sx={{display: "flex", paddingTop:"0"}} onSubmit={onSubmit}>
        <Box className="formStep" id="registerStep2" sx={{display: activeStep === 0 ? "flex": "none"}}>
          <Input
            id="name"
            name="name"
            label="Name"
            icon={UserIcon}
            control={control}
            rules={{
              required:"The Name is requiered",
              validate: (value:string) => {
                return (value.length<2) ? "The name must have at least 2 characters" : true
              }
            }}
          />
          
          <Input
            id="lastName"
            name="lastName"
            label="Last Name"
            icon={UserIcon}
            control={control}
            rules={{
              required:"The LastName is requiered",
              validate: (value:string) => {
                return (value.length<2) ? "The name must have at least 2 characters" : true
              }
            }}
            />

          <Input
            id="key"
            name="productKey"
            label="Product Key"
            icon={KeyIcon}
            control={control}
            rules={{
              required:"The product key is requiered",
              validate: (value:string) => {
                return (value.length<2) ? "Enter a valid product key" : true
              }
            }}
          />

          <Box sx={{
            display:"flex", 
            flexDirection:"column", 
            gap:"0.17rem"
          }}>
            <Box className="firmBox">
              <Box
                sx={{
                  display:"flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "1rem",
                  width: "70%",
                  height:"3.5rem", 
                  paddingX: "0.7rem",
                  border:"solid 1px #b5b5b5",
                  borderRadius:"8px",
                  borderColor: errors.signature ? "#c23f38" : "#b5b5b5",
                  backgroundColor:"#ececec",
                  paddingBottom:0
                }}
              > 
                <InputAdornment position="start">
                  <img src={PenIcon} alt="icon" style={{ minWidth: 20, minHeight: 20, maxWidth: 20, maxHeight: 20 }} />
                </InputAdornment>

                <img src={watch("signature")} style={{maxHeight: "6.3vh"}}/>
              </Box>

              <Button variant="contained" onClick={handleOpen} sx={{width:"30%"}}>
                Firmar
              </Button>
            </Box>

            <FormHelperText 
              error
              sx={{
                marginTop:0,
                marginLeft: "14px",
              }}
            >
              {errors.signature?.message || " "}
            </FormHelperText>
          </Box>
          
          <Button variant="contained" onClick={handleNext} className="stepperRegister"> Siguiente </Button>
        </Box>

        <Divider 
          className="registerDivider"
          orientation="vertical" 
          flexItem aria-hidden="true" 
          sx={{
            marginTop: "1.5rem",
            borderColor: "black",
            display: "none"
          }}/>

        <Box className="formStep inactive" id="registerStep2" sx={{display: activeStep === 1 ? "flex": "none"}}>
          <Input
            id="email"
            name="email"
            label="Email"
            type="email"
            icon={EmailIcon}
            control={control}
            rules={{
              required:"The email is requiered",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Pleas, enter a valid email"
              }
            }}
          />

          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            icon={KeyIcon}
            control={control}
            rules={{
              required:"The password is requiered",
              minLength: {
                value: 8,
                message: "The password must have at least 8 characters"
              },
              maxLength: {
                value: 127,
                message: "The password only supports 127 characters"
              },
              validate: (value: string) => {   
                if(!/\d/.test(value)){
                  return "The password must have at least a number"
                }

                if(!/[\W_]/.test(value)){
                  return "The password must have at least a simbol"
                }
              }
            }}
          />

          <Input
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            icon={KeyIcon}
            control={control}
            rules={{
              required: "The confirmed password is requiered",
              validate: (value: string) => {
                if(value !== watch("password")){
                  return "The passwords are different"
                }
              }
            }}
          />

          <Button type="submit" variant="contained"> Registrarse </Button>
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

      <SignatureModal open={open} handleClose={handleClose} setFirm={sign}/>
      
    </LoginLayout>
  )
}