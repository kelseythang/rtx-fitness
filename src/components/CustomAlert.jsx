import Alert from '@mui/material/Alert';

const CustomAlert = ({ message }) => {
  return (
    <Alert severity='info' sx={{ width: '100%', mb: 2 }}>
      {message}
    </Alert>
  )
}

export default CustomAlert;