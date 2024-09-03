import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Dark green
    },
    secondary: {
      main: '#004d40', // Darker green
    },
    background: {
      default: '#f4f4f4', // Light gray background
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
