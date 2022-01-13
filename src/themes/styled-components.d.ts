import { ThemeBase } from '.'

type ThemeInterface = typeof ThemeBase

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}
