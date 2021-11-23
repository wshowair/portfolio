import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ResetStyles, theme } from '@styles'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <ResetStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
