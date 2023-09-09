import { useTheme } from '@mui/material/styles';
import { Box, Link, Typography, useMediaQuery } from '@mui/material';
import hero from '../../assets/hero.jpg'
import CommunityImages from './CommunityImages';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Box className='container'>
      <Box sx={{ background: 'black', display: 'flex', justifyContent: 'center', p: 2 }}>
        <Typography variant='body1' sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
          <span style={{ color: theme.palette.primary.main }}>
            {!isMobile && (<span>Experience </span>)}
            ExtremeFit®{' '}
          </span>
          {!isMobile && (<span style={{ color: 'white' }}>Our Premier Studio Classes</span>)}
        </Typography>
        <Link 
          href='#' 
          sx={{ 
            textTransform: 'uppercase', 
            fontWeight: 'bold', 
            ml: 2, 
            color: isMobile ? 'white' : 'primary'
          }}>
            Learn More
        </Link>
      </Box>
      <img id='hero' src={hero} alt='Weight Lifter' />
      <Box sx={{ display: 'block', textAlign: 'center', my: 6, mx: 2 }}>
        <Typography variant='h4' color='primary' sx={{ textTransform: 'uppercase', fontWeight: 900, mb: 2 }}>
          Get Strong, Feel Healthy, Improve Your Lifestyle
        </Typography>
        <Typography variant='h5' sx={{ fontWeight: 900 }}>
          With something for everyone, come in to find out what works for you and join the RTX movement! 
        </Typography>
      </Box>
      <CommunityImages />
    </Box>
  )
}

export default Home;