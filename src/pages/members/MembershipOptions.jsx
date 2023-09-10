import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const MembershipOptions = ({ membership, price, enrollment }) => {
  return (
    <Box component={Paper} sx={{ minWidth: '100%', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
      <Typography variant='h4'>{membership}</Typography>
      <Typography variant='caption'>*as low as</Typography>
      <Typography variant='h3' sx={{ mb: 1, color: 'primary.main' }}>
        ${price}<Typography variant='h5' component='span'>.99</Typography>
        <Typography variant='body1' component='span'>/month</Typography>
      </Typography>
      <Divider sx={{ backgroundColor: 'neutral.main', width: '100%' }} />
      <Typography variant='body2' sx={{ textTransform: 'uppercase', my: 1 }}>${enrollment} Enrollment Fee</Typography>
      <Divider sx={{ backgroundColor: 'neutral.main', width: '100%' }} />
      <Button variant='contained' sx={{ boxShadow: 'none', mt: 2 }}>Get {membership}</Button>
    </Box>
  )
}

export default MembershipOptions;