import './AuthMail.css'
import { Box, Button } from "@mui/material"
import { Input, LoginLayout } from "../../../../core"

export const AuthMailPage = () => {
  return(    
    <LoginLayout title="Verificar correo electronico">
      <Box className="authMailContainer" component="div">
        <Box 
          component="h4"
          sx={{
            color:"#808080",
            fontWeight:"500",
          }}
        >
          Ingresa el codigo enviado a tu correo
        </Box>
        <Box 
          component="form"
          className="authCodeFieldsContainer"
        >
          <Input></Input>
          <Input></Input>
          <Input></Input>
          <Input></Input>
          <Input></Input>
          <Input></Input>
        </Box>

        <Button 
          variant="contained"
          className="authCodeButton"
        >
          Verificar Codigo
        </Button>
      </Box>
    </LoginLayout>
  )
}