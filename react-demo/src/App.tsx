import { theme } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar'
import TopBar from './scenes/global/TopBar';
import SideBar from './scenes/global/SideBar';
import Dashboard from './scenes/dashboard'
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import Profile from './scenes/profile';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
import Geography from './scenes/geography';
import Calendar from './scenes/calendar';
import BottomBar from './scenes/global/BottomBar';


function App (): JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <ProSidebarProvider>
        <CssBaseline />
        <div className='app'>
          <SideBar />

          <main className='content'>
            <header>
              <TopBar />
            </header>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/calendar' element={<Calendar />} />
            </Routes>
          </main>
        </div>
        <footer>
          <BottomBar />
        </footer>
      </ProSidebarProvider>
    </ThemeProvider>
  )
}
export default App
