import type { ReactNode } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface Props {
  className?: string
  show: boolean
  setShow: (value: boolean | ((prev: boolean) => boolean)) => void
  children: ReactNode
}

export default function Normal ({
  className,
  show,
  setShow,
  children
}: Props) {
  const handleOnClickX = () => {
    setShow(false)
  }

  const handleOnMouseDown = (e: any) => {
    if (
      !show ||
      (
        e.currentTarget !== e.target &&
        e.currentTarget !== e.target.parentElement
      )
    ) return

    setShow(false)
  }

  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20 transition-all ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      onMouseDown={handleOnMouseDown}
    >
      <div className="w-full">
        <div className="max-w-xl mx-auto bg-gray-200 dark:bg-stone-900 p-4 rounded-md">
          <div className="flex justify-end mb-4">
            <button
              type="button"
              onClick={handleOnClickX}
            >
              <XMarkIcon
                className="h-7 w-7"
              />
            </button>
          </div>
          <div className={className}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
