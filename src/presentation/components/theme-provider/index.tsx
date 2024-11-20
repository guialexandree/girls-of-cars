import {createTheme, ThemeProvider as ThemeProviderMUI } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b24ab0",
    },
    secondary: {
      main: "#8fdcf4",
    },
    background: {
      default: "#242424",
      paper: "#1e1e1e"
    }
  }
})

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProviderMUI theme={darkTheme}>
      {children}
    </ThemeProviderMUI>
  )
}
