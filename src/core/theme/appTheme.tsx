import { ThemeProvider } from '@emotion/react'
import { firmasTheme } from '.'
import { JSX } from 'react'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const AppTheme = ({ children }: Props) => {
  return <ThemeProvider theme={firmasTheme}>{children}</ThemeProvider>
}
