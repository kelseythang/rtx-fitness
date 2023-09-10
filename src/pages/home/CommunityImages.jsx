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
        <Container sx={{ mb: 2} }>
          <Carousel>
            <img src={img1} alt='Gym Class' />
            <img src={img2} alt='Gym Class' />
            <img src={img3} alt='Gym Class' />
            <img src={img4} alt='Gym Class' />
          </Carousel>
        </Container>
      ) : (
        <Container sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Grid container spacing={2}>
            <Grid>
              <img className='img-slider' src={img1} alt='Gym Class' />
            </Grid>
            <Grid>
              <img className='img-slider' src={img2} alt='Gym Class' />
            </Grid>
            <Grid>
              <img className='img-slider' src={img3} alt='Gym Class' />
            </Grid>
            <Grid>
              <img className='img-slider' src={img4} alt='Gym Class' />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}

export default CommunityImages;