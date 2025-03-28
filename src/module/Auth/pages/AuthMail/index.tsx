import './AuthMail.css'
import { Box, Button, Typography } from "@mui/material"
import { LoginLayout, OtpTextField } from "../../../../core"
import { ChangeEvent, ClipboardEvent, FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const AuthMailPage = () => {
  const {t} = useTranslation();
  
  const [values, setValues] = useState(Array(6).fill(""))
  const [error, setError] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target
    const newValue = value.replace(/\D/g, "");

    const index = Number(id.replace("verificationCode", ""))

    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);

    if(newValue && index<5){
      const nextInput = document.getElementById(`verificationCode${index + 1}`)
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }
  }

  const onPaste = (e: ClipboardEvent) => {
    e.preventDefault()
    const pastedText = e.clipboardData.getData("text").replace(/\D/g, "")
    const target = e.target as HTMLInputElement
    const id = target.id
    const startIndex = Number(id.replace("verificationCode", ""))
    const newValues = [...values]

    pastedText.slice(0, 6-startIndex).split("").forEach((char, i) => {
      newValues[startIndex+i] = char
    })

    setValues(newValues)
  }

  const onSubmit = (e: FormEvent) =>{
    e.preventDefault()
    if(values.every((char) => char !== "")){
      setError(false)
      console.log(values.join(""))
    }
    else{
      setError(true)
      console.log("AAAAAAAAA")
    }
  }

  return(    
    <LoginLayout title={t("StringsAuth.title.emailVerification")} className="layoutAuthMail">
      <Box className="authMailContainer" component="div">
        <Typography 
          component="h4"
          fontWeight={500}
          color="#808080"
        >
          {t("StringsAuth.texts.verifyEmail")}
        </Typography>

        <Box component="form" onSubmit={onSubmit}>
          <Box className="authCodeFieldsContainer">
            {values.map((val, index) => (
              <OtpTextField
                key={index}
                id={`verificationCode${index}`}
                className="verificationCodeInput"
                value={val}
                onChange={onChange}
                onPaste={onPaste}
              />
            ))}
          </Box>
          
          {error && (
            <Typography color="error">
              {t("StringsAuth.required.confirmationCodeRequired")}
            </Typography>
          )}

          <Button 
            variant="contained"
            className="authCodeButton"
            type="submit"
            fullWidth
          >
            {t("StringsAuth.buttons.verifyCode")}
          </Button>
        </Box>
      </Box>
    </LoginLayout>
  )
}