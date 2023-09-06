import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
   Facebook as FacebookIcon,
   Instagram as InstagramIcon,
   Twitter as TwitterIcon, 
   Pinterest as PinterestIcon,
   YouTube as YoutubeIcon
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ background: theme.palette.secondary.main, mt: 2, py: 4 }}>
      <Container maxWidth='lg'>
        <Divider fullWidth sx={{ backgroundColor: 'neutral.main' }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mt: 2 }}>
            {['Career', 'Support', 'Privacy', 'Terms'].map(link => (
              <Typography 
                key={link}
                variant='body1'
                className='bottom-nav'
                sx={{ mr: 2 }}
              >
                {link}
              </Typography>
            ))
            } 
          </Box>
          <Typography 
            variant='body1'
            sx={{ 
              display: { xs: 'flex', md: 'none' }, 
              color: 'neutral.main', 
              mt: 2 
            }}>
              © 2023 RTX Fitness
          </Typography>
          <Stack direction='row' spacing={1} sx={{ mt: 2 }}>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <PinterestIcon />
            <YoutubeIcon /> 
          </Stack>
        </Box>
        <Typography 
          variant='body1' 
          sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            color: 'neutral.main', 
            mt: 2 }}
            >
              © 2023 RTX Fitness
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer;