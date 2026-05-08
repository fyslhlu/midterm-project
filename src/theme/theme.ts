import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb", // blue (matches Tailwind blue-600)
    },
    secondary: {
      main: "#10b981", // green accent
    },
    background: {
      default: "#f3f4f6", // matches gray-100
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});