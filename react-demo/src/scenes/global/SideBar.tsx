import { useState, ReactNode } from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import { Typography, useTheme } from '@mui/material'

import { Link } from 'react-router-dom'
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
    <Sidebar
      backgroundColor={colors.primary[600]}
      breakPoint='xs'
      rootStyles={{ border: 'none' }}
    >
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                backgroundColor: active ? '#eecef9' : undefined,
               "&:hover": {
                     backgroundColor: `${colors.primary[400]}`,
                   }, 
            }
          }
        }}
      >
        <MenuItem
          icon={<MenuOutlinedIcon />}
          rootStyles={{
            '&:hover': 'red'
          }}
          onClick={() => {
            collapseSidebar()
          }}
        ></MenuItem>
        {/* Items */}
        {/* Dashboard */}
        <MenuItem
          component={<Link to='/' />}
          style={{
            color: colors.grey[100]
          }}
          icon={<HomeOutlinedIcon />}
        >
          <Typography>Dashboard</Typography>
        </MenuItem>
        {/* Manage Team */}
        <MenuItem
          component={<Link to='/team' />}
          style={{
            color: colors.grey[100]
          }}
          icon={<PeopleOutlinedIcon />}
        >
          <Typography>Manage Team</Typography>
        </MenuItem>
        {/* Contacts */}
        <MenuItem
          component={<Link to='/contacts' />}
          style={{
            color: colors.grey[100]
          }}
          icon={<ContactsOutlinedIcon />}
        >
          <Typography>Contacts</Typography>
        </MenuItem>
        {/* Invoices */}
        <MenuItem
          component={<Link to='/invoices' />}
          style={{
            color: colors.grey[100]
          }}
          icon={<ReceiptOutlinedIcon />}
        >
          <Typography>Invoices</Typography>
        </MenuItem>
        {/* Profile */}
        <MenuItem
          component={<Link to='/profile' />}
          style={{
            color: colors.grey[100]
          }}
          icon={<PersonOutlinedIcon />}
        >
          <Typography>Profile</Typography>
        </MenuItem>
        {/* Calendar */}
        <MenuItem
          component={<Link to='/calendar' />}
          style={{
            color: colors.grey[100]
          }}
          icon={<CalendarTodayOutlinedIcon />}
        >
          <Typography>Calendar</Typography>
        </MenuItem>
        {/* Bar */}
        <MenuItem
          component={<Link to='/bar' />}
          style={{
            color: colors.grey[100]
          }}
          icon={<BarChartOutlinedIcon />}
        >
          <Typography>Bar Chart</Typography>
        </MenuItem>
        {/* Pie */}
        <MenuItem
          component={<Link to='/pie' />}
          style={{
            color: colors.grey[100]
          }}
          icon={<PieChartOutlineOutlinedIcon />}
        >
          <Typography>Pie Chart</Typography>
        </MenuItem>
        {/* Timeline */}
        <MenuItem
          component={<Link to='/line' />}
          style={{
            color: colors.grey[100]
          }}
          icon={<TimelineOutlinedIcon />}
        >
          <Typography>Line Chart</Typography>
        </MenuItem>
        {/* Geography */}
        <MenuItem
          component={<Link to='/geography' />}
          style={{
            color: colors.grey[100]
          }}
          icon={<MapOutlinedIcon />}
        >
          <Typography>Geography</Typography>
        </MenuItem>
        {/* FAQ */}
        <MenuItem
          component={<Link to='/faq' />}
          style={{
            color: colors.grey[100]
          }}
          icon={<HelpOutlineOutlinedIcon />}
        >
          <Typography>FAQ</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default SideBar
