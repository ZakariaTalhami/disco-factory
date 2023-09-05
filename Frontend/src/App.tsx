import { ThemeProvider } from 'styled-components'
import { lightTheme } from './style/theme'
import Flow from './flow'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Flow/>
    </ThemeProvider>
  )
}

export default App
