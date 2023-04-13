import { useState, useEffect } from 'react'
import Css from './Css'

interface Props {
  value: string
}

export default function Code ({
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

  return (
    <div className="bg-stone-950 p-4 rounded-md flex justify-between items-start gap-2">
      <Css
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
