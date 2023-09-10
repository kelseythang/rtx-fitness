import { useNavigate, NavLink as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../assets/logo.png'
import MainNav from './MainNav';
import MobileNav from './MobileNav';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const handleOpenNavMenu = e => setAnchorElNav(e.currentTarget)

  const handleCloseNavMenu = () => setAnchorElNav(null)

  return (
    <AppBar position='sticky' style={{ background: theme.palette.secondary.main, boxShadow: 'none'}}>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
            <img src={logo} 
              alt='RTX Fitness Logo' 
              height={isMobile ? '50px' : '85px'} 
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }}
            />
            {/* Mobile Menu Settings */}
            <MobileNav 
              onHandleOpenNavMenu={handleOpenNavMenu}
              onHandleCloseNavMenu={handleCloseNavMenu}
              anchorElNav={anchorElNav}
            />
            {/* Desktop Menu Settings */}
            <MainNav onHandleCloseNavMenu={handleCloseNavMenu} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button id='slanted-button-trial' className='slanted-button' component={RouterLink} to='/promo-offer'>Free Trial</Button>
              <Button id='slanted-button-login' className='slanted-button' component={RouterLink} to='/join'>Join</Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar;