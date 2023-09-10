import { NavLink as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const MobileNav = ({ onHandleOpenNavMenu, onHandleCloseNavMenu, anchorElNav }) => {
  const pages = [
    ['Membership', 'membership-plans'], 
    ['Locations', 'locations'], 
    ['Amenities', 'amenities'],
    ['Classes', 'classes'],
    ['About', 'about'],
    ['Free Trial', 'promo-offer'],
    ['Login', 'login']
  ]

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size='large'
        onClick={onHandleOpenNavMenu}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={onHandleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page[0]} onClick={onHandleCloseNavMenu}>
            <Typography 
              component={RouterLink} 
              to={page[1]}
              sx={{ 
                textDecoration: 'none', 
                color: 'inherit', 
                textAlign: 'center'
              }}
            >
              {page[0]}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default MobileNav;