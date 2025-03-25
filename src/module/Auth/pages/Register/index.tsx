import { Box, Button, Divider, InputAdornment, Step, StepButton, Stepper } from '@mui/material'
import { LoginLayout } from '../../../../core'
import './Register.css'
import { useState } from 'react'
import { Input, SignatureModal } from '../../../../core/components';
import EmailIcon from '../../../../core/icon/IconsRegister/EmailIcon.svg';
import KeyIcon from '../../../../core/icon/IconsRegister/KeyIcon.svg';
import PenIcon from '../../../../core/icon/IconsRegister/PenIcon.svg';
import UserIcon from '../../../../core/icon/IconsRegister/UserIcon.svg';


const steps = [
  "Datos Personales",
  "Datos de Acceso",
];


export const RegisterPage = () => {

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [key, setKey] = useState("")
  const [firm, setFirm] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState< {[k: number]: boolean} >({});

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => () => setOpen(false);

  const handleNext = () => {
    if(name !== "" && lastName !== "" && key !== "" && firm !== ""){
      setCompleted({
        [0]: true,
        [1]: false
      })
      setActiveStep(1)
    }
    else{

    }
  }
  const handleStep = (step: number) => {
    handleComplete(step)
    setActiveStep(step)
  }

  const handleComplete = (step: number) => {
    setCompleted({
      ...completed,
      [activeStep]: true,
      [step]: false
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log('Name:', name);
    console.log('Last Name:', lastName);
    console.log('Product Key:', key);
    console.log('Firm:', firm);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <LoginLayout title="Creación de Cuenta">
      <Box component="form" sx={{display: "flex", paddingTop:"0"}} onSubmit={handleSubmit}>
        <Box className="formStep" id="registerStep2" sx={{display: activeStep === 0 ? "flex": "none"}}>
          
          <Input
            id="name"
            label="Name"
            type="text"
            icon={UserIcon}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          
          <Input
            id="lastName"
            label="Last Name"
            type="text"
            icon={UserIcon}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <Input
            id="key"
            label="Product Key"
            type="text"
            icon={KeyIcon}
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
          />

          <Box className="firmBox">
            <Box 
              sx={{
                display:"flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                width: "70%", 
                paddingX: "0.7rem",
                border:"solid 1px #b5b5b5",
                borderRadius:"8px",
                backgroundColor:"#ececec"
              }}
            >
              <InputAdornment position="start">
                <img src={PenIcon} alt="icon" style={{ minWidth: 20, minHeight: 20, maxWidth: 20, maxHeight: 20 }} />
              </InputAdornment>

              <img src={firm} style={{maxHeight: "6vh"}}/>
            </Box>

            <Button variant="contained" onClick={handleOpen} sx={{width:"30%"}}>
              Firmar
            </Button>
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
            label="Email"
            type="email"
            icon={EmailIcon}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            id="password"
            label="Password"
            type="password"
            icon={KeyIcon}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Input
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            icon={KeyIcon}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
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

      <SignatureModal open={open} handleClose={handleClose()} setFirm={setFirm}/>
      
    </LoginLayout>
  )
}




