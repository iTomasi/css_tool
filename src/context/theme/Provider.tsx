'use client'
import type { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import Context, { type Theme } from './Context'

interface Props {
  children: ReactNode
}

const LS_KEY = 'iw_theme'

export default function Provider ({
  children
}: Props) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const iwTheme = localStorage.getItem(LS_KEY)?.toLowerCase()

    if (iwTheme !== 'light') return

    document.documentElement.classList.remove('dark')
    setTheme('light')
  }, [])

  const toggle = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem(LS_KEY, 'dark')
      document.documentElement.classList.add('dark')
      return
    }

    setTheme('light')
    localStorage.setItem(LS_KEY, 'light')
    document.documentElement.classList.remove('dark')
  }

  return (
    <Context.Provider value={{
      theme,
      toggle
    }}>
      {children}
    </Context.Provider>
  )
}
