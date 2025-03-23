import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider } from '@mui/material';
import {SignatureModalProps} from './SignatureModal.interface'
import { FC } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloudAdd from '../../icon/CloudAdd/cloud-add.svg'


export const SignatureModal:FC<SignatureModalProps> = function({open, handleClose}) {
  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      fullWidth 
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "20px", // Ajusta el radio según necesites
        }
      }}
    >
      <Box 
        sx={{display: "flex",
          alignItems: "center",
          paddingX:"1rem"
        }}
      >
        <HighlightOffIcon 
          sx={{position:"absolute", right: 8, top: 8}}
          onClick={() => handleClose()}
        />

        <Box 
          sx={{
            display:"flex", 
            justifyContent:"center", 
            alignItems: "center", 
            border:" 3px solid #e2e2e2",
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            objectFit: "contain"
          }}
        >
          <img src={CloudAdd}></img>
        </Box>

        <Box>
          <DialogTitle sx={{paddingBottom: 0}}> Subir Firma </DialogTitle>
          <DialogContent sx={{color: "#888"}}> Escribe tu firma en la pizarra y selecciona subir </DialogContent>
        </Box>
      </Box>

      <Divider />

      <Box>
        <DialogTitle sx={{paddingBottom: "0.8rem"}}> Pizarra </DialogTitle>
        <Box 
          sx={{border: "3px #888 dashed",
            borderRadius: "8px",
            width: "91.5%",
            height: "30vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifySelf: "center",
            marginBottom: "1rem"
          }}
        />

        <DialogActions 
          sx={{display:"flex", 
          justifyContent: "center", 
          paddingTop:"0.3rem",
          marginBottom:"1rem"}}
        >
          <Button 
            variant="contained"
            sx={{backgroundColor: "#fff",
              color: "#54575c",
              border: "solid #cbd0dc",
              boxShadow: "none",
              fontSize: "20px",
              paddingY: "0.3rem"
            }}  
          > Subir Firma </Button>
        </DialogActions>

      </Box>
    </Dialog>
  )
}