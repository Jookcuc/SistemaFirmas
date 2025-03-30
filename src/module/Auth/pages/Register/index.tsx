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
   <p>poto</p>
  )
}




