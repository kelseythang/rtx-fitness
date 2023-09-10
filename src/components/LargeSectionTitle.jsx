import Typography from '@mui/material/Typography';

const LargeSectionTitle = ({ title, titleColor }) => {
  return (
    <Typography variant='h3' 
      sx={{ 
        textTransform: 'uppercase', 
        fontWeight: 'bold', 
        mb: 4,
        color: titleColor
    }}>
      {title}
    </Typography>
  )
}

export default LargeSectionTitle;