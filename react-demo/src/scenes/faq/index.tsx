import * as React from 'react'
import { Tabs, Tab, Typography, Divider, Box, useTheme } from '@mui/material'
import { colors } from '../../theme'
import CancelIcon from '@mui/icons-material/Cancel'
import { Header } from '../../components/Header'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

export default function FAQ() {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box m='20px' p='20px'>
      <Header title='FAQ' subtitle='Questions and things.' />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex'
        }}
      >
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          textColor='secondary'
          indicatorColor='secondary'
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab
            icon={<CancelIcon />}
            iconPosition='start'
            label='Account'
            sx={{ padding: '50px', margin: '0 10px' }}
            {...a11yProps(0)}
          />
          <Tab
            icon={<CancelIcon />}
            iconPosition='start'
            label='Returns'
            sx={{ padding: '50px' }}
            {...a11yProps(1)}
          />
          <Tab
            icon={<CancelIcon />}
            iconPosition='start'
            label='Shipping'
            sx={{ padding: '50px' }}
            {...a11yProps(2)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box p={2}>
            <Typography color={colors.greenAccent[300]} variant='h4'>
              What is an account?
            </Typography>
            <Typography variant='h5'>Good question.</Typography>
          </Box>

          <Box p={2}>
            <Typography color={colors.greenAccent[300]} variant='h4'>
              What is an account?
            </Typography>
            <Typography variant='h5'>Good question.</Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box p={2}>
            <Typography color={colors.greenAccent[300]} variant='h4'>
              What is your return policy?
            </Typography>
            <Typography variant='h5'>Good question.</Typography>
          </Box>

          <Box p={2}>
            <Typography color={colors.greenAccent[300]} variant='h4'>
              What is a return?
            </Typography>
            <Typography variant='h5'>Good question.</Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box p={2}>
            <Typography color={colors.greenAccent[300]} variant='h4'>
              What is your shipping policy?
            </Typography>
            <Typography variant='h5'>Good question.</Typography>
          </Box>

          <Box p={2}>
            <Typography color={colors.greenAccent[300]} variant='h4'>
              Do you ship to Ohio?
            </Typography>
            <Typography variant='h5'>Good question.</Typography>
          </Box>
        </TabPanel>
      </Box>
    </Box>
  )
}
