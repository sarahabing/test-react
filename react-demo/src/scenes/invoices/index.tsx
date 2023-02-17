import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import { Header } from '../../components/Header'
import { mockDataInvoices } from '../../data/mockData'
import { colors } from '../../theme'

function Invoices(): JSX.Element {
  const theme = useTheme()
  const cols = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell'
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params:{row:{cost:""}}) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      )
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1
    }
  ]
  return (
    <Box m='20px' p="20px">
      <Header title='INVOICES' subtitle='List of Invoice Balances' />
      <Box
        m='40px 0 0 0'
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none'
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none'
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300]
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none'
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400]
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700]
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`
          }
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={cols} />
      </Box>
    </Box>
  )

}

export default Invoices
