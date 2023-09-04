import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: { main: red[500] },
    secondary: { main: '#041430' },
    neutral: {
      dark: grey[700],
      main: grey[500],
      light: grey[100]
    },
    text: { primary: grey[700] },
    background: { default: '#fffefb' }
  },
  typography: { 
    fontFamily: ['Montserrat', 'sans-serif'].join(',')
  }
})

export default theme;