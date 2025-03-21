import './LoginLayout.css';
import Logo from '../../../assets/assetsLogin/JookSimpleLogo.svg'
import { Box, Typography, Button } from "@mui/material";


export const LoginLayout = ({tittle="TextoEjemplo"}) => {
  return (

      /**Conteneor principal del layout**/
      <Box className="container1"> 

        {/**Titulo Base layout**/}
        <Typography variant="h2" component="h2">{tittle}</Typography>

        {/**Other Things*/}
        
        {/**Imagen del logo de Jook*/}

        <Box className="imgContainer">
          <img alt="JookLogo" src={Logo} className='jookLogo'></img>
        </Box>
        
      </Box>

    
  )
}



