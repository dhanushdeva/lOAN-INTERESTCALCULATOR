import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', 
    },
    secondary: {
      main: '#004d40', 
    },
    background: {
      default: '#f4f4f4', 
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
