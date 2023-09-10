import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import SectionTitle from '../../components/SectionTitle';

const MembershipType = ({ image, background, titleColor, textColor, type, description, price }) => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Grid container>
      <Grid sm={12} md={6}>
        <img src={image} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt='Fitness' />
      </Grid>
      <Grid sm={12} md={6}>
        <Box sx={{ backgroundColor: background, pl: isMobile ? 4 : 10, pr: isMobile ? 4 : 30, py: isMobile ? 6 : 12, height: '100%' }}>
          <SectionTitle title={type} titleColor={titleColor} />
          <Typography variant='body1' sx={{ mb: 6, color: textColor }}>{description}</Typography>
          <Typography variant='caption' sx={{ color: textColor }}>
            *as low as
          </Typography>
          <Typography variant='h5' sx={{ color: textColor }}>
            $ {price} / month
          </Typography>
          <Typography variant='body1' sx={{ textTransform: 'uppercase', color: textColor }}>
            No Annual Commitment
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default MembershipType;