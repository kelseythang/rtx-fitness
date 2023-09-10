import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import SectionTitle from '../../components/SectionTitle';
import BenefitTable from './BenefitTable';
import MembershipOptions from './MembershipOptions';

const Join = () => {
  return (
    <Box className='container' sx={{ backgroundColor: 'neutral.light' }}>
      <Box sx={{ background: 'black', display: 'flex', justifyContent: 'center' }}>
        <SectionTitle title='Join Today' titleColor='white' />
      </Box>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <SectionTitle title='Choose Your Month to Month Plan' titleColor='primary.main' />
        <Grid container spacing={2} mb={2} sx={{ width: '90%' }}>
          <Grid xs={12} md={4}>
            <MembershipOptions 
              membership='Basic'
              price='24'
              enrollment='99.99'
            />
          </Grid>
          <Grid xs={12} md={4}>
            <MembershipOptions
              membership='Standard'
              price='59'
              enrollment='29.99'
            />
          </Grid>
          <Grid xs={12} md={4}>
            <MembershipOptions
              membership='ExtremeFit'
              price='99'
              enrollment='0.00'
            />
          </Grid>
        </Grid>
        <BenefitTable />
      </Container>
    </Box>
  )
}

export default Join;