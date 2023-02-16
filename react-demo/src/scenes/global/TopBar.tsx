import {
  Box,
  InputAdornment,
  IconButton,
  TextField,
  useTheme
} from '@mui/material'
import { colors } from './../../theme'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'

function TopBar(): JSX.Element {
  const theme = useTheme()
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      {/* Search Bar */}
      <Box display='flex' borderRadius='3px' bgcolor={colors.primary[400]}>
        <TextField
          size='small'
          placeholder='Search'
          InputProps={{
            endAdornment: (
              <IconButton edge='end'>
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
              </IconButton>
            )
          }}
        ></TextField>
        {/* Icons */}
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
