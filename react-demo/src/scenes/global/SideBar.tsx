import { useState, ReactNode } from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'

import { Link, Path } from 'react-router-dom'
import { colors } from './../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

function SideBar(): JSX.Element {
  const theme = useTheme()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')
  const { collapseSidebar } = useProSidebar()

  return (
    <Sidebar backgroundColor={colors.primary[600]} breakPoint='xs' rootStyles={{border:'none'}}>
      <Menu>
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            collapseSidebar()
          }}
        ></MenuItem>

        {/* Items */}

        {/* Dashboard */}
        <Link to='/'>
          <MenuItem
            style={{
              color: colors.grey[100]
            }}
            icon={<HomeOutlinedIcon />}
          >
            <Typography>Dashboard</Typography>
          </MenuItem>
        </Link>

        {/* Manage Team */}
        <Link to='/team'>
          <MenuItem
            style={{
              color: colors.grey[100]
            }}
            icon={<PeopleOutlinedIcon />}
          >
            <Typography>Manage Team</Typography>
          </MenuItem>
        </Link>

        {/* Contacts */}
        <Link to='/contacts'>
          <MenuItem
            style={{
              color: colors.grey[100]
            }}
            icon={<ContactsOutlinedIcon />}
          >
            <Typography>Contacts</Typography>
          </MenuItem>
        </Link>

        {/* Invoices */}
        <Link to='/invoices'>
          <MenuItem
            style={{
              color: colors.grey[100]
            }}
            icon={<ReceiptOutlinedIcon />}
          >
            <Typography>Invoices</Typography>
          </MenuItem>
        </Link>

        {/* Profile */}
        <Link to='/profile'>
          <MenuItem
            style={{
              color: colors.grey[100]
            }}
            icon={<PersonOutlinedIcon />}
          >
            <Typography>Profile</Typography>
          </MenuItem>
        </Link>

        {/* Calendar */}
        <Link to='/calendar'>
          <MenuItem
            style={{
              color: colors.grey[100]
            }}
            icon={<CalendarTodayOutlinedIcon />}
          >
            <Typography>Calendar</Typography>
          </MenuItem>
        </Link>

        {/* Bar */}
        <Link to='/bar'>
          <MenuItem
            style={{
              color: colors.grey[100]
            }}
            icon={<BarChartOutlinedIcon />}
          >
            <Typography>Bar Chart</Typography>
          </MenuItem>
        </Link>

        {/* Pie */}
        <Link to='/pie'>
          <MenuItem
            style={{
              color: colors.grey[100]
            }}
            icon={<PieChartOutlineOutlinedIcon />}
          >
            <Typography>Pie Chart</Typography>
          </MenuItem>
        </Link>

        {/* Timeline */}
        <Link to='/line'>
          <MenuItem
            style={{
              color: colors.grey[100]
            }}
            icon={<TimelineOutlinedIcon />}
          >
            <Typography>Line Chart</Typography>
          </MenuItem>
        </Link>

        {/* Geography */}
        <Link to='/geography'>
          <MenuItem
            style={{
              color: colors.grey[100]
            }}
            icon={<MapOutlinedIcon />}
          >
            <Typography>Geography</Typography>
          </MenuItem>
        </Link>

        {/* FAQ */}
        <Link to='/faq'>
          <MenuItem
            style={{
              color: colors.grey[100]
            }}
            icon={<HelpOutlineOutlinedIcon />}
          >
            <Typography>FAQ</Typography>
          </MenuItem>
        </Link>
      </Menu>
    </Sidebar>
  )
}

export default SideBar
