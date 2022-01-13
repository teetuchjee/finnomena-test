import '@/themes/global.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ThemeBase } from '@/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ThemeBase}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
