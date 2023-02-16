import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { Header } from '../../components/Header'
import { mockDataTeam } from '../../data/mockData'
import { colors } from '../../theme'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'

function Team(): JSX.Element {
  const theme = useTheme()
  const cols = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell'
    },
    {
      field: 'age',
      headerName: 'Age',
      flex: 1,
      type: 'number',
      headerAlign: 'left',
      align: 'left'
    },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'email', headerName: 'E-mail', flex: 1 },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access = '' } }) => {
        return (
          <Box
            width='100%'
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
            borderRadius='4px'
            bgcolor={
              access === 'admin'
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography
              color={colors.grey[100]}
              ml='5px'
              textTransform="capitalize"
            >
              {access}
            </Typography>
          </Box>
        )
      }
    }
  ]
  return (
    <Box m='20px'>
      <Header title='team' subtitle='Managing the team members.' />
      <Box m='40px 0 0 0' height='75vh'>
        <DataGrid rows={mockDataTeam} columns={cols} />
      </Box>
    </Box>
  )
}

export default Team
