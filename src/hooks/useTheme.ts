import { useContext } from 'react'
import { ThemeContext } from 'context/theme'

export const useTheme = () => {
  const ctx = useContext(ThemeContext)

  return ctx
}
