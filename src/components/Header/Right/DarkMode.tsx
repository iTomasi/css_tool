'use client'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'hooks'

const iconClassName = 'w-7 h-7'

export default function DarkMode () {
  const { theme, toggle } = useTheme()

  return (
    <button
      className="flex justify-center items-center"
      type="button"
      onClick={toggle}
    >
      {
        theme === 'dark'
          ? <MoonIcon className={`${iconClassName} text-yellow-400`} />
          : <SunIcon className={iconClassName} />
      }
    </button>
  )
}
