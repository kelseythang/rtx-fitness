import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './contexts/ThemeContext';
import Home from './pages/home/Home';

const App = () => {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App;