import './AuthMail.css'
import { Box, Button, Typography } from "@mui/material"
import { LoginLayout, OtpTextField } from "../../../../core"
import { ChangeEvent, ClipboardEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const AuthMailPage = () => {
  const {t} = useTranslation();
  
  const [values, setValues] = useState(Array(6).fill(""))
  const [error, setError] = useState(false)
  const inputRefs = useRef([] as (HTMLInputElement | null)[])

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6)
  }, [])

  const onChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value.replace(/\D/g, "")
    const newValues = [...values]
    newValues[index] = newValue
    setValues(newValues)

    if(newValue && index<5){
      inputRefs.current[index + 1]?.focus()
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
      // values.join("") This function join the characters use it when you send the code to validate
    }
    else{
      setError(true)
    }
  }

  return(    
    <LoginLayout title={t("StringsAuthMail.title")} className="layoutAuthMail">
      <Box className="authMailContainer" component="div">
        <Typography 
          component="h4"
          fontWeight={500}
          color="#808080"
        >
          {t("StringsAuthMail.description")}
        </Typography>

        <Box component="form" onSubmit={onSubmit}>
          <Box className="authCodeFieldsContainer">
            {values.map((val, index) => (
              <OtpTextField
                key={index}
                id={`verificationCode${index}`}
                className="verificationCodeInput"
                value={val}
                onChange={(e) => onChange(e, index)}
                onPaste={onPaste}
                ref={(el) => { if (el) inputRefs.current[index] = el; }}
              />
            ))}
          </Box>
          
          {error && (
            <Typography color="error">
              {t("StringsAuthMail.required")}
            </Typography>
          )}

          <Button 
            variant="contained"
            className="authCodeButton"
            type="submit"
            fullWidth
          >
            {t("StringsAuthMail.button")}
          </Button>
        </Box>
      </Box>
    </LoginLayout>
  )
}