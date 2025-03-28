import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider } from '@mui/material';
import {SignatureModalProps} from './SignatureModal.interface'
import { FC, useRef } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloudAdd from '../../icon/CloudAdd/cloud-add.svg'
import ReactSignatureCanvas from 'react-signature-canvas';

export const SignatureModal:FC<SignatureModalProps> =({open, handleClose, setFirm}) => {
  
  const sigCanvas = useRef<ReactSignatureCanvas>(null)


  const handleSaveSignature = () => {
    var firmData = ""
    if(sigCanvas.current){
      if(!sigCanvas.current.isEmpty()){
        firmData = sigCanvas.current.toDataURL('image/svg+xml')
      }
      setFirm(firmData)
      handleClose()
    }
  }

  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      fullWidth 
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "20px",
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
        <ReactSignatureCanvas 
          ref={sigCanvas}
          canvasProps={{
            style: {
              border: "3px #888 dashed",
              borderRadius:"8px",
              width:"91.5%",
              height:"30vh",
              justifySelf:"center",
              display:"flex"
            }
          }}
        />

        <DialogActions 
          sx={{display:"flex", 
          justifyContent: "center", 
          marginY:"0.7rem"}}
        >
          <Button 
            variant="contained"
            onClick={() => handleSaveSignature()}
            sx={{backgroundColor: "#fff",
              color: "#54575c",
              border: "solid #cbd0dc",
              boxShadow: "none",
              fontSize: "20px",
              paddingY: "0.3rem"
            }}  
          > 
            Subir Firma 
          </Button>
        </DialogActions>

      </Box>
    </Dialog>
  )
}