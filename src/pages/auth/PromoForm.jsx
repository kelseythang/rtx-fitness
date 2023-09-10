import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, FormControl, TextField, Typography } from '@mui/material';
import CustomAlert from '../../components/CustomAlert';

const PromoForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [openAlert, setOpenAlert] = useState(false);

  const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value})

  const handleSubmit = e => {
    e.preventDefault();
    setFormData({ firstName: '', lastName: '', email: '' })
    setOpenAlert(!openAlert)

    setTimeout(() => {
      setOpenAlert(prev => !prev)
    }, 5000)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box component='form' onSubmit={handleSubmit} sx={{ maxWidth: 'sm' }}>
        <FormControl fullWidth>
          <TextField
            required
            label='First Name'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            variant='filled'
            margin='normal'
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            required
            label='Last Name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            variant='filled'
            margin='normal'
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            required
            label='Email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            variant='filled'
            margin='normal'
          />
        </FormControl>
        <Button type='submit' variant='contained' sx={{ boxShadow: 'none', my: 2 }}>
          Get Your Free Pass
        </Button>
        {openAlert && <CustomAlert message='Form Submission Example' />}
      </Box>
      <Typography variant='caption' sx={{ mb: 2 }}>
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms 
        of Service apply.
      </Typography>
    </Box>
  )
}

export default PromoForm;