import Container from '@mui/material/Container'
import useMediaQuery from '@mui/material/useMediaQuery';
import Carousel from 'react-material-ui-carousel';
import Grid from '@mui/material/Unstable_Grid2';
import img1 from '../../assets/community_one.jpg';
import img2 from '../../assets/community_two.jpg';
import img3 from '../../assets/community_three.jpg';
import img4 from '../../assets/community_four.jpg';

const CommunityImages = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <>
      { isMobile ? (
        <Carousel>
          <img src={img1} alt='Fitness Image' />
          <img src={img2} alt='Fitness Image' />
          <img src={img3} alt='Fitness Image' />
          <img src={img4} alt='Fitness Image' />
        </Carousel>
      ) : (
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={2}>
            <Grid>
              <img className='img-slider' src={img1} alt='Fitness Image' />
            </Grid>
            <Grid>
              <img className='img-slider' src={img2} alt='Fitness Image' />
            </Grid>
            <Grid>
              <img className='img-slider' src={img3} alt='Fitness Image' />
            </Grid>
            <Grid>
              <img className='img-slider' src={img4} alt='Fitness Image' />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}

export default CommunityImages;