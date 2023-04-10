'use client'
import type { MouseEvent } from 'react'
import { useRef } from 'react'

interface Props {
  title: string
  measurer: string
  min: number
  max: number
  value: number
  onChange: (value: number) => void
}

export default function Range ({
  title,
  measurer,
  min,
  max,
  value,
  onChange
}: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  let thePercentage = 0

  if (value > max) thePercentage = 100
  else if (value > min) thePercentage = (value * 100) / max

  const handleOnMouseMove = (e: any) => {
    const { current: $button } = buttonRef

    if ($button === null) return

    const { x, width } = $button.getBoundingClientRect()

    let position = e.clientX - x

    if (position < 0) position = 0
    else if (position > width) position = width

    const percentage = (position * 100) / width

    const value = Math.floor((percentage * max) / 100)

    onChange(value)
  }

  const handleOnMouseUp = () => {
    window.removeEventListener('mousemove', handleOnMouseMove)
    window.removeEventListener('mouseup', handleOnMouseUp)
    console.log('onMouseUp')
  }

  const handleOnMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    const { target } = e

    if (target === divRef.current) {
      console.log('circle')
    }

    window.addEventListener('mousemove', handleOnMouseMove)
    window.addEventListener('mouseup', handleOnMouseUp)
  }

  return (
    <div>
      <div className="flex justify-between items-center gap-4 mb-4">
        <label className="font-medium">{title}</label>
        <div className="flex items-center gap-1">
          <input
            className="w-14 text-center bg-stone-950 rounded-md h-8 focus:outline-none"
          />
          <span>{measurer}</span>
        </div>
      </div>

      <button
        ref={buttonRef}
        type="button"
        className="w-full h-2 bg-stone-700 rounded-full"
        onMouseDown={handleOnMouseDown}
      >
        <div
          className="h-full bg-sky-500 rounded-full relative flex items-center"
          style={{
            width: `${thePercentage}%`
          }}
        >
          <div ref={divRef} className="h-4 w-4 rounded-full bg-sky-500 absolute right-[-6px]">

          </div>
        </div>
      </button>
    </div>
  )
}
