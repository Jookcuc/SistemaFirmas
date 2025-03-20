import { createTheme } from "@mui/material";

export const firmasTheme = createTheme({
  palette: {
    primary: {
      main: "#3B82F6",
    },
    secondary: {
      main: "#6B7280",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
    h1: { fontSize: "2rem", fontWeight: 700 },
    h2: { fontSize: "1.75rem", fontWeight: 600 },
    body1: { fontSize: "1rem", fontWeight: 400 },
    button: { textTransform: "none", fontWeight: 500 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 16px",
          fontSize: "1rem",
          fontWeight: "bold",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          borderRadius: 8,
        },
      },
    },
  },
});
