import type { ReactNode } from 'react'

interface Props {
  className?: string
  classNamePreview?: string
  childrenPreview: ReactNode
  children: ReactNode
}

export default function Wrapper ({
  className = '',
  classNamePreview = '',
  childrenPreview,
  children
}: Props) {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className={`min-w-[24rem] max-w-[24rem] bg-gray-100 border-r-2 border-gray-200 dark:bg-stone-900 dark:border-stone-800 py-4 pl-8 px-8 max-h-[calc(100vh-4rem)] overflow-y-auto ${className}`}>
        {children}
      </div>

      <div className={`w-full px-8 py-4 ${classNamePreview}`}>
        {childrenPreview}
      </div>
    </div>
  )
}
