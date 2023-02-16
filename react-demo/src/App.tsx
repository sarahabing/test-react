import { theme } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App (): JSX.Element {

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
              <div className='app'></div>
      </ThemeProvider>
  )
}
export default App
