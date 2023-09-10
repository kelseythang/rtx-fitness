import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './contexts/ThemeContext';
import NavBar from './pages/navigation/NavBar';
import Home from './pages/home/Home';
import Membership from './pages/membership/Membership';
import Locations from './pages/locations/Locations';
import Amenities from './pages/amenities/Amenities';
import Classes from './pages/classes/Classes';
import About from './pages/about/About';
import Promo from './pages/members/Promo';
import Join from './pages/members/Join';
import NotFound from './components/NotFound';
import Footer from './pages/footer/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/rtx-fitness' element={<Home />} />
        <Route path='/membership-plans' element={<Membership />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/amenities' element={<Amenities />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/about' element={<About />} />
        <Route path='/promo-offer' element={<Promo />} />
        <Route path='/join' element={<Join />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App;