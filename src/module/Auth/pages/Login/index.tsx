import './Login.css';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import { LoginLayout } from '../../../../core';



export const LoginPage = () => {
  return (
    <Box>

      <Box>
        <img></img>
      </Box>

      <Box>
        <LoginLayout title="Bienvenido">

          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />

          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Remember me"
            labelPlacement="end"
          />

          <Typography component="span">Forgot Password?</Typography>

          <Button variant="contained">Contained</Button>
          
          <Typography component="p">-Estado de licencia activa-</Typography>

          <Typography component="p">Don't have an account?</Typography>
          <Typography component="span">Register</Typography>
        </LoginLayout>
      </Box>


    </Box>
  )
}