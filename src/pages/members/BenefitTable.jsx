import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';

const BenefitTable = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const data = [
    { name: 'Gym Access', basic: isMobile ? 'One Gym' : 'One Location Only', standard: isMobile ? 'All' : 'All Locations', extreme: isMobile ? 'All' : 'All Locations' },
    { name: 'ExtremeFit HIIT Classes', basic: '', standard: '', extreme: '✔' },
    { name: 'Personal Trainer', basic: '', standard: '', extreme: '✔' },
    { name: 'Free Child Care', basic: '', standard: '', extreme: '✔' },
    { name: 'Group Fitness Classes', basic: '', standard: '✔', extreme: '✔' },
    { name: 'Free Weights', basic: '✔', standard: '✔', extreme: '✔' },
    { name: 'Tanning', basic: '✔', standard: '✔', extreme: '✔' },
  ]
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none', maxWidth: '100%', overflowX: 'auto', mb: 2 }}>
      <Table sx={{ boxShadow: 'none', maxWidth: '100%', '& th, & td': { borderRight: '1px solid #e0e0e0' } }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Membership</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', color: 'primary.main' }}>{isMobile ? '$24.99' : 'Basic'}</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', color: 'primary.main' }}>{isMobile ? '$59.99' : 'Standard'}</TableCell>
            <TableCell align='center' sx={{ fontWeight: 'bold', color: 'primary.main' }}>{isMobile ? '$99.99' : 'ExtremeFit'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(data => (
            <TableRow key={data.name}>
              <TableCell sx={{ width: '25%', fontWeight: 'bold' }}>{data.name}</TableCell>
              <TableCell align='center' sx={{ width: '10%' }}>{data.basic}</TableCell>
              <TableCell align='center' sx={{ width: '10%' }}>{data.standard}</TableCell>
              <TableCell align='center' sx={{ width: '10%' }}>{data.extreme}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BenefitTable;