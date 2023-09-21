import { NavLink as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const MainNav = ({ onHandleCloseNavMenu }) => {
  const pages = [
    ['Membership', 'membership-plans'], 
    // ['Locations', 'locations'], 
    // ['Amenities', 'amenities'],
    // ['Classes', 'classes'],
    // ['About', 'about']
  ]

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page[0]}
          component={RouterLink}
          to={page[1]}
          onClick={onHandleCloseNavMenu}
          sx={{ color: 'white' }}
        >
          {page[0]}
        </Button>
      ))}
    </Box>
  )
}

export default MainNav;