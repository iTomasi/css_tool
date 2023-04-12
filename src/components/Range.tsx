'use client'
import type { MouseEvent, ChangeEvent, TouchEvent } from 'react'
import { useRef } from 'react'
import { isMobile } from 'utils'

export interface IOnChangePayload {
  value: string
  name: string
}

interface Props {
  title: string
  measurer: string
  min: number
  max: number
  value: string
  onChange: (value: IOnChangePayload) => void
  name: string
}

const numberRegExp = /^(-)?(((0|[1-9]+))?(\.)?)([0-9]+)?$/

export default function Range ({
  title,
  measurer,
  min,
  max,
  value,
  onChange,
  name
}: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  let thePercentage = 0
  const valueNumber = Number(value)

  if (!isNaN(valueNumber)) {
    if (valueNumber > max) thePercentage = 100
    else if (valueNumber > min) thePercentage = ((valueNumber - min) * 100) / (max - min)
  }

  const handlePercentage = (clientX: number) => {
    const { current: $button } = buttonRef

    if ($button === null) return

    const { x, width } = $button.getBoundingClientRect()

    let position = clientX - x

    if (position < 0) position = 0
    else if (position > width) position = width

    const percentage = (position * 100) / width

    const value = Math.floor((percentage * (max - min)) / 100)

    onChange({
      name,
      value: (value + min).toString()
    })
  }

  const handleOnMouseMove = (e: any) => {
    handlePercentage(e.clientX)
  }

  const handleOnMouseUp = () => {
    window.removeEventListener('mousemove', handleOnMouseMove)
    window.removeEventListener('mouseup', handleOnMouseUp)
  }

  const handleOnMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    if (isMobile()) return

    const { target } = e

    if (target !== divRef.current) {
      handlePercentage(e.clientX)
    }

    window.addEventListener('mousemove', handleOnMouseMove)
    window.addEventListener('mouseup', handleOnMouseUp)
  }

  const handleOnTouchMove = (e: any) => {
    const clientX = e.touches[0].clientX

    handlePercentage(clientX)
  }

  const handleOnTouchEnd = () => {
    window.removeEventListener('touchmove', handleOnTouchMove)
    window.removeEventListener('touchend', handleOnTouchEnd)
  }

  const handleOnTouchStart = (e: TouchEvent<HTMLButtonElement>) => {
    console.log('a')
    const { touches, target } = e

    const clientX = touches[0].clientX

    if (target !== divRef.current) {
      handlePercentage(clientX)
    }

    window.addEventListener('touchmove', handleOnTouchMove)
    window.addEventListener('touchend', handleOnTouchEnd)
  }

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (
      value !== '' &&
      !numberRegExp.test(value)
    ) return

    onChange({
      value: e.target.value,
      name
    })
  }

  return (
    <div>
      <div className="flex justify-between items-center gap-4 mb-2">
        <label className="font-medium">{title}</label>
        <div className="flex items-center gap-1">
          <input
            className="w-14 text-center bg-white dark:bg-stone-950 rounded-md h-8 focus:outline-none"
            onChange={handleOnChangeInput}
            value={value}
          />
          <span>{measurer}</span>
        </div>
      </div>

      <button
        ref={buttonRef}
        type="button"
        className="w-full h-2 bg-gray-300 dark:bg-stone-700 rounded-full"
        onMouseDown={handleOnMouseDown}
        onTouchStart={handleOnTouchStart}
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
