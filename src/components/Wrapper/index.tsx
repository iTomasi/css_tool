import type { ReactNode } from 'react'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from 'components/button'
import CodeModal from './CodeModal'

interface Props {
  className?: string
  classNamePreview?: string
  childrenPreview: ReactNode
  children: ReactNode
  code: { css: string, tailwind: string }
}

export default function Wrapper ({
  className = '',
  classNamePreview = '',
  childrenPreview,
  children,
  code
}: Props) {
  const [showLeft, setShowLeft] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleOnClickToggleShow = () => {
    setShowLeft((prev) => !prev)
  }

  const handleOnClickButtonShowCode = () => {
    setShowModal(true)
  }

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="fixed top-20 left-8 lg:hidden">
        <button
          className="bg-white dark:bg-stone-950 border border-stone-700 h-10 px-2 rounded-md flex items-center gap-2"
          type="button"
          onClick={handleOnClickToggleShow}
        >
          <Bars3Icon
            className="w-7 h-7"
          />
          <span>Menu</span>
        </button>
      </div>
      <div className={`fixed right-0 bottom-0 left-0 top-16 bg-black dark:bg-white bg-opacity-25 dark:bg-opacity-25 lg:bg-opacity-0 lg:relative lg:top-0 lg:visible lg:opacity-100 transition-all ${showLeft ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`min-w-[20rem] max-w-[20rem] md:min-w-[24rem] md:max-w-[24rem] flex flex-col justify-between h-full bg-gray-100 border-r-2 border-gray-200 dark:bg-stone-900 dark:border-stone-800 transition-all lg:translate-x-0 ${showLeft ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="px-8 py-4 max-h-[calc(100vh-9rem)] overflow-y-auto">
            <div className="lg:hidden mb-4 lg:mb-0">
              <button
                type="button"
                onClick={handleOnClickToggleShow}
              >
                <XMarkIcon
                  className="w-7 h-7"
                />
              </button>
            </div>
            <div className={className}>
              {children}
            </div>
          </div>

          <div className="border-t-2 px-8 h-20 border-gray-200 dark:border-stone-800 flex items-center">
            <Button
              className="w-full"
              type="button"
              onClick={handleOnClickButtonShowCode}
            >
              Show code
            </Button>
          </div>
        </div>
      </div>

      <div className={`w-full px-8 py-4 ${classNamePreview}`}>
        {childrenPreview}
      </div>

      <CodeModal
        show={showModal}
        setShow={setShowModal}
        value={code}
      />
    </div>
  )
}
