import './LoginLayout.css';
import {LoginLayoutProps} from './LoginLayout.interface';
import Logo from '../../../assets/assetsLogin/JookSimpleLogo.svg'
import { Box, Typography} from '@mui/material';
import { FC } from 'react';



export const LoginLayout: FC<LoginLayoutProps> = function({ children, title = "TextoEjemplo" }) {
  
  return (
    <Box className="principalContainerLayoutLogin">
      <Box className="containerChildrens"> 
        <Typography variant="h2" component="h2">{title}</Typography>
        
        {children}

        <Box className="logoContainer">
          <img alt="JookLogo" src={Logo} className="jookLogo"/>
        </Box>

        
      </Box>
    </Box>
  )
}