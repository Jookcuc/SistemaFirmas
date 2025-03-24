import { Avatar, Box, Button, Divider, InputAdornment, Step, StepButton, Stepper, TextField } from '@mui/material'
import { LoginLayout } from '../../../../core'
import './Register.css'
import { useState } from 'react'
import { SignatureModal } from '../../../../core/components';
import EditIcon from '@mui/icons-material/Edit';

const steps = [
  "Datos Personales",
  "Datos de Acceso",
];


export const RegisterPage = () => {

  const [firm, setFirm] = useState("")
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean
  }>({});

  const handleOpen = () => () => {
    setOpen(true);
  }

  const handleClose = () => () => setOpen(false);

  const handleNext = () => () => {
    setCompleted({
      [0]: true,
      [1]: false
    })
    setActiveStep(1)
  }
  const handleStep = (step: number) => () => {
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

  return (
    <LoginLayout title="Creación de Cuenta">
      <Box component="form" sx={{display: "flex", paddingTop:"0"}}>
        <Box className="formStep" id="registerStep2" sx={{display: activeStep === 0 ? "flex": "none"}}>
          <TextField id='puto'></TextField>
          <TextField></TextField>
          <TextField></TextField>
          <Box className="firmBox">
            <Box 
              sx={{
                display:"flex",
                alignItems: "center",
                gap: "1rem",
                width: "70%", 
                paddingX: "0.7rem",
                border:"solid 2px #e5e5e5",
                borderRadius:"4px"
              }}
            >
              <EditIcon />
              <img src={firm} style={{maxHeight: "6vh"}}/>
            </Box>
            <Button variant="contained" onClick={handleOpen()} sx={{width:"30%"}}>
              Firmar
            </Button>
          </Box>
          <Button variant="contained" onClick={handleNext()} className="stepperRegister"> Siguiente </Button>
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
          <TextField></TextField>
          <TextField></TextField>
          <TextField></TextField>
          <Button variant="contained"> Registrarse </Button>
        </Box>
      </Box>

      <Stepper nonLinear activeStep={activeStep} alternativeLabel className="stepperRegister">
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <SignatureModal open={open} handleClose={handleClose()} setFirm={setFirm}/>
      
    </LoginLayout>
  )
}




