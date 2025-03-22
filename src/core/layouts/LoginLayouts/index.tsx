import './LoginLayout.css';
import Logo from '../../../assets/assetsLogin/JookSimpleLogo.svg'
import { Box, Typography} from '@mui/material';
import { ReactNode, FC } from 'react';

interface Props {
  children: ReactNode;
  title?: string;
}


export const LoginLayout: FC<Props> = function(props) {
  const title = props.title || "TextoEjemplo";
  
  return (
    <Box className="principalContainerLayoutLogin">
      <Box className="containerChildrens"> 
        <Typography variant="h2" component="h2">{title}</Typography>
        
        {props.children}

        <Box className="logoContainer">
          <img alt="JookLogo" src={Logo} className="jookLogo"></img>
        </Box>

        
      </Box>
    </Box>
  )
}