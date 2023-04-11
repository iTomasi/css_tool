'use client'
import { createContext } from 'react'

export type Theme = 'dark' | 'light'

interface IContext {
  theme: Theme
  toggle: () => void
}

const Context = createContext<IContext>({
  theme: 'dark',
  toggle: () => {}
})

export default Context
