import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SectionTitle from './SectionTitle';

const NotFound = () => {
  return (
    <Box className='container'>
      <Container>
        <SectionTitle title='Not Found' titleColor='black' />
      </Container>
    </Box>
  )
}

export default NotFound;