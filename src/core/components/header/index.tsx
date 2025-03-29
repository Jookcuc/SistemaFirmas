import { AppBar, Toolbar, Typography, Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { Upload, Groups, Description } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Header.css";

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        {/* Perfil a la izquierda */}
        <Box className="profile-container">
          <Avatar src="/profile.jpg" alt="Usuario" className="profile-avatar" />
          {!isMobile && (
            <Typography variant="h6" className="profile-name">
              Luis Alejandro Vergel
            </Typography>
          )}
        </Box>

        {/* Botones con Tooltips a la derecha */}
        <Box className="actions">
          <Tooltip title="Dashboard" placement="bottom">
            <IconButton className="icon-button">
              <Description className="icon" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Gestión" placement="bottom">
            <IconButton className="icon-button">
              <Groups className="icon" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Subir Documento" placement="bottom">
            <IconButton className="icon-button">
              <Upload className="icon" />
            </IconButton>
          </Tooltip>

        </Box>
      </Toolbar>
    </AppBar>
  );
};
