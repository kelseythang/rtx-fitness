import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import headerImg from '../../assets/membership.jpg';
import MembershipType from './MembershipType';
import membershipOneImg from '../../assets/membership_type_one.jpg';
import membershipTwoImg from '../../assets/membership_type_two.jpg';
import membershipThreeImg from '../../assets/membership_type_three.jpg';

const Membership = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  const redTheme = theme.palette.primary.main;
  const defaultText = theme.palette.text.primary;

  return (
    <Box className='container' >
      <Box 
        style={{ 
          backgroundImage: `url(${headerImg})`,
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
          No Annual Commitments
        </Typography>
      </Box>
      <MembershipType 
        image={membershipOneImg} 
        background='black'
        titleColor={redTheme}
        textColor={defaultText}
        type='RTX Membership'
        description='Experience boutique-style HIIT classes without the boutique studio price! 
          Our RTX membership offers up our most premium fitness experience. Step 
          into RTX for the ultimate HIIT workout.'
        price='99.99' 
      />
      <MembershipType 
        image={membershipTwoImg} 
        background='white'
        titleColor={redTheme}
        textColor={defaultText}
        type='Standard Membership'
        description='Step up your fitness game with total access to all the equipment, classes, 
          and luxuries VASA has to offer—at any location you want. From basketball and Fitness 
          Cinema to our swimming pool, spa, tanning, and tons more, your Fitness Membership 
          includes everything in Basic, PLUS access to KidCare!'
        price='59.99' 
      />
      <MembershipType 
        image={membershipThreeImg} 
        background={redTheme}
        titleColor='white'
        textColor='black'
        type='Basic Membership'
        description='Get moving with the essentials you need to make your fitness journey a joy.
          Your Basic Membership lets you enjoy unlimited access to all the functional training 
          and cardio equipment your heart desires plus all the weight-training you can handle 
          at your club of enrollment.'
        price='24.99' 
      />
    </Box>
  )
}

export default Membership;