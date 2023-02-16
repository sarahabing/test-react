import { theme } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './scenes/global/TopBar';
import Dashboard from './scenes/dashboard';
import SideBar from './scenes/global/SideBar';

function App (): JSX.Element {

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
              <div className='app'>
                <main className='content'>
                  <TopBar />
                </main>
              </div>
      </ThemeProvider>
  )
}
export default App
