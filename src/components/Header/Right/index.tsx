'use client'
import { useTheme } from 'hooks'

export default function Right () {
  const { theme, toggle } = useTheme()
  return (
    <div>
      <button type="button" onClick={toggle}>
        {theme}
      </button>
    </div>
  )
}
