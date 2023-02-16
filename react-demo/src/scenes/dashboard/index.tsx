import { Box } from '@mui/system'
import { Header } from '../../components/Header'

function Dashboard(): JSX.Element {
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='dashboard' subtitle='Welcome to your dashboard.' />
      </Box>
    </Box>
  )
}

export default Dashboard
