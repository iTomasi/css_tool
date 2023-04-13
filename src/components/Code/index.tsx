import { useState, useEffect } from 'react'
import Css from './Css'
import Tailwind from './Tailwind'
interface Props {
  syntax: keyof typeof Components
  value: string
}

const Components = {
  css: Css,
  tailwind: Tailwind
}

export default function Code ({
  syntax,
  value
}: Props) {
  const [copy, setCopy] = useState<boolean>(false)

  useEffect(() => {
    if (!copy) return

    const timeout = setTimeout(() => {
      setCopy(false)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [copy])

  const handleOnClickCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)

      setCopy(true)
    } catch (e) {
      console.log(e)
      console.log('Error copy')
    }
  }

  const Component = Components[syntax] ?? Components.css

  return (
    <div className="bg-stone-950 p-4 rounded-md flex justify-between items-start gap-2">
      <Component
        value={value}
      />

      <button
        className="text-white font-medium"
        type="button"
        onClick={handleOnClickCopy}
      >
        { copy ? 'Copied' : 'Copy' }
      </button>
    </div>
  )
}
