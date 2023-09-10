import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const StandardHeader = ({ image, title }) => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Box 
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover', 
        height: isMobile ? '150px' : '300px'
      }}
      className='header'
    >
      <Typography 
        variant='h2' 
        sx={{ 
          textTransform: 'uppercase', 
          fontWeight: 'bold', 
          color: 'white' 
      }}>
        {title}
      </Typography>
    </Box>
  )
}

export default StandardHeader;