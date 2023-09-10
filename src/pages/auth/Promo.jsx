import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import SectionTitle from '../../components/SectionTitle';
import StandardHeader from '../../components/StandardHeader';
import trialImg from '../../assets/trial.jpg';
import PromoForm from './PromoForm';

const Promo = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Box className='container'>
      <StandardHeader image={trialImg} title='Try RTX Fitness For Free' />
      <Box sx={{ display: 'block', textAlign: 'center', mt: 2, mx: 2 }}>
        <SectionTitle title='Receive Your Free Trial Pass' color='white' />
        <Typography variant='body1' sx={{ mx: isMobile ? 2 : 30 }}>
          Fill out the form and we'll email you a trial pass so you can start working 
          out today! Guests ages 12-17 must be accompanied by a parent or legal guardian 
          when using our facilities. All guests ages 18+ will be required to show a 
          local government-issued ID upon check in.
        </Typography>
        <PromoForm />
      </Box>
    </Box>
  )
}

export default Promo;