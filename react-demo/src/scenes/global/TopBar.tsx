import { Box, InputAdornment, IconButton, useTheme } from '@mui/material'
import { colors } from './../../theme'
import InputBase from '@mui/material/InputBase'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'

function TopBar(): JSX.Element {
  const theme = useTheme()
  return (
    <Box display='flex' bgcolor={colors.primary[600]}
    justifyContent='space-between' p={2}>
      {/* Search Bar */}
      <Box display='flex' borderRadius='3px' bgcolor={colors.primary[400]}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display='flex'>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default TopBar
